import poisonImage from "../Assets/poisonType.svg"
import fireImage from "../Assets/fireType.svg"
import bugImage from "../Assets/bugType.svg"
import darkImage from "../Assets/darkType.svg"
import dragonImage from "../Assets/dragonType.svg"
import eletricImage from "../Assets/eletricType.svg"
import fairyImage from "../Assets/fairyType.svg"
import fightImage from "../Assets/fightType.svg"
import flyImage from "../Assets/flyType.svg"
import ghostImage from "../Assets/ghostType.svg"
import grassImage from "../Assets/grassType.svg"
import groundImage from "../Assets/groundType.svg"
import iceImage from "../Assets/iceType.svg"
import normalImage from "../Assets/normalType.svg"
import psyImage from "../Assets/psyType.svg"
import rockImage from "../Assets/rockType.svg"
import steelImage from "../Assets/steelType.svg"
import waterImage from "../Assets/waterType.svg"

export const getTypePokemon = (types) => {
  
    switch (types) {
        case "bug":
            return bugImage;
        case "dark":
            return darkImage;
        case "dragon":
            return dragonImage;
        case "electric":
            return eletricImage;
        case "fairy":
            return fairyImage;
        case "fighting":
            return fightImage;
        case "fire":
            return fireImage;
        case "flying":
            return flyImage;
        case "ghost":
            return ghostImage;
        case "grass":
            return grassImage;
        case "ground":
            return groundImage;
        case "ice":
            return iceImage;
        case "normal":
            return normalImage;
        case "poison":
            return poisonImage;
        case "psychic":
            return psyImage;
        case "rock":
            return rockImage;
        case "steel":
            return steelImage;
        case "water":
            return waterImage;
        default:
            return "#8A8A8A";
    }
};

