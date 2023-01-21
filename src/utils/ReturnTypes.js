import bug from "../img/Bug.png";
import dark from "../img/Dark.png";
import dragon from "../img/Dragon.png";
import electric from "../img/Eletric.png";
import fairy from "../img/Fairy.png";
import fighting from "../img/Fighting.png";
import fire from "../img/Fire.png";
import flying from "../img/Flying.png";
import ghost from "../img/Ghost.png";
import grass from "../img/Grass.png";
import ground from "../img/Ground.png";
import ice from "../img/Ice.png";
import normal from "../img/Normal.png";
import poison from "../img/Poison.png";
import psychic from "../img/Psychic.png";
import rock from "../img/Rock.png";
import steel from "../img/Steel.png";
import water from "../img/Water.png";

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
