import React from "react";
import Poison from "../../img/Vector-Poison.png";
import Grass from "../../img/Grass.png";
import Fire from "../../img/Fire.png";
import Flying from "../../img/Flying.png";
import Water from "../../img/Water.png";
import Bug from "../../img/Bug.png";
import Normal from "../../img/normal.png";
import { BoxType, LiType } from "./styled";

const TiposPokemon = (props) => {
  const { pokemon } = props;
  return (
    <BoxType>
      {pokemon.types.map((tipo, index) => {
        let corType = "";
        let imgType = "";
        switch (tipo.type.name) {
          case "flying":
            corType = "#6892B0";
            imgType = Flying;
            break;
          case "grass":
            corType = "#70B873";
            imgType = Grass;
            break;
          case "poison":
            corType = "#AD61AE";
            imgType = Poison;
            break;
          case "fire":
            corType = "#F44900";
            imgType = Fire;
            break;
          case "water":
            corType = "#33A4F5";
            imgType = Water;
            break;
          case "bug":
            corType = "#316520";
            imgType = Bug;
            break;
          case "normal":
            corType = "#8A8A8A";
            imgType = Normal;
            break;
          default:
            break;
        }
        return (
          <LiType key={index} bgColor={corType}>
            <img src={imgType} alt="" /> {tipo.type.name}
          </LiType>
        );
      })}
    </BoxType>
  );
};

export default TiposPokemon;
