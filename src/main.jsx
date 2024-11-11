// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
// router st
import { BrowserRouter } from 'react-router-dom';
// router en
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </StrictMode>,
)
