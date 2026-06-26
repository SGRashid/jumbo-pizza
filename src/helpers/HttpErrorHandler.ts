import { AxiosError } from 'axios';

export const httpErrorHandler = (status: number): void => alert(`HTTP error! status: ${status}`);

export const AxiosErrorHandler = (error: Error | unknown): void => {
    if (error instanceof AxiosError) {
        alert(`Axios error! status: ${error.response?.status}, message: ${error.message}`);
        throw error;
    } else {
        console.error('An unknown error occurred');
        throw new Error('An unknown error occurred');
    }
};