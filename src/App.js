import {useEffect, useState} from 'react'
import axios from "axios";
import Router from "./routes/Router"
import { BASE_URL } from "./constants/BASE_URL";
import { GlobalStyled } from './GlobalStyle';
import { GlobalContext } from './context/GlobalContext';
import Modal from './components/Modal/Modal'
import GlobalState from './context/GlobalState';

function App() {

  const context = GlobalState()

  return (
    <>
    <GlobalStyled/>
    <GlobalContext.Provider value={context}>
      <Router/>
      {context.showModal ? <Modal action={context.action}/>:''}
    </GlobalContext.Provider>
    </>
  );
}

export default App;