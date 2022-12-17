import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { PokedexPageContainer } from "./PokedexPage.styled";

function PokedexPage() {
  return (
    <PokedexPageContainer>
      <h1>Meus Pokemons</h1>

      <PokemonCard
        nome={"picachu"}
        tipo={"raio"}
        />
      <PokemonCard
        nome={"bulbasaur"}
        tipo={"agua"}
        />
      <PokemonCard
        nome={"raiuchu"}
        tipo={"fogo"}
        />

    </PokedexPageContainer>
  )
}

export default PokedexPage;
