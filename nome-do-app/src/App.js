import Header from "./components/headers";
import GlobalState from "./context/GlobalState";
import { GlobalStyled } from "./GlobalStyled";
import { Router } from "./routers/Routers";

function App() {

  return (
    <>
      <GlobalStyled />
      <GlobalState>
        <Router />
      </GlobalState>
    </>
  );
}

export default App;
