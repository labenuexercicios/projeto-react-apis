import logo from './logo.svg';
import './App.css';
import { Button, ChakraProvider } from "@chakra-ui/react"
import { Header } from './Components/Header/Header';
import { theme } from './theme';
import { Router } from './Routes/Router';




function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Router/>
    </ChakraProvider>
  );
}

export default App;
