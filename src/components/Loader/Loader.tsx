import { useEffect, useState, type JSX } from 'react';
import './Loader.css';

export const Loader: React.FC = () => {
    const maxLoadingDots = 5;
    const dotsAppearingDelay = 1000; // milliseconds

    const [loadingCounter, setLoadingCounter] = useState<number>(0);

    const loadingCounterReducer = (c: number) => {
        if (c >= maxLoadingDots) {
            return 0;
        }

        return c + 1;
    };

    const getDots = (dotsNumber: number): JSX.Element => <>{Array(dotsNumber).fill('.').map(d => d)}</>;

    useEffect(() => {
        const intervalId = setInterval(
            () => setLoadingCounter(loadingCounterReducer),
            dotsAppearingDelay
        );

        return () => clearInterval(intervalId);
    }, []);

    return (
        <h1>Loading{getDots(loadingCounter)}</h1>
    );
};