import Poison from "../../img/Frame 3.png";
import Grass from "../../img/Frame 4.png";
import Fire from "../../img/Frame 5.png";
import Flying from "../../img/Frame 6.png";
import Water from "../../img/Frame 7.png";
import Bug from "../../img/Frame 8.png";
import Normal from "../../img/Frame 9.png";
import Dark from "../../img/Frame 17.png";
import Dragon from "../../img/Frame 18.png";
import Eletric from "../../img/Frame 19.png";
import Fairy from "../../img/Frame 20.png";
import Fighting from "../../img/Frame 21.png";
import Ghost from "../../img/Frame 22.png";
import Ground from "../../img/Frame 23.png";
import Ice from "../../img/Frame 24.png";
import Psychic from "../../img/Frame 25.png";
import Rock from "../../img/Frame 26.png";
import Steel from "../../img/Frame 27.png";
import { Img } from "./style";

export const PokemonType = (props) => {
  const type = () => {
    switch (props.type) {
      case "poison":
        return <Img src={Poison} alt="type"/>;
      case "grass":
        return <Img src={Grass} alt="type"/>;
      case "fire":
        return <Img src={Fire} alt="type"/>;
      case "flying":
        return <Img src={Flying} alt="type"/>;
      case "water":
        return <Img src={Water} alt="type"/>;
      case "bug":
        return <Img src={Bug} alt="type"/>;
      case "normal":
        return <Img src={Normal} alt="type"/>;
      case "dark":
        return <Img src={Dark} alt="type"/>;
      case "dragon":
        return <Img src={Dragon} alt="type"/>;
      case "eletric":
        return <Img src={Eletric} alt="type"/>;
      case "fairy":
        return <Img src={Fairy} alt="type"/>;
      case "fighting":
        return <Img src={Fighting} alt="type"/>;
      case "ghost":
        return <Img src={Ghost} alt="type"/>;
      case "ground":
        return <Img src={Ground} alt="type"/>;
      case "ice":
        return <Img src={Ice} alt="type"/>;
      case "psychic":
        return <Img src={Psychic} alt="type"/>;
      case "rock":
        return <Img src={Rock} alt="type"/>;
      case "steel":
        return <Img src={Steel} alt="type"/>;
      default:
        break;
    }
  };
  return <>{type()}</>;
};
