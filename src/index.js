import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GlobalStyled from './styles/GlobalStyle';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <>
      <GlobalStyled />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>,
  document.getElementById('root')
);
