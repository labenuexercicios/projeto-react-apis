export const getColors = (type) => {
    switch (type) {
      case "bug":
        return "#76A866";
      case "fire":
        return "#EAAB7D";
      case "flying":
        return "#6892B0";
      case "electric":
        return "#F4D23B";
      case "grass":
        return "#729F92";
      case "ground":
          return "#F57745";
      case "normal":
        return "#BF9762";
      case "poison":
        return "#CD61AE";
      case "water":
        return "#71C3FF";
      case "dragon":
        return "#004170";
      default:
        return "red";
    }
  };
  