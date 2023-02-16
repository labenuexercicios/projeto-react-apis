import Router from "./Router/Router";
import { GlobalStyled } from "./GlobalStyled";
import axios from "axios";
import { useEffect, useState } from "react";
import GlobalState from "./Context/GlobalState";

function App() {

  return (
  <GlobalState>
    <GlobalStyled/>
    <Router/>
  </GlobalState>
  )
}

export default App;
