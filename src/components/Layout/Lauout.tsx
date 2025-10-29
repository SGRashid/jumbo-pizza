import type { FC } from 'react';
import { MenuLinks } from '../pages/MenuLinks/MenuLinks';
import { Outlet } from 'react-router-dom';
import Fly from '../Fly/Fly';

export const Layout: FC = () => (
    <>
        <MenuLinks />
        <Outlet />
        <Fly />
    </>
);