import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import { MenuLinks } from '../pages/MenuLinks/MenuLinks';
import Fly from '../Fly/Fly';
import { ButtonSecondary } from '../ButtonSecondary/ButtonSecondary';
import { FlyLabel } from '../FlyLabel/FlyLabel';
import { MenuItems } from './Layout.constants';

export const Layout: FC = () => (
    <div className={ styles.layout }>
        <div className={ styles.sidebar }>
            <FlyLabel />
            <MenuLinks items={ MenuItems } />
            <ButtonSecondary>Выйти</ButtonSecondary>
            <Fly />
        </div>
        <div className={ styles['main-content'] }>
            <Outlet />
        </div>
    </div>
);