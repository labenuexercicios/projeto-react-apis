import logo from './logo.svg';
import './App.css';
import { Button, ChakraProvider } from "@chakra-ui/react"
import { Header } from './Components/Header/Header';
import { theme } from './theme';
import { Router } from './Routes/Router';
import { GlobalContext } from './Contexts/GlobalContext';
import { useRequestData } from './Hooks/UseRequestData';





function App() {

  const dados = useRequestData([],"?limit=12")[0]

  const context = dados
  
  return (
    <GlobalContext.Provider value={context}>
    <ChakraProvider theme={theme}>
      <Header />
      <Router/>
    </ChakraProvider>
    </GlobalContext.Provider>
  );
}

export default App;
