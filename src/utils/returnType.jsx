import bug from "../img/types/Bug.png";
import dark from "../img/types/Dark.png";
import dragon from "../img/types/Dragon.png";
import electric from "../img/types/Eletric.png";
import fairy from "../img/types/Fairy.png";
import fighting from "../img/types/Fighting.png";
import fire from "../img/types/Fire.png";
import flying from "../img/types/Flying.png";
import ghost from "../img/types/Ghost.png";
import grass from "../img/types/Grass.png";
import ground from "../img/types/Ground.png";
import ice from "../img/types/Ice.png";
import normal from "../img/types/Normal.png";
import poison from "../img/types/Poison.png";
import psychic from "../img/types/Psychic.png";
import rock from "../img/types/Rock.png";
import steel from "../img/types/Steel.png";
import water from "../img/types/Water.png";

export const getTypes = (type) => {
  switch (type) {
    case "bug":
      return bug;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return electric;
    case "fairy":
      return fairy;
    case "fighting":
      return fighting;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "ghost":
      return ghost;
    case "grass":
      return grass;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "normal":
      return normal;
    case "poison":
      return poison;
    case "psychic":
      return psychic;
    case "rock":
      return rock;
    case "steel":
      return steel;
    case "water":
      return water;
    default:
      return water;
  }
};