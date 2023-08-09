import { GlobalStyle } from "./GlobalStyle";
import GlobalState from "./GlobalState/GlobalState";
import  Router  from "./Router/Router";

export default function App() {
  return (
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
  );
}
