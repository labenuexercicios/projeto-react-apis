import bug from "../imagens/img-tipo-bug.png"
import fire from "../imagens/img-tipo-fire.png"
import water from "../imagens/img-tipo-water.png"
import dark from "../imagens/img-tipos-dark.png"
import normal from "../imagens/img-tipo-normal.png"
import electric from "../imagens/img-tipo-electric.png"
import ground from "../imagens/img-tipo-ground.png"
import gost from "../imagens/img-tipo-gost.png"
import poison from "../imagens/tipo.png"
import grass from "../imagens/tipo2.png"
import flying from "../imagens/img-tipo-flying.png"

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
        case "dark":
            return dark;
        case "gost":
            return gost;
        default:
            return grass;

    }
}
