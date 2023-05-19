import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { PokedexContext, pokedex } from "../../Global/GlobalState";
import { useNavigate } from "react-router-dom";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";

import "./PokemonListPage.css";

export default function PokemonListPage() {
  const [pokemons, setPokemons] = useState([]);
  const { pokedex, setPokedex } = useContext(PokedexContext);
  const navigate = useNavigate();

  function adicionarPokemon(id) {
    console.log("Adicionando pokemon numero", id);
    setPokedex([...pokedex, id]);
  }

  useEffect(() => {
    let allPokemons = [];
    for (let i = 1; i < 20; i++) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then((response) => {
          allPokemons = [...allPokemons, response.data];
          setPokemons(allPokemons);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <div>
<div className="header">
  <span></span>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
      <button className="botao"
        onClick={() => {
          navigate("/pokedex");
        }}
      >
        Pokedex
      </button>
</div>
      <h1 className="titulo">Todos os Pokemons</h1>
      <div className="pokemonlistpage">
        {pokemons ? (
          <div className="pokemonGrid">
            {pokemons.map((p, k) => (
              // <li key={k}>{p.name}   <button onClick={()=>{adicionarPokemon(p.id)}}>Adicionar </button> <img src={p.sprites.front_default} alt="" /> </li>
              <PokemonCard pokemon={p} key={k} adicionar={true}></PokemonCard>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
