import { FotoPokemon, Pokeball, PokemonNumber, PokemonName, CatchButton, TypesContainer, PokemonType, Container} from "./Styled"
import { useLocation, useNavigate } from "react-router-dom";
import { goToPokemonDetail } from "../../Coordinator/Coordinator"
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import {getTypes} from "../../Utils/ReturnPokemonType"
import pokeball from "../../Assets/pokeboll.png"
import {getImg} from "../../Utils/ReturnPokemonImage"
import { getColors } from "../../Utils/ReturnCardColor";


function PokemonCard(props) {

  const { pokemonUrl, addToPokedex, removeFromPokedex, addToDetail} = props;
  const [pokemon, setPokemon] = useState({});
  const location = useLocation()
  const navigate = useNavigate()

  /* console.log(pokemon) */

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data)
      console.log(response.data)
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons no Card");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const Container = styled.div`
  padding: 16px;
  min-width: 400px;
  max-width: 440px;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 50px;
  color: #ffffff;
`;
  

  /* const nameUpperCase = pokemon.name[0].toUpperCase() + pokemon.name.substring(1); */
  // deixar primeira letra maiúscula

    return (
        <Container color={getColors(pokemon.types && pokemon.types[0].type.name)}>
        <div>
          <PokemonNumber>#{pokemon.id}</PokemonNumber>
          <PokemonName>{pokemon.name}</PokemonName>
          <TypesContainer>
          {pokemon.types?.map((type) => {   
            const tipo = type.type.name  
            return (<PokemonType key={tipo} src={getTypes(tipo)} alt={tipo} />);
          })}
          </TypesContainer>
          <button onClick={() => goToPokemonDetail(navigate)}>Detalhes</button>
        </div>
        <div>
          <FotoPokemon src={getImg(pokemon.name)} alt="{}" />
        {location.pathname === "/" ? (
          <CatchButton onClick={() => addToPokedex(pokemon)}>
            Capturar!
          </CatchButton>
        ) : (
          <CatchButton onClick={() => removeFromPokedex(pokemon)}>
            Remover
          </CatchButton>
        )}
        </div>
        <Pokeball src={pokeball} alt="pokeball" />
      </Container>
      )
  }
  
  export default PokemonCard;