import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';

// export const GlobalStyle = createGlobalStyle`
//     * {
//         margin: 0;
//         padding: 0;
//         box-sizing: border-box;
//         overflow-x:hidden;
//           }`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);