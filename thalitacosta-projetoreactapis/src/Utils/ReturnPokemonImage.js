import bulbasaur from "../Assets/PokemonImages/bulbasaur.png";
import ivysaur from "../Assets/PokemonImages/ivysaur.png"
import venusaur from "../Assets/PokemonImages/venusaur.png"
import charmander from "../Assets/PokemonImages/charmander.png"
import charmeleon from "../Assets/PokemonImages/charmeleon.png"
import charizard from "../Assets/PokemonImages/charizard.png"
import squirtle from "../Assets/PokemonImages/squirtle.png"
import wartortle from "../Assets/PokemonImages/wartortle.png"
import raticate from "../Assets/PokemonImages/raticate.png"
import rattata from "../Assets/PokemonImages/rattata.png"
import pidgeot from "../Assets/PokemonImages/pidgeot.png"
import pidgeotto from "../Assets/PokemonImages/pidgeotto.png"
import pidgey from "../Assets/PokemonImages/pidgey.png"
import beedrill from "../Assets/PokemonImages/beedrill.png"
import kakuna from "../Assets/PokemonImages/kakuna.png"
import weedle from "../Assets/PokemonImages/weedle.png"
import butterfree from "../Assets/PokemonImages/butterfree.png"
import metapod from "../Assets/PokemonImages/metapod.png"
import caterpie from "../Assets/PokemonImages/caterpie.png"
import blastoise from "../Assets/PokemonImages/blastoise.png"

export const getImg = (name) => {
  switch (name) {
    case "bulbasaur":
      return bulbasaur;
    case "ivysaur":
      return ivysaur;
    case "venusaur":
      return venusaur;
    case "charmander":
      return charmander;
    case "charmeleon":
      return charmeleon;
    case "charizard":
      return charizard;
    case "squirtle":
      return squirtle;
    case "wartortle":
      return wartortle;
    case "blastoise":
      return blastoise;
    case "caterpie":
      return caterpie;
    case "metapod":
      return metapod;
    case "butterfree":
      return butterfree;
    case "weedle":
      return weedle;
    case "kakuna":
      return kakuna;
    case "beedrill":
      return beedrill;
    case "pidgey":
      return pidgey;
    case "pidgeotto":
      return pidgeotto;
    case "pidgeot":
      return pidgeot;
    case "rattata":
      return rattata;
    default:
      return raticate;
  }
};
