import React, { createContext } from 'react'
import { useColorMode } from '@chakra-ui/react'
import bug from '../assets/types/bug.png'
import dark from '../assets/types/dark.png'
import dragon from '../assets/types/dragon.png'
import electric from '../assets/types/electric.png'
import fairy from '../assets/types/fairy.png'
import fighting from '../assets/types/fighting.png'
import fire from '../assets/types/fire.png'
import flying from '../assets/types/flying.png'
import ghost from '../assets/types/ghost.png'
import grass from '../assets/types/grass.png'
import ground from '../assets/types/ground.png'
import ice from '../assets/types/ice.png'
import normal from '../assets/types/normal.png'
import poison from '../assets/types/poison.png'
import psychic from '../assets/types/psychic.png'
import rock from '../assets/types/rock.png'
import steel from '../assets/types/steel.png'
import water from '../assets/types/water.png'

import bugD from '../assets/types/bugD.png'
import darkD from '../assets/types/darkD.png'
import dragonD from '../assets/types/dragonD.png'
import electricD from '../assets/types/electricD.png'
import fairyD from '../assets/types/fairyD.png'
import fightingD from '../assets/types/fightingD.png'
import fireD from '../assets/types/fireD.png'
import flyingD from '../assets/types/flyingD.png'
import ghostD from '../assets/types/ghostD.png'
import grassD from '../assets/types/grassD.png'
import groundD from '../assets/types/groundD.png'
import iceD from '../assets/types/iceD.png'
import normalD from '../assets/types/normalD.png'
import poisonD from '../assets/types/poisonD.png'
import psychicD from '../assets/types/psychicD.png'
import rockD from '../assets/types/rockD.png'
import steelD from '../assets/types/steelD.png'
import waterD from '../assets/types/waterD.png'
export const TypeReturnContext = createContext()

const TypeReturnProvider = ({ children }) => {
  const { colorMode } = useColorMode()

  const getTypes = type => {
    switch (type) {
      case 'bug':
        return colorMode === 'light' ? bug : bugD
      case 'dark':
        return colorMode === 'light' ? dark : darkD
      case 'dragon':
        return colorMode === 'light' ? dragon : dragonD
      case 'electric':
        return colorMode === 'light' ? electric : electricD
      case 'fairy':
        return colorMode === 'light' ? fairy : fairyD
      case 'fighting':
        return colorMode === 'light' ? fighting : fightingD
      case 'fire':
        return colorMode === 'light' ? fire : fireD
      case 'flying':
        return colorMode === 'light' ? flying : flyingD
      case 'ghost':
        return colorMode === 'light' ? ghost : ghostD
      case 'grass':
        return colorMode === 'light' ? grass : grassD
      case 'ground':
        return colorMode === 'light' ? ground : groundD
      case 'ice':
        return colorMode === 'light' ? ice : iceD
      case 'normal':
        return colorMode === 'light' ? normal : normalD
      case 'poison':
        return colorMode === 'light' ? poison : poisonD
      case 'psychic':
        return colorMode === 'light' ? psychic : psychicD
      case 'rock':
        return colorMode === 'light' ? rock : rockD
      case 'steel':
        return colorMode === 'light' ? steel : steelD
      case 'water':
        return colorMode === 'light' ? water : waterD
      default:
        return colorMode === 'light' ? normal : normalD
    }
  }

  return (
    <TypeReturnContext.Provider value={{ getTypes }}>
      {children}
    </TypeReturnContext.Provider>
  )
}
export default TypeReturnProvider
