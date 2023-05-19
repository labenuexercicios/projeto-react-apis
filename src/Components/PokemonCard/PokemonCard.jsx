import React from "react";
import { useContext } from "react";
import { PokedexContext } from "../../Global/GlobalState";
import { useNavigate } from "react-router-dom";

import "./PokemonCard.css"

export default function PokemonCard(props) {
  const { pokedex, setPokedex } = useContext(PokedexContext);
  const pokemon = props.pokemon;
  const navigate = useNavigate();
  const adicionar = props.adicionar;

  function adicionarPokemon(pokemon){
    let pokemonJaAdicionado = false;
    pokedex.forEach(p=>{
      if(p.name == pokemon.name){
        pokemonJaAdicionado = true;
      }
    })

    if(pokemonJaAdicionado == false){
      setPokedex([...pokedex, pokemon])
      alert("Pokemon Capturado!");
    }
    else{
      console.log("pokemon ja existe")
      alert("Esse pokemon ja foi capturado");
    }
  }


  function excluirPokemon(pokemon) {
    let pkd = pokedex.filter((p)=>{
      return p.name != pokemon.name;      
    });

    alert("Pokemon excluido!");
    setPokedex(pkd);
  }

  function botaoAdicionar() {
    return (
      <div className="capturar">
        <button
          onClick={() => {
            adicionarPokemon(pokemon);
          }}
        >
          Capturar
        </button>
      </div>
    );
  }

  function botaoExcluir() {
    return (
      <div className="capturar">
        <button
          onClick={() => {
            excluirPokemon(pokemon);
          }}
        >
          Excluir
        </button>
      </div>
    );
  }
  
  return (
    <div className="pokemonCard">
      <div className="cardGrid">
        <div className="pokemonPresentation">
          <div className="pokemonId">#{pokemon.id}</div>
          <div className="pokemonName">{pokemon.name}</div>
          <div className="pokemonType">
            {/* {JSON.stringify(pokemon.types)} */}
            {pokemon.types.map((e)=>{return <span>{e.type.name} </span>})}
          </div>
        </div>
        <div className="pokemonImage">
            <img width="150" src={pokemon.sprites.front_default} alt="" />
        </div>
        <div className="detalhes"><button onClick={()=>{navigate("/detalhes")}}> Detalhes</button></div>
{adicionar?botaoAdicionar():botaoExcluir()}
      </div>
    </div>
  );
}
