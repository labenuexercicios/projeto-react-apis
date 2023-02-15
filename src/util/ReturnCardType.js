import bug from "../assets/pokemon-types/bug.png";
import dark from "../assets/pokemon-types/dark.png";
import dragon from "../assets/pokemon-types/dragon.png";
import electric from "../assets/pokemon-types/electric.png";
import fairy from "../assets/pokemon-types/fairy.png";
import fighting from "../assets/pokemon-types/fighting.png";
import fire from "../assets/pokemon-types/fire.png";
import flying from "../assets/pokemon-types/flying.png";
import ghost from "../assets/pokemon-types/ghost.png";
import grass from "../assets/pokemon-types/grass.png";
import ground from "../assets/pokemon-types/ground.png";
import ice from "../assets/pokemon-types/ice.png";
import normal from "../assets/pokemon-types/normal.png";
import poison from "../assets/pokemon-types/poison.png";
import psychic from "../assets/pokemon-types/psychic.png";
import rock from "../assets/pokemon-types/rock.png";
import steel from "../assets/pokemon-types/steel.png";
import water from "../assets/pokemon-types/water.png";
import { typeNames } from "./ReturnTypeName";


export function cardTypes(type) {
    switch (type) {
        case typeNames.fire:
            return fire;
        case typeNames.grass:
            return grass;
        case typeNames.electric:
            return electric;
        case typeNames.water:
            return water
        case typeNames.ground:
            return ground
        case typeNames.rock:
            return rock
        case typeNames.fairy:
            return fairy
        case typeNames.poison:
            return poison
        case typeNames.bug:
            return bug
        case typeNames.dragon:
            return dragon
        case typeNames.psychic:
            return psychic
        case typeNames.flying:
            return flying
        case typeNames.fighting:
            return fighting
        case typeNames.normal:
            return normal
        case typeNames.dark:
            return dark
        case typeNames.steel:
            return steel
        case typeNames.ice:
            return ice
        case typeNames.ghost:
            return ghost
        default:
            break;
    }
  }