import { useEffect, useState, type FC } from 'react';
import { useParams } from 'react-router-dom';
import { getMenuItemById } from '../../../helpers/MenuService';
import type { MenuItem } from '../../../interfaces/Menu.interface';
import styles from './Product.module.css';

const Product: FC = () => {
    const [product, setProduct] = useState<MenuItem | null>(null);
    const [imgBroken, setImgBroken] = useState(false);
    const id = useParams().id;

    useEffect(() => {
        getMenuItemById(Number(id)).then(setProduct);
    }, [id]);

    if (!product) {
        return (
            <div className={styles.loading}>
                <h2>Загрузка...</h2>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>{product.name}</h1>

            <div className={styles.content}>
                <div className={styles.imageWrapper}>
                    {!imgBroken && product.image ? (
                        <img
                            src={product.image}
                            alt={product.name}
                            className={styles.image}
                            onError={() => setImgBroken(true)}
                        />
                    ) : (
                        <div className={styles.placeholder}>Картинка недоступна</div>
                    )}
                </div>

                <div className={styles.details}>
                    <p className={styles.price}>Цена: {product.price} $</p>

                    <div className={styles.rating}>Рейтинг: {product.rating} / 5</div>

                    <p className={styles.ingTitle}>Ингредиенты:</p>
                    <ul className={styles.ingredientList}>
                        {product.ingredients.map((ing, idx) => (
                            <li key={idx}>{ing}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Product;