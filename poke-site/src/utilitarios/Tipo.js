import tagGrass from "../imagens/tagGrass.png"
import tagPoison from "../imagens/tagPoison.png"
import tagWater from "../imagens/tagWater.png"
import tagBug from "../imagens/tagBug.png"
import tagFire from "../imagens/tagFire.png"
import tagFlying from "../imagens/tagFlying.png"
import tagNormal from "../imagens/tagNormal.png"


export const ImgTipo = (tipo) => {
    switch (tipo) {
        case "grass":
            return tagGrass;
        case "poison":
            return tagPoison;
        case "water":
            return tagWater;
        case "bug":
            return tagBug;
        case "fire":
            return tagFire;
        case "flying":
            return tagFlying;
        case "normal":
            return tagNormal;
         default:
            return tagGrass;
    }
}