import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Tictactoe from './Tic-tac-toe ';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Tictactoe />
  </React.StrictMode>
);
