export const colorProgress = (statName) => {
    switch (statName) {
        case "hp":
            return "#ff7c2e"
        case "attack":
            return "#ff7c2e"
        case "defense":
            return "#ff7c2e"
        case "special-attack":
            return "#ffdd69"
        case "special-defense":
            return "#d9bc59"
        case "speed":
            return "#e06926"
        default:
            return "yellow"
    }
}