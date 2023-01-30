import { Router } from "./Components/router/Router";
import GlobalState from "./contexts/GlobalState";
import { GlobalStyle } from "./GlobalStyled";

function App() {
  return (
    <GlobalState>
      <GlobalStyle/>
      <Router/> 
    </GlobalState>
  );
}

export default App;
