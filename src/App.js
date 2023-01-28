import Router from "./Routes/Router";
import Header from "./components/Header/Header";
import { createGlobalStyle } from "styled-components";
import GlobalState from "./components/Context/GlobalState";
import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalContext } from "./components/Context/GlobalContext";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 1px solid black;
  }
`

function App() {
  
  return (
    <GlobalState>
      <GlobalStyle />
      <Header />
      <Router />
    </GlobalState>
  );
}

export default App;
