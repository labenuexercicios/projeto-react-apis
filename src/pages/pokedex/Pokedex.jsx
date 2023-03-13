import Header from "../../components/header/Header";
import PokedexComponent from "../../components/pokedex/Pokedex";

export default function Pokedex() {
  return (
    <div>
      <Header calledFor="pokedex" />
      <PokedexComponent />
    </div>
  );
}
