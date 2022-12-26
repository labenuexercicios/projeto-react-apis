import bug from '../../assets/typesPokemon/bug.png'
import dark from '../../assets/typesPokemon/dark.png'
import dragon from '../../assets/typesPokemon/dragon.png'
import electric from '../../assets/typesPokemon/electric.png'
import fairy from '../../assets/typesPokemon/fairy.png'
import fighting from '../../assets/typesPokemon/fighting.png'
import fire from '../../assets/typesPokemon/fire.png'
import flying from '../../assets/typesPokemon/flying.png'
import ghost from '../../assets/typesPokemon/ghost.png'
import grass from '../../assets/typesPokemon/grass.png'
import ground from '../../assets/typesPokemon/ground.png'
import ice from '../../assets/typesPokemon/ice.png'
import normal from '../../assets/typesPokemon/normal.png'
import poison from '../../assets/typesPokemon/poison.png'
import psychic from '../../assets/typesPokemon/psychic.png'
import rock from '../../assets/typesPokemon/rock.png'
import steel from '../../assets/typesPokemon/steel.png'
import water from '../../assets/typesPokemon/water.png'



export const getTypes = (type) => {
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
}