import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import "modern-normalize";

createRoot(document.getElementById('root')).render(
  /**
   * 
   * Strict Mode Life Cycle:
   * mount -> unmount -> mount
   * 
   */
  <StrictMode>
    <App />
  </StrictMode>,
)
