import React, { useState, useEffect } from "react";
import axios from "axios";
import { Router } from "./routes/Router";
import Home from "./pages/HomePage";

function App() {
  return (
    <div>
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
