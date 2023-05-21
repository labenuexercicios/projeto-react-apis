export const abbreviate = (abbreviateStats) => {
    switch (abbreviateStats) {
        case "Hp":
            return "Hp:"
        case "Attack":
            return "Attack:"
        case "Defense":
            return "Defense:"
        case "Special-attack":
            return "Sp.Atk:"
        case "Special-defense":
            return "Sp.Def:"
        case "Speed":
            return "Speed:"
        default:
            break;
    }
}

export const ModifayFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}