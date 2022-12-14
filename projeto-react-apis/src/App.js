import React from "react";
import { createGlobalStyle } from "styled-components";
import { Router } from "./routes/Router";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: helvetica;
  }
`;

function App() {
  return (
    <>
      <GlobalStyled />
      <Router />
    </>
  );
}

export default App;
