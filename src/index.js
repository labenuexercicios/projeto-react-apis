import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalContextProvider } from "./context/GlobalContext";
import { ChakraProvider } from "@chakra-ui/react";
import {theme} from "./utils/Theme"
import '@fontsource/inter/700.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/poppins/700.css'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalContextProvider>
    <ChakraProvider resetCSS theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </GlobalContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
