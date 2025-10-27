import { useEffect, useRef, useState, useCallback, type FC } from 'react';
import { type FlyProps } from './Fly.props';
import styles from './Fly.module.css';
import { FlySplat } from './FlySplat';

const Fly: FC<FlyProps> = ({ 
  size = 20, 
  speed = 3, 
  color = '#333333',
  onSquash,
  zIndex = 1000 
}) => {
  const flyRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState(0);
  const [isFlyVisible, setIsFlyVisible] = useState(true);
  const [isSquashed, setIsSquashed] = useState(false);
  const animationRef = useRef<number>(null);

  // Генерация случайной начальной позиции
  const getRandomPosition = useCallback(() => {
    if (typeof window === 'undefined') return { x: 0, y: 0 };
    
    return {
      x: Math.random() * (window.innerWidth - size),
      y: Math.random() * (window.innerHeight - size)
    };
  }, [size]);

  // Генерация случайного направления
  const getRandomDirection = useCallback(() => {
    return Math.random() * Math.PI * 2; // 0-360 градусов в радианах
  }, []);

  // Обновление позиции мухи
  const updatePosition = useCallback(() => {
    setPosition(prev => {
      const moveDistance = speed * 0.5;
      const newX = prev.x + Math.cos(direction) * moveDistance;
      const newY = prev.y + Math.sin(direction) * moveDistance;

      // Отскок от границ экрана
      let newDirection = direction;
      let bounced = false;

      if (newX < 0 || newX > window.innerWidth - size) {
        newDirection = Math.PI - direction;
        bounced = true;
      }
      
      if (newY < 0 || newY > window.innerHeight - size) {
        newDirection = -direction;
        bounced = true;
      }

      if (bounced) {
        setDirection(newDirection + (Math.random() - 0.5) * 0.5);
      }

      // Случайное изменение направления
      if (Math.random() < 0.02) {
        setDirection(prevDir => prevDir + (Math.random() - 0.5) * 0.3);
      }

      return {
        x: Math.max(0, Math.min(window.innerWidth - size, newX)),
        y: Math.max(0, Math.min(window.innerHeight - size, newY))
      };
    });

    animationRef.current = requestAnimationFrame(updatePosition);
  }, [size, speed]);

  // Инициализация и очистка
  useEffect(() => {
    setPosition(getRandomPosition());
    setDirection(getRandomDirection());
    
    // Запуск анимации с небольшой задержкой
    const timeout = setTimeout(() => {
      animationRef.current = requestAnimationFrame(updatePosition);
    }, 1000);

    return () => {
      clearTimeout(timeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  },
  [getRandomPosition, getRandomDirection, updatePosition]
);

  // Обработчик убийства мухи
  const handleSquash = () => {
    setIsSquashed(true);
    onSquash?.();
    setIsFlyVisible(false);
    // Исчезновение через секунду
    setTimeout(() => {
      setIsSquashed(false);
      // Появление снова
      setTimeout(() => {
         setIsFlyVisible(true);
      }, 500);
    }, 1000);
  };

  // Обработчик ресайза окна
  useEffect(() => {
    const handleResize = () => {
      setPosition(prev => ({
        x: Math.min(prev.x, window.innerWidth - size),
        y: Math.min(prev.y, window.innerHeight - size)
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [size]);

  const flyStyle = {
    '--fly-size': `${size}px`,
    '--fly-color': color,
    '--fly-x': `${position.x}px`,
    '--fly-y': `${position.y}px`,
    '--fly-direction': `${direction}rad`,
    '--z-index': zIndex
  } as React.CSSProperties;

  if (isSquashed) {
    return (
      <FlySplat
        x={position.x + size / 2} // центр мухи
        y={position.y + size / 2} // центр мухи
      />
  );
  }

  if (!isSquashed && isFlyVisible) {
      return (
        <div 
          ref={flyRef}
          className={styles.fly}
          style={flyStyle}
          onClick={handleSquash}
          title="Кликни чтобы убить муху!"
        >
          <div className={styles.body}>
            <div className={styles.eye}></div>
            <div className={styles.eye}></div>
            <div className={styles.wing}></div>
            <div className={styles.wing}></div>
          </div>
        </div>
    );
  }
};

export default Fly;