import bug from "../image/Bug.png";
import fire from "../image/Fire.png";
import flying from "../image/Flying.png";
import grass from "../image/Grass.png";
import normal from "../image/Normal.png";
import poison from "../image/poison.png";
import water from "../image/Water.png";

export const Tipos = tipo => {
  switch (tipo) {
    case 'grass':
      return <img src={grass} alt="" />
    case 'poison':
      return <img src={poison} alt="" />
    case 'fire':
      return <img src={fire} alt="" />
    case 'flying':
      return  <img src={flying} alt="" />
    case 'water':
      return <img src={water} alt="" />
    case 'bug':
      return <img src={bug} alt="" />
    case 'normal':
      return <img src={normal} alt="" />
    default:
      return ''
  }
}