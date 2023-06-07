import poisonImage from "../Assets/poison_medallion-removebg-preview.png"
import fireImage from "../Assets/fire_medallion-removebg-preview.png"
import bugImage from "../Assets/bug_medallion-removebg-preview.png"
import darkImage from "../Assets/dark_medallion-removebg-preview.png"
import dragonImage from "../Assets/dragon_medallion-removebg-preview.png"
import eletricImage from "../Assets/electric_medallion-removebg-preview.png"
import fairyImage from "../Assets/fairy_medallion-removebg-preview.png"
import fightImage from "../Assets/fighting_medallion-removebg-preview.png"
import flyImage from "../Assets/flying_medallion-removebg-preview.png"
import ghostImage from "../Assets/ghost_medallion-removebg-preview.png"
import grassImage from "../Assets/grass_medallion-removebg-preview.png"
import groundImage from "../Assets/ground_medallion-removebg-preview.png"
import iceImage from "../Assets/ice_medallion-removebg-preview.png"
import normalImage from "../Assets/normal_medallion-removebg-preview.png"
import psyImage from "../Assets/psychic_medallion-removebg-preview.png"
import rockImage from "../Assets/rock_medallion-removebg-preview.png"
import steelImage from "../Assets/steel_medallion-removebg-preview.png"
import waterImage from "../Assets/water_medallion-removebg-preview.png"

export const getTypeImg = (name) => {
  
    switch (name) {
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

