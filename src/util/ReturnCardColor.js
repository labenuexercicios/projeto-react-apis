import { typeColors } from "./ReturnTypeColor";
import { typeNames } from "./ReturnTypeName";

export const getColors = (type) => {
  switch (type) {
    case typeNames.bug:
      return typeColors.bug;
    case typeNames.dark:
      return typeColors.dark;
    case typeNames.dragon:
      return typeColors.dragon;
    case typeNames.electric:
      return typeColors.electric;
    case typeNames.fairy:
      return typeColors.fairy;
    case typeNames.fighting:
      return typeColors.fighting;
    case typeNames.fire:
      return typeColors.fire;
    case typeNames.flying:
      return typeColors.flying;
    case typeNames.ghost:
      return typeColors.ghost;
    case typeNames.grass:
      return typeColors.grass;
    case typeNames.ground:
      return typeColors.ground;
    case typeNames.ice:
      return typeColors.ice;
    case typeNames.normal:
      return typeColors.normal;
    case typeNames.poison:
      return typeColors.poison;
    case typeNames.psychic:
      return typeColors.psychic;
    case typeNames.rock:
      return typeColors.rock;
    case typeNames.steel:
      return typeColors.steel;
    case typeNames.water:
      return typeColors.water;
    default:
      return typeColors.normal;
  }
};
