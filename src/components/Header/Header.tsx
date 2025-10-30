import { type FC } from 'react';
import { Input } from '../Input/Input';
import styles from './Header.module.css';

export const Header: FC = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.menu_title}>Меню</h1>
            <Input />
        </div>
    );
};