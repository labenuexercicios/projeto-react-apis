import { ChakraProvider } from "@chakra-ui/react";
import Router from "./routes/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { GlobalStyled } from "./constants/constants";
import GlobalState from "./context/GlobalState";
function App() {
 
  return (
    <GlobalState>
      <GlobalStyled />
      <ChakraProvider>
        <Router/>
      </ChakraProvider>
    </GlobalState>
  );
}

export default App;
