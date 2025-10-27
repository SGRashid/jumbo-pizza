import {  useState, type JSX, type MouseEvent } from 'react';
import Button from './components/Button/Button';
import Fly from './components/Fly/Fly';

function App(): JSX.Element {
  const [fliesWereKilled, setNumberOfKilledFlies] = useState<number>(0);

  const handleButtonClick = (e: MouseEvent) => console.log(e);

  const handleFlySquashed = (): void => {
    setNumberOfKilledFlies(i => i + 1);
  }

  return (
    <>
      <Button onClick={handleButtonClick}>Кнопка</Button>
      <p> Мух убито: { fliesWereKilled }</p>
      <Fly onSquash={handleFlySquashed}></Fly>
    </>
  )
}

export default App
