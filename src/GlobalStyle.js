import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

   :root {
    --soft-white: #f2f2f2;
    --green: #12b262;
    --yellow: #c2ee4c;
    --dark: #1d201e;
   }

   h1, h2{
    font-family: 'Inter', cursive;
   }

   p, button, h4, a{
    font-family: 'Poppins', sans-serif;
   }


   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


`
