// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import "modern-normalize";
import ReactDOM from "react-dom/client";
import { UserProvider } from './contexts/userContext.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
);

