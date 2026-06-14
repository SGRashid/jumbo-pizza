import { useState, type MouseEventHandler, type MouseEvent } from 'react';
import { ButtonPrimary } from '../../ButtonPrimary/ButtonPrimary';

export const Error: React.FC = () => {
    const [counter, setCounter] = useState<number>(0);

    const clickHandle: MouseEventHandler<HTMLButtonElement> = (e: MouseEvent) => {
        setCounter(c => c + 1);
        log(e);
    };

    return (<>
        <p>Erorr</p>
        <p>Counter: {counter}</p>
        <p>
            <ButtonPrimary onClick={clickHandle}>Щёлк</ButtonPrimary>
        </p>

    </>);
};