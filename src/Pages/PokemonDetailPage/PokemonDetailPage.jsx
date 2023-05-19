import React, { useContext } from "react";
import { PokedexContext } from "../../Global/GlobalState";
import { useNavigate } from "react-router-dom";
import "./PokemonDetailPage.css";


export default function PokemonDetailPage() {
  const { pokedex, setPokedex } = useContext(PokedexContext);
  const navigate = useNavigate();
  return (
    <div>
      <div className="header">
        <button
          className="botaopokedex"
          onClick={() => {
            navigate("/");
          }}
        >
          &lt; Todos os pokemons
        </button>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png"
          alt=""
        />
        <span></span>
      </div>
      <div className="detalhespage">
       
      </div>

    </div>
  );
}
