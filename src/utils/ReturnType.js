import bug from '../imgs/bug.png'
import fire from '../imgs/fire.png'
import flying from '../imgs/flying.png'
import poison from '../imgs/poison.png'
import water from '../imgs/water.png'
import grass from '../imgs/grass.png'
import normal from '../imgs/normal.png'

export const getType = (type)=>{
    switch(type){
        case "bug":
            return bug;
        case "flying":
            return flying;
        case "poison":
            return poison;
        case "water":
            return water;
        case "grass":
            return grass;
        case "normal":
            return normal;
        case "fire":
            return fire;
        default:
            return "";
    }
}