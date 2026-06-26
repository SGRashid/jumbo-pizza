import { type MenuItem } from '../interfaces/Menu.interface';
// import { httpErrorHandler } from '../helpers/HttpErrorHandler';
import { PREFIX } from '../assets/constants/Prefix.constants';
import axios from 'axios';
import { AxiosErrorHandler } from './HttpErrorHandler';

// export const getMenu = async (): Promise<MenuItem[]> => {
//     try {
//         const res = await axios.get(`${PREFIX}/products`);
//         return res.data;
//     } catch (err: Error | unknown) {
//         console.error(err instanceof Error ? err.message : 'An unknown error occurred');
//         throw err;
//     }
// };

export const getMenu = (): Promise<MenuItem[]> =>
    axios.get(`${PREFIX}/products`)
        .then((res) => res.data)
        .catch(AxiosErrorHandler);


export const getMenuItemById = (id: number): Promise<MenuItem> =>
    axios.get(`${PREFIX}/products/${id}`)
        .then((res) => res.data)
        .catch(AxiosErrorHandler);