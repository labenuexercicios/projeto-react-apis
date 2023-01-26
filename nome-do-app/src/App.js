import GlobalState from "./context/GlobalState";
import { GlobalStyled } from "./GlobalStyled";
import { Router } from "./routers/Routers";

function App() {

  return (
    <div >
      <GlobalStyled />
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;
