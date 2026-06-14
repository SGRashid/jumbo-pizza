import { type MenuItem } from '../interfaces/Menu.interface';
import { httpErrorHandler } from '../helpers/HttpErrorHandler';
import { PREFIX } from '../assets/constants/Prefix.constants';

export const getMenu = async (): Promise<MenuItem[]> => {
    try {
        const res = await fetch(`${PREFIX}/products`);
        if (!res.ok) {
            httpErrorHandler(res.status);
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        return data;
    } catch (err: Error | unknown) {
        console.error(err instanceof Error ? err.message : 'An unknown error occurred');
        throw err;
    };
};

// export const getMenu = (): Promise<MenuItem[]> => fetch('https://purpleschool.ru/pizza-api-demo/products')
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json() as Promise<MenuItem[]>;
//     });