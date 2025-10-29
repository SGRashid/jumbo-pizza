import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import { MenuLinks } from '../pages/MenuLinks/MenuLinks';
import Fly from '../Fly/Fly';

export const Layout: FC = () => (
    <div className={styles.layout}>
        <div className={styles.sidebar}>
        <MenuLinks />
        <Fly />
        </div>
        <div className={styles['main-content']}>
            <Outlet />
        </div>
    </div>
);