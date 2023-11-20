
export const getColors = (type) => {
    switch(type) {
      case "Bug":
        return "#316520";
      case "Dark":
        return "#5C5365";
      case "Dragon":
        return "#0A6CBF";
      case "Electric":
        return "#F4D23B";
      case "Fairy":
        return "#EC8FE6";
      case "Fighting":
        return "#CE4069";
      case "Fire":
        return "#F44900";
      case "Flying":
        return "#6892B0";
      case "Ghost":
        return "#5269AC";
      case "Grass":
        return "#70B873";
      case "Ground":
        return "#D97745";
      case "Ice":
        return "#74CEC0";
      case "Normal":
        return "#8A8A8A";
      case "Poison":
        return "#AD61AE";
      case "Psychic":
        return "#F67176";
      case "Rock":
        return "#C7B78B";
      case "Steel":
        return "#BBBBBB";
      case "Water":
        return "#33A4F5";
      default:
        return "#8A8A8A";
    }
  };
