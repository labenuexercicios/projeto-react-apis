import React, { useContext } from "react";
import { PokedexContext } from "../../Global/GlobalState";
import { useNavigate } from "react-router-dom";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import "./PokedexPage.css";

export default function PokedexPage() {
  const { pokedex, setPokedex } = useContext(PokedexContext);
  const navigate = useNavigate();
  return (
    <div className="pokedexpage">
      <div className="header">        
        <button className="botaopokedex"
          onClick={() => {
            navigate("/");
          }}
        >
         &lt; Todos os pokemons
        </button>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
        <span></span>
      </div>
      <div className="pokedexpage">
        {pokedex ? (
          <div className="pokemonGrid">
            {pokedex.map((p, k) => (
              // <li key={k}>{p.name}   <button onClick={()=>{adicionarPokemon(p.id)}}>Adicionar </button> <img src={p.sprites.front_default} alt="" /> </li>
              <PokemonCard pokemon={p} key={k} adicionar={false}></PokemonCard>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
