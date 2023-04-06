import React from "react";
import PokedexPage from "./Pages/PokedexPage/PokedexPage";
import { createGlobalStyle } from "styled-components";
import './index.css'
import { Router } from "./Routes/Route";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Montserrat", sans-serif;
  }
`;



function App() {
  return (
    <div className="App">
      <Router></Router>
      <GlobalStyle/>
      <PokedexPage/>
    </div>
  );
}

export default App;
