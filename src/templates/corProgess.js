export const corProgress = (tipos) => {
    switch (tipos) {
        case "special-attack":
            return "yellow";
        case "special-defense":
            return "yellow";
        default:
            return "orange"
        }}