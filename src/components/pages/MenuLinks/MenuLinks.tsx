import type { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuLinks.module.css';

export const MenuLinks: FC = () => (
    <div className={`${styles.links}`}>
        <Link to='/'>Главная</Link>
        <Link to='/cart'>Карта сайта</Link>
        <Link to='*'>Ошибка</Link>
    </div>
); 