import {  useState, type JSX, type MouseEvent } from 'react';
import { ButtonPrimary } from './components/ButtonPrimary/ButtonPrimary';
import Fly from './components/Fly/Fly';
import { ButtonSecondary } from './components/ButtonSecondary/ButtonSecondary';
import { ButtonAccent } from './components/ButtonAccent/ButtonAccent';

function App(): JSX.Element {
  const [fliesWereKilled, setNumberOfKilledFlies] = useState<number>(0);

  const handleButtonClick = (e: MouseEvent) => console.log(e);

  const handleFlySquashed = (): void => {
    setNumberOfKilledFlies(i => i + 1);
  };

  return (
    <>
      <ButtonPrimary onClick={handleButtonClick}>Кнопка</ButtonPrimary>
      <ButtonSecondary>кнопка</ButtonSecondary>
      <ButtonAccent>Кнопка</ButtonAccent>
      <p> Мух убито: { fliesWereKilled }</p>
      <Fly onSquash={handleFlySquashed}></Fly>
    </>
  );
}

export default App;
