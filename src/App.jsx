import { useState } from 'react';
import './App.css';
import "./styles/generalStyles.css";
// import CustomButton from './components/CustomButton';
import ClickButton from './components/ClickButton';
import ClickCounterAll from './components/ClickCounterAll';

function App() {
  // const [clicks, setClicks] = useState(0);
  // const handleClick = () => {
  //   // clicks = clicks + 1;
  //   setClicks(clicks + 1);
  // }

  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1
    })
    // setValues({
    //   x: values.x + 1,
    //   y: values.y
    // })
  };

  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1
    });
    // setValues({
    //   x: values.x,
    //   y: values.y + 1
    // })
  };

  return (
    <>
      {/* <CustomButton message="First button">
        Some children text
      </CustomButton> */}

      {/* <ClickCounterAll value={clicks} onUpdate={handleClick} />
      <ClickCounterAll value={clicks} onUpdate={handleClick} />

      <ClickButton />
      <ClickButton /> */}

      <p>x: {values.x}, y: {values.y}</p>
      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>
    </>
  );

}

export default App
