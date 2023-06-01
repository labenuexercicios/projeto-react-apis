import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";
import {TypesContainer, PokemonDetails, Container, CatchButton, PokemonNumber, PokemonName, Pokeball, Pokemon, ExtButton,PokemonType } from "./styled";
import pokeball from '../../assets/pngwing 2.png'
import { getPokemonType } from "../../constants/type";
import { getColors } from "../../constants/color";
import React from "react";

function Card(props) {
  const { pokemonUrl, addToPokedex, removeFromPokedex, setOpenModal, verifyPokemon} = props;
  
  // Função que retorna primeira letra do nome em maiusculo
  const capitalize = str => {
    if (typeof str !== 'string') {
      return '';
    }
    return str.charAt(0).toUpperCase() + str.substring(1);
  }
  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({});
  // guarda, porque ainda não renderizamos
  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };
  const onClickCard = (name) => {
    goToDetailsPage(navigate,name)
    };

 
  return (
    <Container  color={getColors(pokemon.types && pokemon.types[0].type.name)} >
      <Pokemon 
          src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt={pokemon.name} /> 
      <Pokeball src={pokeball} alt="pokeball" />
      <div>
      <PokemonNumber>#{pokemon.id < 10 ? '0' + String(pokemon.id):pokemon.id}</PokemonNumber>
      <PokemonName>{capitalize(pokemon.name)}</PokemonName>
      <TypesContainer>
      {pokemon.types?.map((type) => {
              return (
                <PokemonType src={getPokemonType(type.type.name)}  />
              );
            })}
        </TypesContainer>
      
        {location.pathname === "/" ? (
          <CatchButton onClick={() => {   addToPokedex(pokemon); setOpenModal(true);}}>
            
            Capturar!
          </CatchButton>
        ) : (
          <ExtButton onClick={() => {removeFromPokedex(pokemon); setOpenModal(true);} }>
            Excluir
          </ExtButton>
        )}
        <PokemonDetails typeof="submit" onClick={() => {  verifyPokemon(pokemon);  onClickCard(pokemon.name);}}>
          Detalhes
        </PokemonDetails>
      </div>
      
    </Container> 
    
  );
}

export default Card;
