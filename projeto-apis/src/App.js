import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/header";
import { ContextProvider } from "./context/contextProvider";
function App() {
  return (
    <ContextProvider>
      <div>
        <Header />
        <Outlet />
      </div>
    </ContextProvider>
  );
}

export default App;
