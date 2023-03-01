import React from 'react';
import Router from './routes/Router';
import GlobalState from './context/GlobalState';
import { GlobalStyled } from './GlobalStyled';

function App() {
  return (
    
    <GlobalState>
      <GlobalStyled/>
      <Router/>
    </GlobalState>
  )
}

export default App;
