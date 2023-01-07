import water from "../Images/Types/water.png";
import fire from "../Images/Types/fire.png";
import poison from "../Images/Types/poison.png";
import grass from "../Images/Types/grass.png";
import flying from "../Images/Types/flying.png";
import normal from "../Images/Types/normal.png";
import bug from "../Images/Types/bug.png";

  export const getTypes = (type) => {
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
