import './App.css';
import "./styles/generalStyles.css";
// import { useState } from 'react';
// import Modal from './components/Modal';
// import ClickButton from './components/ClickButton';
// import MyEffectComponent from './components/MyEffectComponent';
import Feedback from './components/Feedback';

function App() {

  // const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && <Modal />} */}
      {/* <MyEffectComponent /> */}
      {/* <ClickButton /> */}
      <Feedback />
    </>
  );


}

export default App
