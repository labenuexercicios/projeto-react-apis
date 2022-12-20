import bug from '../../assets/typesPokemon/bug.png'
import fire from '../../assets/typesPokemon/fire.png'
import flying from '../../assets/typesPokemon/flying.png'
import grass from '../../assets/typesPokemon/grass.png'
import normal from '../../assets/typesPokemon/normal.png'
import poison from '../../assets/typesPokemon/poison.png'
import water from '../../assets/typesPokemon/water.png'
import electric from '../../assets/typesPokemon/electric.png'
import ground from '../../assets/typesPokemon/ground.png'

export const getTypes = (type) => {
    switch (type) {
        case "bug":
            return bug;
        case "fire":
            return fire;
        case "flying":
            return flying;
        case "electric":
            return electric;
        case "ground":
            return ground;
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
}