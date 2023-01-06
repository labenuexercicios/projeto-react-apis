import bug from "../assets/Bug.png";
import dark from "../assets/Dark.png";
import dragon from "../assets/Dragon.png";
import electric from "../assets/Electric.png";
import fairy from "../assets/Fairy.png";
import fighting from "../assets/Fighting.png";
import fire from "../assets/Fire.png";
import flying from "../assets/Flying.png";
import ghost from "../assets/Ghost.png";
import grass from "../assets/Grass.png";
import ground from "../assets/Ground.png";
import ice from "../assets/Ice.png";
import normal from "../assets/Normal.png";
import poison from "../assets/Poison.png";
import psychic from "../assets/Psychic.png";
import rock from "../assets/Rock.png";
import steel from "../assets/Steel.png";
import water from "../assets/Water.png";

export const getPokemonType = (type) => {
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