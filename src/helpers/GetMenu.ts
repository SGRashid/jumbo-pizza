import { type MenuItem } from '../interfaces/Menu.interface';
// import { httpErrorHandler } from '../helpers/HttpErrorHandler';
import { PREFIX } from '../assets/constants/Prefix.constants';
import axios from 'axios';

export const getMenu = async (): Promise<MenuItem[]> => {
    try {
        const res = await axios.get(`${PREFIX}/products`);
        return res.data;
    } catch (err: Error | unknown) {
        console.error(err instanceof Error ? err.message : 'An unknown error occurred');
        throw err;
    }
};

