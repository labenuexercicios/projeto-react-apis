import React, { createContext } from 'react'
import { useColorMode } from '@chakra-ui/react'

export const ColorContext = createContext()

const ColorProvider = ({ children }) => {
  const { colorMode } = useColorMode()

  const getColors = type => {
    switch (type) {
      case 'bug':
        return colorMode === 'light' ? '#1B490D' : '#286814'
      case 'dark':
        return colorMode === 'light' ? '#42394A' : '#6f5e7e'
      case 'dragon':
        return colorMode === 'light' ? '#004170' : '#005b9c'
      case 'electric':
        return '#d1ae12'
      case 'fairy':
        return '#DA65D5'
      case 'fighting':
        return '#BF5674'
      case 'fire':
        return '#E89758'
      case 'flying':
        return '#447394'
      case 'ghost':
        return '#697FBF'
      case 'grass':
        return '#518553'
      case 'ground':
        return '#D19C82'
      case 'ice':
        return '#4BAF9E'
      case 'normal':
        return '#C09962'
      case 'poison':
        return colorMode === 'light' ? '#7D247D' : '#982a98'
      case 'psychic':
        return '#BF4D50'
      case 'rock':
        return '#857A5D'
      case 'steel':
        return '#909090'
      case 'water':
        return '#047FD6'
      default:
        return '#9D6BB6'
    }
  }

  const getColorsType = type => {
    switch (type) {
      case 'bug':
        return colorMode === 'light' ? '#316520' : '#41852a'
      case 'dark':
        return '#5C5365'
      case 'dragon':
        return '#0A6CBF'
      case 'electric':
        return '#F4D23B'
      case 'fairy':
        return '#EC8FE6'
      case 'fighting':
        return '#CE4069'
      case 'fire':
        return '#F44900'
      case 'flying':
        return '#6892B0'
      case 'ghost':
        return '#5269AC'
      case 'grass':
        return '#70B873'
      case 'ground':
        return '#D97745'
      case 'ice':
        return '#74CEC0'
      case 'normal':
        return '#8A8A8A'
      case 'poison':
        return '#AD61AE'
      case 'psychic':
        return '#F67176'
      case 'rock':
        return '#C7B78B'
      case 'steel':
        return '#BBBBBB'
      case 'water':
        return '#33A4F5'
      default:
        return '#9D6BB6'
    }
  }

  return (
    <ColorContext.Provider value={{ getColors, getColorsType }}>
      {children}
    </ColorContext.Provider>
  )
}
export default ColorProvider
