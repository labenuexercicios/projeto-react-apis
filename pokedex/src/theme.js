import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;500;700&display=swap')": "",
      "@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap')": "",
      "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap')": "",

      body: {
        fontFamily: "Inter, sans-serif",
      },
    },
  },
  fonts: {
    moves: "Montserrat, sans-serif",
    popUp: "Poppins, sans-serif",
  },
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
});