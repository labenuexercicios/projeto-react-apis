import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { GlobalStyle } from "./GlobalStyles.styled";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
