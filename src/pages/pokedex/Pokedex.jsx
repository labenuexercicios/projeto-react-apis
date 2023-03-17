import Header from "../../components/header/Header";
import PokedexComponent from "../../components/pokedex/Pokedex";

export default function Pokedex() {
  return (
    <div>
      <Header />
      <div className="font-[Poppins] text-[48px] font-[700] leading-[72px] text-[white] m-[50px]">
        My Pokémons
      </div>
      <PokedexComponent />
    </div>
  );
}
