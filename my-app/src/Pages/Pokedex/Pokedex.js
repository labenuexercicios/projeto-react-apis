import PokedexCard from "../../Components/PokedexCard/PokedexCard";
import Navbar from "../../Components/Navbar/Navbar";
import "./Pokedex.css";
import { useState } from "react";

function PokedexPage(props) {
  const { pokedex, catchList, removeFromCatchList, addToCatchList } = props;
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);
  
  const sortedPokedex = [...pokedex].sort((a, b) => a.id - b.id);

  const currentPokemon = sortedPokedex[currentPokemonIndex];

  return (
    <div>
      <Navbar />
      <div className="sectionPokedex">
        {currentPokemon && (
          <PokedexCard
            key={currentPokemon.id}
            pokemonUrl={`https://pokeapi.co/api/v2/pokemon/${currentPokemon.id}`}
            catchList={catchList}
            currentPokemon={currentPokemon}
          />
        )}
        {(pokedex.length > 0) ? <div className="controller">
          <button className="button-82-pushable" role="button" onClick={() => {
            if (currentPokemonIndex === 0) {
              setCurrentPokemonIndex(pokedex.length - 1);
            } else {
              setCurrentPokemonIndex(currentPokemonIndex - 1);
            }
          }}>
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">&gt;
            </span>
          </button>
          <button className="button-82-pushable" role="button" onClick={() => {
            if (currentPokemonIndex === pokedex.length - 1) {
              setCurrentPokemonIndex(0);
            } else {
              setCurrentPokemonIndex(currentPokemonIndex + 1);
            }
          }}>
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">&lt;
            </span>
          </button>
        </div> : <div></div>}
        <div className="catchReleaseButtons">
          <button onClick={() => addToCatchList(currentPokemon)} class="buttonCatch-pushable" role="button">
            <span class="buttonCatch-shadow"></span>
            <span class="buttonCatch-edge"></span>
            <span class="buttonCatch-front text">
              Catch
            </span>
          </button>

          <button onClick={() => removeFromCatchList(currentPokemon)} class="buttonRelease-pushable" role="button">
            <span class="buttonRelease-shadow"></span>
            <span class="buttonRelease-edge"></span>
            <span class="buttonRelease-front text">
              Release
            </span>
          </button>
        </div>

      </div>
      <div className="backgroundPokedex"></div>
    </div>
  );
}

export default PokedexPage;
