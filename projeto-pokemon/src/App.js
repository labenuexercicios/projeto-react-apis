
import { GlobalStyle } from "./GlobalStyle";
import Router from "./routes/Router";
import GlobalState from "./contexts/GlobalState";




export default function App() {

 

  return (
    <div>
      <GlobalStyle/>
      <GlobalState>
      <Router/>
      </GlobalState>
        
    </div>
  );
}


