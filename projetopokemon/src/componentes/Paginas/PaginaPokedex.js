import headerimg from "../../icones/headerimg.svg";
import { useNavigate } from "react-router-dom";
import { CartoesPokemon } from "../CartaoPokemon/CartaoPokemon";
import { Container } from "./style";
import { BASE_URL } from "../constantes/url";
import { useContext } from "react";
import { GlobalContext } from "../Context/context";
import { irParaPaginaPrincipal } from "../../Rotas/coordinator";

function PaginaPokedex (props) {
  // const { pokedex, removeFromPokedex } = props;
  const context = useContext(GlobalContext)
  const { removeFromPokedex, pokedex } = context

  // hook para redirecionar
  const navigate = useNavigate();

  return (
    <Container>
      <div className="pokemonheader">
        <img src={headerimg} />

      </div>
      <div>
        <h1 className="quandoclicar" onClick={() => irParaPaginaPrincipal(navigate)}>Todos Pokémons</h1>
      </div>

      <section>
        <h1><b>Meus pokemóns</b></h1>


        <div className="cards">

          {pokedex.map((pokemon) => {

            return <CartoesPokemon

              key={pokemon.name}
              pokemonurl={`${BASE_URL}/${pokemon.name}`}
              removeFromPokedex={removeFromPokedex}

            />

          })}
        </div>
      </section>
    </Container>
  );
}

export default PaginaPokedex;