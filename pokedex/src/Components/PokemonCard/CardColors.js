export const colorsCard = (type) =>{
    switch(type){
        case "fire":
            return "#F44900"
        case "water":
            return "#33A4F5"
        case "bug":
            return "#316520"
        case "flying":
            return "#6892B0"
        case "normal":
            return "#8A8A8A"
        case "grass":
            return "#70B873"
        case "poison":
            return "#AD61AE"
        default:
            return "#8A8A8A";    
    }
}