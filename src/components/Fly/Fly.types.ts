export interface FlyProps {
  size?: number; // размер в пикселях
  speed?: number; // скорость движения (1-10)
  color?: string;
  onSquash?: () => void; // callback при убийстве мухи
  zIndex?: number;
}

export interface FlySplatProps {
  x?: number;
  y?: number;
  size?: number;
  color?: string;
}

export interface SplatPosition {
  x: number;
  y: number;
}