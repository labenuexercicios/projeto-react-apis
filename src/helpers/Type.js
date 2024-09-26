import bug from '../assets/bug.png'
import fire from '../assets/fire.png'
import grass from '../assets/grass.png'
import normal from '../assets/normal.png'
import poison from '../assets/poison.png'
import water from '../assets/water.png'
import flying from '../assets/flying.png'

export const Type = type => {
  switch (type) {
    case 'grass':
      return <img src={grass} alt="" />
    case 'poison':
      return <img src={poison} alt="" />
    case 'fire':
      return <img src={fire} alt="" />
    case 'flying':
      return  <img src={flying} alt="" />
    case 'water':
      return <img src={water} alt="" />
    case 'bug':
      return <img src={bug} alt="" />
    case 'normal':
      return <img src={normal} alt="" />
    default:
      return ''
  }
}