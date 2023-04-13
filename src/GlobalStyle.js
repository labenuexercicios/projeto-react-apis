import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    background: #5E5E5E;
    color: #ffffff;
    --webkit-font-smoothing: antialiased;
    height: 100vh;
    width: 100vw;
    font-family: "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;