import { ContainerStyled, GlobalStyle } from "./GlobalStyle";
import { Router } from "./router/Router";

function App() {
  return (
    <div className="App">
      <ContainerStyled>
        <GlobalStyle />
        <Router />
      </ContainerStyled>
    </div>
  );
}

export default App;
