export const BackgroundColor = (type) => {
  switch (type) {
    case "poison":
      return "#b363d6";
    case "grass":
      return "#729F92";
    case "fire":
      return "#EAAB7D";
    case "flying":
      return "#88dbba";
    case "water":
      return "#71C3FF";
    case "bug":
      return "#76A866";
    case "normal":
      return "#BF9762";
    case "dark":
      return "#61605f";
    case "dragon":
      return "#004170";
    case "eletric":
      return "#fcba03";
    case "fairy":
      return "#f777f3";
    case "fighting":
      return "#de3923";
    // case "ghost":
    //   return <Img src={Ghost} alt="type"/>;
    case "ground":
      return "#754d24";
    case "ice":
      return "#004170";
    // case "psychic":
    //   return <Img src={Psychic} alt="type"/>;
    // case "rock":
    //   return <Img src={Rock} alt="type"/>;
    case "steel":
      return "#bfbfbf";
    default:
      return "#ebc73b";
  }
};
