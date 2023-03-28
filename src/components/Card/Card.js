import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";
import {TypesContainer, PokemonDetails, Container, CatchButton, PokemonNumber, PokemonName, Pokeball, Pokemon, ExtButton,PokemonType } from "./styled";
import pokeball from '../../assets/pngwing 2.png'
import { getPokemonType } from "../../constants/type";
import { getColors } from "../../constants/color";


function Card(props) {
  const { pokemonUrl, addToPokedex, removeFromPokedex, } = props;

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
      console.log(response.data)
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

  return (
    <Container color={getColors(pokemon.types && pokemon.types[0].type.name)} >
      <Pokemon 
          src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt={pokemon.name} /> 
      <Pokeball src={pokeball} alt="pokeball" />
      <div>
      <PokemonNumber>#{pokemon.id}</PokemonNumber>
      <PokemonName>{pokemon.name}</PokemonName>
      <TypesContainer>
      {pokemon.types?.map((type) => {
              return (
                <PokemonType src={getPokemonType(type.type.name)}  />
              );
            })}
        </TypesContainer>
      
        {location.pathname === "/" ? (
          <CatchButton onClick={() => addToPokedex(pokemon)}>
            Capturar!
          </CatchButton>
        ) : (
          <ExtButton onClick={() => removeFromPokedex(pokemon)}>
            Excluir
          </ExtButton>
        )}
        <PokemonDetails typeof="submit" onClick={() => goToDetailsPage(navigate, pokemon.name)}>
          Detalhes
        </PokemonDetails>
      </div>
    </Container>
  );
}

export default Card;
