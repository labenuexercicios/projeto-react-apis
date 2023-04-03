import bug from "../typesImage/bug.png"
import fire from "../typesImage/fire.png";
import flying from "../typesImage/flying.png";
import grass from "../typesImage/grass.png";
import normal from "../typesImage/normal.png";
import poison from "../typesImage/poison.png";
import water from "../typesImage/water.png";

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