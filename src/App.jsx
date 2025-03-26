import './App.css';
import "./styles/generalStyles.css";
import { useUser } from './contexts/userContext';

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
// import TasksList from './components/TasksList';
// import FeedbackForm from './components/FeedbackForm';
// import Blog from './components/Blog';
// import TestHook from './components/TestHook';
// import PlayerVideo from './components/PlayerVideo';

function App() {

  const { isLoggedIn, username, login, logout } = useUser();

  // const [isOpen, setIsOpen] = useState(false)
  // const handleLogin = (userData) => {
  //   alert('Successful login');
  //   console.log(userData);
  // }

  return (
    <>
      {isLoggedIn ? (
        <>
          <p>{username}</p>
          <button onClick={logout}>Log out</button>
        </>
      ) : (
        <>
          <p> You are not logged in yet.</p>
          <button onClick={login}>Log in</button>
        </>
      )}


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
      {/* <TasksList /> */}

      {/* <FeedbackForm /> */}
      {/* <Blog /> */}
      {/* <TestHook /> */}
      {/* <PlayerVideo videoSrc="http://media.w3.org/2010/05/sintel/trailer.mp4" /> */}

    </>
  );


}

export default App
