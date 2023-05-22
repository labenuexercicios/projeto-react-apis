export const getTypeColors = (types) => {
  
    switch (types) {
        case "bug":
            return "#C6D16E";
        case "dark":
            return "#8C6A5E";
        case "dragon":
            return "#8A51D6";
        case "electric":
            return "#FBE273";
        case "fairy":
            return "#FFB6C1";
        case "fighting":
            return "#FF5A5E";
        case "fire":
            return "#F8C19A";
        case "flying":
            return "#6892b0";
        case "ghost":
            return "#A292BC";
        case "grass":
            return "#1e6900";
        case "ground":
            return "#F0E0A0";
        case "ice":
            return "#B0E0E6";
        case "normal":
            return "#C6C6A7";
        case "poison":
            return "#520070";
        case "psychic":
            return "#FF77A8";
        case "rock":
            return "#D9C07C";
        case "steel":
            return "#D1D1E0";
        case "water":
            return "#9DBEFF";
        default:
            return "#8A8A8A";
    }
};

