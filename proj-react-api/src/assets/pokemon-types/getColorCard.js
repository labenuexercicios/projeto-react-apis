export const getColorCard = (type)=>{
    switch(type){
        case "poison":
            return "#A15AB1";
        case "grass":
            return "#729F92";
        case "fire":
            return "#EAAB7D";
        case "flying":
            return "#6892B0";
        case "water":
            return "#71C3FF";
        case "bug":
            return "#76A866";
        case "normal":
            return "#BF9762";
        case "dark":
            return "#5E4C4C";
        case "dragon":
            return "#004170";
        case "electric":
            return "#FAD33E";
        case "fairy":
            return "#F9A8EF";
        case "fighting":
            return "#9B4840";
        case "ghost":
            return "#7D66AE";
        case "ground":
            return "#C8AB63";
        case "ice":
            return "#94E3F1";
        case "psychic":
            return "#F5779E";
        case "rock":
            return "#A8865D";
        case "steel":
            return "#ABA9BE";
    }
}