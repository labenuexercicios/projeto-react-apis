import bug from "../assets/img/bug.png"
import fire from "../assets/img/fire.png"
import flying from "../assets/img/flying.png"
import grass from "../assets/img/grass.png"
import normal from "../assets/img/normal.png"
import poison from "../assets/img/poison.png"
import water from "../assets/img/water.png"
import electric from "../assets/img/electric.png"
import ground from "../assets/img/ground.png"

export const types = (tipos) => {
    switch(tipos) {
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
        case "electric":
            return electric;
        case "ground":
            return ground;
        default:
            return "red";
    }
    }

