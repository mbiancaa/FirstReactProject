import './App.css';
import "./styles/generalStyles.css";
// import { useState } from 'react';
// import Modal from './components/Modal';
// import ClickButton from './components/ClickButton';
// import MyEffectComponent from './components/MyEffectComponent';
// import Feedback from './components/Feedback';
// import LoginForm from './components/LoginForm';
// import TestComponent from './components/TestComponent';
// import SearchBar from './components/SearchBar';
// import LanguageSwitcher from './components/LanguageSwitcher';
// import RadioButtonsExp from './components/RadioButtonsExp';
// import Checkbox from './components/Checkbox';
// import ControlledLoginForm from './components/ControlledLoginForm';
import TasksList from './components/TasksList';

function App() {

  // const [isOpen, setIsOpen] = useState(false)
  // const handleLogin = (userData) => {
  //   alert('Successful login');
  //   console.log(userData);
  // }

  return (
    <>
      {/* <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && <Modal />} */}
      {/* <MyEffectComponent /> */}
      {/* <ClickButton /> */}
      {/* <Feedback /> */}
      {/* <SearchBar /> */}
      {/* <LoginForm onLogin={handleLogin} /> */}
      {/* <TestComponent /> */}

      {/* <LanguageSwitcher /> */}
      {/* <RadioButtonsExp /> */}
      {/* <Checkbox /> */}
      {/* <ControlledLoginForm onLogin={handleLogin} /> */}
      <TasksList />
    </>
  );


}

export default App
