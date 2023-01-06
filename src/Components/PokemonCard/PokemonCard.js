import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import { CardPokemon } from './PokemonCardstyle';
import Pokebola from "../../assets/pokebola.png";
import { ImagensCardContainer } from "./PokemonCardstyle";
import { DetalhesBotão } from "./PokemonCardstyle";
import { getPokemonType } from "../../Constantes/type";
import { TypesContainer } from "./PokemonCardstyle";
import { PokemonType } from "./PokemonCardstyle";
import { getColors } from '../../Constantes/Cardcor';
import { PokemonNome } from "./PokemonCardstyle";
import { PokemonNumero } from './PokemonCardstyle';
import { gotopokemonDetailPage } from '../../routes/coordinator';
import { useNavigate,useLocation } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';
import {BotãoexcluirPokedex} from "./PokemonCardstyle"


export default function PokemonCard(props) {


  const [pokemonColor, setPokemonColor] = useState("")

  const { pokemonUrl } = props;

  const [pokemon, setPokemon] = useState({});


  const context = useContext(GlobalContext);
  const { addToPokedex,removeFromPokedex } = context;


  const navigate = useNavigate()
  const location = useLocation();



  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
      setPokemonColor(getColors(response.data.types[0].type.name))

    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };



  return (


    <>

      <CardPokemon style={{ backgroundColor: pokemonColor }}   >

        <PokemonNumero>
          <p>#{pokemon.id}</p>

        </PokemonNumero>

        <PokemonNome>
          <h1>{pokemon.name}</h1>
        </PokemonNome>

        <TypesContainer>
          {pokemon?.types?.map((type) => {

            return <PokemonType key={type} src={getPokemonType(type.type.name)} alt="" />;
          })}


        </TypesContainer>



        <ImagensCardContainer>


          <img className="pokebola" src={Pokebola} />
          <img className="pokeimage" src={pokemon.sprites?.other['official-artwork'].front_default} />

        </ImagensCardContainer>



        <DetalhesBotão>


          <p onClick={() => gotopokemonDetailPage(navigate,pokemon.id)}>Detalhes</p>
          {location.pathname === '/' &&
          <button onClick={() => addToPokedex(pokemon)}> Capturar!</button>}
          {location.pathname === "/pokedex" &&
          <BotãoexcluirPokedex  onClick={() => removeFromPokedex(pokemon)}> Excluir!</BotãoexcluirPokedex>}

        </DetalhesBotão>


      </CardPokemon>


    </>
  )
}




