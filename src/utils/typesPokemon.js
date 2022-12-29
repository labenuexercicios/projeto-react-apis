import poison from "../assets/pokemonTypes/poison.png"
import grass from "../assets/pokemonTypes/grass.png"
import bug from "../assets/pokemonTypes/bug.png";
import fire from "../assets/pokemonTypes/fire.png";
import flying from "../assets/pokemonTypes/flying.png";
import normal from "../assets/pokemonTypes/normal.png";
import water from "../assets/pokemonTypes/water.png";



export const typesPokemon = (type) => {
  switch(type) {
    case "bug":
      return bug;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "grass":
      return grass;
    case "normal":
      return normal;
    case "poison":
      return poison;
    case "water":
      return water;
    default:
      return water;
  }
};
    