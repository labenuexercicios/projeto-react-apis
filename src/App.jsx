import { BrowserRouter } from "react-router-dom";
import GlobalContextProvider from "./context";
import { Router } from "./router/Router";

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <div className="App">
          <div className="flex flex-col bg-[gray] min-h-[100vh]">
            <Router />
          </div>
        </div>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
