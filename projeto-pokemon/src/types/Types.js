import Grass from "../assets/Grass.png"
import Poison from "../assets/Poison.png"
import Fire from "../assets/Fire.png"
import Flying from "../assets/Flying.png"
import Water from "../assets/Water.png"
import Bug from "../assets/Bug.png"
import Normal from "../assets/Normal.png"
import Dark from "../assets/Dark.png"
import Dragon from "../assets/Dragon.png"
import Eletric from "../assets/Eletric.png"
import Fairy from "../assets/Fairy.png"
import Fighter from "../assets/Fighter.png"
import Ghost from "../assets/Ghost.png"
import Ground from "../assets/Ground.png"
import Ice from "../assets/Ice.png"
import Psychic from "../assets/Psychic.png"
import Rock from "../assets/Rock.png"
import Steel from "../assets/Steel.png"



export const getTypes = (type) => {
    switch(type) {
      case "bug":
        return Bug;
      case "dark":
        return Dark;
      case "dragon":
        return Dragon;
      case "electric":
        return Eletric;
      case "fairy":
        return Fairy;
      case "fighter":
        return Fighter;
      case "fire":
        return Fire;
      case "flying":
        return Flying;
      case "ghost":
        return Ghost;
      case "grass":
        return Grass;
      case "ground":
        return Ground;
      case "ice":
        return Ice;
      case "normal":
        return Normal;
      case "poison":
        return Poison;
      case "psychic":
        return Psychic;
      case "rock":
        return Rock;
      case "steel":
        return Steel;
      case "water":
        return Water;
      default:
        return Water;
    }
}





