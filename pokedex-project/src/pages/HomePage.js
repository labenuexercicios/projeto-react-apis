import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import { PokemonContext } from "../context/pokemonContext";
import { goToDetails, goToPokedex } from "../routes/cordinator";
// import { PokemonContext } from "../../context/pokemonContext";

function Home() {
  const navigate = useNavigate();
  const { pokemon } = useContext(PokemonContext);
  console.log(pokemon);
  return (
    <>
      <Header />
      {pokemon.map((pokemon) => (
        <div key={pokemon.data.id}>
          {" "}
          {/*class card*/}
          <article>
            {" "}
            {/*class top*/}
            <div>
              {/*class container1*/}
              <div>
                {" "}
                {/*class text1*/}
                <p>#{pokemon.data.id}</p>
                <h1>{pokemon.data.name}</h1>
              </div>
              {/* <div>
duas imagens dos tipos
<p>{pokemon.data.types.type.name}</p> 
</div> */}
            </div>
            <div>
              {/*class bulbasaur*/}
              <img
                src={pokemon.data.sprites.other.dream_world.front_default}
                alt="imagem"
              />
            </div>
          </article>
          <div>
            {" "}
            {/*class details*/}
            <a
              onClick={() => {
                goToDetails(navigate, "details");
              }}
            >
              Detalhes
            </a>
            <button
              onClick={() => {
                goToPokedex(navigate, "pokedex");
              }}
            >
              Capturar
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Home;
