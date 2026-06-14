import { useEffect, useState, type FC } from 'react';
import { Header } from '../../Header/Header';
import { type MenuItem } from '../../../interfaces/Menu.interface';

export const Menu: FC = () => {
    const [menu, setMenu] = useState([]);

    const getMenu = async () => {
        const res = await fetch('https://purpleschool.ru/pizza-api-demo/products');
        const data = await res.json();
        console.log(data);
        setMenu(data);
    };

    useEffect(() => {
        getMenu();
    }, []);

    return (
        <>
            <Header />
            <h1>Menu</h1>
            <ul>
                {menu.map((item: MenuItem) => (<p key={item.id}>{item.name} - ${item.price}</p>))}
            </ul>
        </>
    );
};
