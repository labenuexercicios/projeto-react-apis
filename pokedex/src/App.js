import logo from './logo.svg';
import './App.css';
import { Button, ChakraProvider } from "@chakra-ui/react"
import { Header } from './Components/Header/Header';
import { theme } from './theme';
import { Router } from './Routes/Router';
import { GlobalContext } from './Contexts/GlobalContext';
import { useRequestData } from './Hooks/UseRequestData';
import { useState } from 'react';





function App() {

  const pokemons = useRequestData([], "?limit=18")[0]

  const [capturados, setCapturados] = useState([])

  const [gotcha, setGotcha] = useState(false)

 const [colorToPass, setColorToPass] = useState("")

  const capturar = (id, color) => {
    const capturando = pokemons.find((pokemon) => { return (pokemon.id === id) })
    if(color==="white"){
    if (capturados.length !== 0) {
      if (capturados.find((pokemon) => { return (pokemon.id === id) }) === undefined) {
        setCapturados([...capturados, capturando])
        setGotcha(true)
        console.log(gotcha)

        setTimeout(()=>setGotcha(false), 3000)
        setColorToPass(color)
        // alert(`${capturando.name} capturado!`)
        console.log(capturados)
      }

      else {
        alert(`Este pokemon já foi capturado!`)
        console.log(capturados)

      }
    }
    else 
    if(capturados.length===0){
      setColorToPass(color)
      setCapturados([...capturados, capturando])
      setGotcha(true)
      console.log(gotcha)
      setTimeout(()=>setGotcha(false), 3000)
      // alert(`${capturando.name} capturado!`)
      console.log(capturados)
    }
  }
  if(color==="#FF6262"){
    setColorToPass(color)
    setCapturados(capturados.filter((pokemon)=>{return(pokemon.id) != capturando.id}))
    setGotcha(true)
    console.log(gotcha)

    setTimeout(()=>setGotcha(false), 3000)
  }
  }


  const context = { pokemons, capturados, capturar, gotcha, setGotcha, colorToPass}



  return (
    <GlobalContext.Provider value={context}>
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </GlobalContext.Provider>
  );
}

export default App;
