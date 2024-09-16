import bug from "../assets/pokemon-types/bug.png";
import fire from "../assets/pokemon-types/fire.png";
import flying from "../assets/pokemon-types/flying.png";
import grass from "../assets/pokemon-types/grass.png";
import normal from "../assets/pokemon-types/normal.png";
import poison from "../assets/pokemon-types/poison.png";
import water from "../assets/pokemon-types/water.png";

export const getTypes = (type) => {
  switch (type) {
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
      return fire
  }
};