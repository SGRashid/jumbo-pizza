import type { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuLinks.module.css';
import type { MenuLinksProps } from './MenuLinks.types';

export const MenuLinks: FC<MenuLinksProps> = ({ items }) => (
    <div className={`${styles.links}`}>
        { items?.map(i => <Link to={i.url} >{i.text}</Link>) }
    </div>
); 