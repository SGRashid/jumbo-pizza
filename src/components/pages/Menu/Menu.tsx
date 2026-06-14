import { useEffect, useState, type FC } from 'react';
import { Header } from '../../Header/Header';
import { type MenuItem } from '../../../interfaces/Menu.interface';
import { getMenu } from '../../../helpers/GetMenu';

export const Menu: FC = () => {
    const [menu, setMenu] = useState<MenuItem[]>([]);

    useEffect(() => {
        getMenu()
            .then((data) => setMenu(data))
            .catch((err) => console.error(err.message));
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
