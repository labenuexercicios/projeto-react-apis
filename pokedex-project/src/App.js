import React, { useState, useEffect } from "react";

import { Router } from "./routes/Router";
import Home from "./pages/HomePage";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <ChakraProvider resetCSS>
        <Router>
          <Home />
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
