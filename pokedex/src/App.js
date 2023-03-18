import logo from './logo.svg';
import './App.css';
import { Button, ChakraProvider } from "@chakra-ui/react"
import { Header } from './Components/Header/Header';
import { theme } from './theme';
import { Router } from './Routes/Router';
import { GlobalContext } from './Contexts/GlobalContext';
import { useRequestData } from './Hooks/UseRequestData';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { color } from 'framer-motion';





function App() {

  const pokemons = useRequestData([], "?limit=24")[0]

  const [capturados, setCapturados] = useState([])

  const [gotcha, setGotcha] = useState(false)

  const [colorToPass, setColorToPass] = useState("")

  const [idButton, setIdButton] = useState(0)

  const [render, setRender] = useState(false)

  const [myPokedex, setMyPokedex] = useState(JSON.parse(localStorage.getItem('myPokedex') || '[]'));


  useEffect(() => {
    if (capturados.length !== 0) {
      localStorage.setItem('myPokedex', JSON.stringify(capturados))
      setMyPokedex(JSON.parse(localStorage.getItem('myPokedex')));
      console.log("eu")
    }
    if (capturados.length === 1) {
      setMyPokedex(JSON.parse(localStorage.getItem('myPokedex')));
      console.log("eu")
    }
  }
    , [capturados]);



  useEffect(() => {
    if (capturados.length !== 0) {
      localStorage.setItem('myPokedex', JSON.stringify(capturados))
    }


    if (JSON.parse(localStorage.getItem('myPokedex')) !== null && JSON.parse(localStorage.getItem('myPokedex')).length !== 0) {
      setMyPokedex(JSON.parse(localStorage.getItem('myPokedex')));
      console.log(myPokedex)
      setCapturados(JSON.parse(localStorage.getItem('myPokedex')));
      console.log(capturados)
    }
    if (pokemons.length !== 0) {
      localStorage.setItem('listaPokemons', JSON.stringify(pokemons))
      console.log(localStorage.getItem("listaPokemons"))
    }
  }, []);

  useEffect(() => {
    if (idButton != 0) {
      localStorage.setItem("idButton", JSON.stringify(idButton))
      setIdButton(JSON.parse(localStorage.getItem("idButton")))
    }
  }, [idButton])



  //   if(myPokedex.lenght !== 0) {
  //     setCapturados(myPokedex)
  // }




  const capturar = (id, color) => {
    setIdButton(id)
    const capturando = pokemons.find((pokemon) => { return (pokemon.id === id) })
    if (color === "white") {
      if (capturados.length !== 0) {
        if (capturados.find((pokemon) => { return (pokemon.id === id) }) === undefined) {
          setCapturados([...capturados, capturando])
          setMyPokedex([...myPokedex, capturando])
          setGotcha(true)
          console.log(gotcha)

          setTimeout(() => setGotcha(false), 3000)
          setColorToPass(color)
          // alert(`${capturando.name} capturado!`)
        }

        else {
          alert(`Este pokemon já foi capturado!`)

        }
      }
      else
        if (capturados.length === 0) {
          setColorToPass(color)
          setCapturados([...capturados, capturando])
          setMyPokedex([...myPokedex, capturando])
          setGotcha(true)
          setTimeout(() => setGotcha(false), 3000)
          // alert(`${capturando.name} capturado!`)
        }
    }
    if (color === "#FF6262") {
      setColorToPass(color)
      if (capturados.length > 1) {
        setCapturados(capturados.filter((pokemon) => { return ((pokemon.id) != capturando.id) }))
        console.log(capturados)
        setMyPokedex(capturados.filter((pokemon) => { return (pokemon.id) != capturando.id }))
      }
      if (myPokedex.length === 1) {
        setCapturados([])
        console.log(capturados)
        setMyPokedex([])
      }
      setGotcha(true)
      console.log(gotcha)

      setTimeout(() => setGotcha(false), 3000)
    }
  }

  // useEffect(() => {
  //   console.log(capturados);
  // }, [capturados]);
  


  const context = { pokemons, capturados, capturar, setCapturados, gotcha, setGotcha, colorToPass, idButton, setIdButton, render, setRender, myPokedex, setMyPokedex }



  return (
    <GlobalContext.Provider value={context}>
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </GlobalContext.Provider>
  );
}

export default App;
