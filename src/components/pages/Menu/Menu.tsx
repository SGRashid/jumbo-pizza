import { useEffect, useState, type FC } from 'react';
import { Header } from '../../Header/Header';
import { type MenuItem } from '../../../interfaces/Menu.interface';
import { getMenu } from '../../../helpers/MenuService';
import { Loader } from '../../Loader/Loader';
import { Link } from 'react-router';

export const Menu: FC = () => {
    const [menu, setMenu] = useState<MenuItem[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        getMenu()
            .then((data) => setMenu(data))
            .catch((err) => {
                console.error(err.message);
                setMenu([]);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            {isLoading && <Loader />}
            {!isLoading &&
                <>
                    <Header />
                    <h1>Menu</h1>
                    <ul>
                        {menu?.map((item: MenuItem) => (
                            <Link to={`/menu/${item.id}`} key={item.id}>
                                <p key={item.id} >{item.name} - ${item.price}</p>
                            </Link>
                        ))}
                    </ul>
                </>
            }
        </>
    );
};
