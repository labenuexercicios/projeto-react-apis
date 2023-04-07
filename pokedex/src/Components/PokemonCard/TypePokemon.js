import fire from "../../assets/typesPokemon/fire.svg"
import water from "../../assets/typesPokemon/water.svg"
import poison from "../../assets/typesPokemon/poison.svg"
import grass from "../../assets/typesPokemon/grass.svg"
import bug from "../../assets/typesPokemon/bug.svg"
import flying from "../../assets/typesPokemon/flying.svg"
import normal from "../../assets/typesPokemon/normal.svg"




export const getPokemonType = (type) => {
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
}    