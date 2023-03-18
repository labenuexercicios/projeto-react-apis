import React, { createContext, useState } from 'react'
import { useBreakpointValue } from '@chakra-ui/react'

export const AnimateContext = createContext()

const AnimateProvider = ({ children }) => {
  const shouldAnimate = window.pageYOffset !== 0
  //input name
  const [animateInputName, setAnimateInputName] = useState(false)
  const [displayInputName, setDisplayInputName] = useState('block')
  const [displayInputNameOk, setDisplayInputNameOK] = useState('none')
  const [displayInputNameReverse, setDisplayInputNameReverse] = useState('none')
  //input name pokedex
  const [animateInputNameP, setAnimateInputNameP] = useState(false)
  const [displayInputNameP, setDisplayInputNameP] = useState('block')
  const [displayInputNameOkP, setDisplayInputNameOKP] = useState('none')
  const [displayInputNameReverseP, setDisplayInputNameReverseP] =
    useState('none')

  const [displayInputNamePokedex, setDisplayInputNamePokedex] =
    useState('block')
  const [displayInputNamePokedexOk, setDisplayInputNamePokedexOK] =
    useState('none')
  const [displayInputNamePokedexReverse, setDisplayInputNamePokedexReverse] =
    useState('none')

  //Botão mudar tema
  const [animationPlayed, setAnimationPlayed] = useState(false)

  //Botão Pokedex
  const [pokedexDisplay, setPokedexDisplay] = useState('block')
  const [animatePokedexDisplay, setAnimatePokedexDisplay] = useState('none')
  const [animationPlayedPokeButton, setAnimationPlayedPokeButton] =
    useState(false)
  const [animatePokedexTitle, setAnimatePokedexTitle] = useState(false)

  //Opacity Todos Pokemóns Home
  const [opacityHome, setOpacityHome] = useState(false)

  // Todos pokémons Button Controls
  const [animateTodosPokesButtonDetalhes, setAnimateTodosPokesButtonDetalhes] =
    useState(false)
  const [todosPokesButtonDisplay, setTodosPokesButtonDisplay] =
    useState('block')

  // Todos pokémons Texto Controls
  const [todosPokemonsButtonHomeAnimated, setTodosPokemonsButtonHomeAnimated] =
    useState(true)
  const [todosPokemonsButtonHomeDisplay, setTodosPokemonsButtonHomeDisplay] =
    useState('flex')
  const [
    todosPokemonsButtonLeaveHomeDisplay,
    setTodosPokemonsButtonLeaveHomeDisplay
  ] = useState('none')
  
  //Home Todos os Pokemons
  const [todosPokemonsDisplay, setTodosPokemonsDisplay] = useState('none')

  // controle display do Detalhes
  const [textDisplay, setTextDisplay] = useState('block')
  const [textDisplayOut, setTextDisplayOut] = useState('none')
  const [textDisplayOutP, setTextDisplayOutP] = useState('none')
  const [textAnimationComplete, setTextAnimationComplete] = useState(false)

  //  Pokedex Title control
  const [pokedexTitle, setPokedexTitle] = useState('block')
  const [pokedexTitleAnimate, setPokedexTitleAnimate] = useState('none')

  const breakpoint = useBreakpointValue({ base: 'base', lg: 'lg' })
  const timeout = window.pageYOffset === 0 && breakpoint === 'lg' ? 500 : 0

  // novos from detalhes
  const [isAnimeted, setIsAnimeted] = useState(false)

  const backToHome = (isDetalhes, isPokedex, goToHome) => {
    setAnimationPlayed(false)
    setAnimationPlayedPokeButton(false)

    setOpacityHome(false)
    setAnimateInputName(false)

    setDisplayInputNameOK('none')
    setDisplayInputName('block')
    setDisplayInputNameReverse('none')

    setTodosPokemonsButtonHomeDisplay('flex')
    setTodosPokesButtonDisplay('none')
    if (shouldAnimate) {
      setTodosPokemonsDisplay('none')
    }

    if (isDetalhes) {
      setTodosPokemonsButtonHomeAnimated(false)

      setPokedexDisplay('none')
      setAnimatePokedexDisplay('block')

      setTextDisplay('none')
      setTextDisplayOut('block')
      setTimeout(() => {
        setAnimationPlayedPokeButton(false)
        setPokedexDisplay('block')
        goToHome()
        setTodosPokemonsButtonHomeAnimated(true)
        setAnimateTodosPokesButtonDetalhes(false)
      }, timeout)
    }

    if (isPokedex) {
      setDisplayInputNameOKP('none')
      setDisplayInputNameReverseP('block')
      setTodosPokemonsButtonHomeAnimated(false)

      setPokedexTitle('none')
      setPokedexTitleAnimate('block')

      setTimeout(() => {
        setPokedexTitleAnimate('none')
        goToHome()
        setTodosPokemonsButtonHomeAnimated(true)
      }, timeout)
    }
  }

  const goPokedexAnimate = (isDetalhes, goToPokedex) => {
    if (isDetalhes) {
      setTodosPokemonsButtonLeaveHomeDisplay('none')
      setAnimateTodosPokesButtonDetalhes(false)
    }

    setTodosPokemonsButtonHomeDisplay('none')
    setDisplayInputNameOKP('none')
    setDisplayInputNameReverseP('none')
    setAnimateInputNameP(false)
    setDisplayInputNameP('block')

    setAnimationPlayed(false)
    setPokedexDisplay('none')
    setAnimatePokedexDisplay('block')

    setDisplayInputNameOK('none')
    setDisplayInputNameReverse('block')

    setTextDisplay('none')
    setTextDisplayOutP('block')

    setTodosPokesButtonDisplay('block')

    setPokedexTitleAnimate('none')
    setPokedexTitle('block')

    if (!isDetalhes) {
      setTodosPokemonsButtonLeaveHomeDisplay('flex')
      setTodosPokemonsDisplay('none')
    }

    setTimeout(() => {
      goToPokedex()
      setTodosPokemonsButtonLeaveHomeDisplay('none')
      setPokedexDisplay('block')
      setAnimatePokedexTitle(false)
      setAnimateTodosPokesButtonDetalhes(true)
    }, timeout)
  }

  const goToDetalhesAnimatePokedex = (isHome, isPokedex, goToDetalhes) => {
    if (isHome) {
      if (!shouldAnimate) {
        setTodosPokemonsDisplay('none')
      } else {
        setTimeout(() => {
          setTodosPokemonsDisplay('none')
        }, timeout)
      }
      setTodosPokemonsDisplay('none')
      setTodosPokemonsButtonLeaveHomeDisplay('flex')
      setTodosPokemonsButtonHomeAnimated(false)
      setAnimateTodosPokesButtonDetalhes(true)

      setTodosPokesButtonDisplay('block')
      setTodosPokemonsButtonHomeDisplay('none')
      setAnimationPlayed(false)
      setDisplayInputNameOK('none')
      setDisplayInputNameReverse('block')
      setPokedexDisplay('none')
      setAnimatePokedexDisplay('block')
    }

    if (isPokedex) {
      setDisplayInputNameOKP('none')
      setDisplayInputNameReverseP('block')
      setTimeout(() => {
        setAnimateTodosPokesButtonDetalhes(false)
      }, timeout)
    }
    setTextDisplayOut('none')
    setTextDisplayOutP('none')

    setPokedexTitle('none')
    setPokedexTitleAnimate('block')

    setTimeout(() => {
      setIsAnimeted(false)

      setAnimatePokedexDisplay('none')
      setAnimationPlayedPokeButton(false)
      setPokedexDisplay('block')
      goToDetalhes()

      setTodosPokemonsButtonLeaveHomeDisplay('none')
      setTextDisplay('block')
      setTextAnimationComplete(false)
    }, 500)
  }

  return (
    <AnimateContext.Provider
      value={{
        isAnimeted,
        setIsAnimeted,
        shouldAnimate,
        backToHome,
        goPokedexAnimate,
        goToDetalhesAnimatePokedex,
        todosPokemonsDisplay,
        setTodosPokemonsDisplay,
        displayInputName,
        setDisplayInputName,
        displayInputNameOk,
        setDisplayInputNameOK,
        displayInputNameReverse,
        setDisplayInputNameReverse,
        animationPlayed,
        setAnimationPlayed,
        animationPlayedPokeButton,
        setAnimationPlayedPokeButton,
        displayInputNamePokedex,
        setDisplayInputNamePokedex,
        displayInputNamePokedexOk,
        setDisplayInputNamePokedexOK,
        displayInputNamePokedexReverse,
        setDisplayInputNamePokedexReverse,        
        animatePokedexDisplay,
        setAnimatePokedexDisplay,
        pokedexDisplay,
        setPokedexDisplay,
        animatePokedexTitle,
        setAnimatePokedexTitle,
        opacityHome,
        setOpacityHome,
        animateInputName,
        setAnimateInputName,
        animateInputNameP,
        setAnimateInputNameP,
        displayInputNameP,
        setDisplayInputNameP,
        displayInputNameOkP,
        setDisplayInputNameOKP,
        displayInputNameReverseP,
        setDisplayInputNameReverseP,
        animateTodosPokesButtonDetalhes,
        setAnimateTodosPokesButtonDetalhes,
        todosPokemonsButtonHomeAnimated,
        setTodosPokemonsButtonHomeAnimated,
        todosPokemonsButtonHomeDisplay,
        setTodosPokemonsButtonHomeDisplay,
        textDisplay,
        setTextDisplay,
        textDisplayOut,
        setTextDisplayOut,
        textAnimationComplete,
        setTextAnimationComplete,
        textDisplayOutP,
        setTextDisplayOutP,
        todosPokesButtonDisplay,
        setTodosPokesButtonDisplay,
        pokedexTitle,
        setPokedexTitle,
        pokedexTitleAnimate,
        setPokedexTitleAnimate,
        todosPokemonsButtonLeaveHomeDisplay,
        setTodosPokemonsButtonLeaveHomeDisplay
      }}
    >
      {children}
    </AnimateContext.Provider>
  )
}
export default AnimateProvider
