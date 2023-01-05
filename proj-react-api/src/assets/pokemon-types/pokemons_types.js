import poison from "../pokemon-types/poison.svg"
import grass from "../pokemon-types/grass.svg"
import fire from "../pokemon-types/fire.svg"
import flying from "../pokemon-types/flying.svg"
import water from "../pokemon-types/water.svg"
import bug from "../pokemon-types/bug.svg"
import normal from "../pokemon-types/normal.svg"
import dark from "../pokemon-types/dark.svg"
import dragon from "../pokemon-types/dragon.svg"
import electric from "../pokemon-types/electric.svg"
import fairy from "../pokemon-types/fairy.svg"
import fighting from "../pokemon-types/fighting.svg"
import ghost from "../pokemon-types/ghost.svg"
import ground from "../pokemon-types/ground.svg"
import ice from "../pokemon-types/ice.svg"
import psychic from "../pokemon-types/psychic.svg"
import rock from "../pokemon-types/rock.svg"
import steel from "../pokemon-types/steel.svg"


export const getTypesPokemon = (type) => {
    switch (type) {
        case "poison":
            return poison;
        case "grass":
            return grass;
        case "fire":
            return fire;
        case "flying":
            return flying;
        case "water":
            return water;
        case "bug":
            return bug;
        case "normal":
            return normal;
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
        case "ghost":
            return ghost;
        case "ground":
            return ground;
        case "ice":
            return ice;
        case "psychic":
            return psychic;
        case "rock":
            return rock;
        case "steel":
            return steel;

    }
}