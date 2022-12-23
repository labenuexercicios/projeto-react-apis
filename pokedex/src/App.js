import Router from "./Router/Router"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  
  }
`

function App() {
  return (
    <> 
      <GlobalStyle/>   
      <Router/>      
    </>
  );
}

export default App
