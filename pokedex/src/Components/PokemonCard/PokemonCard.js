
import React from "react";
import {Container,PokemonNumber, PokemonName, PokemonType, TypesContainer, Pokeball, CatchButton, Pokemon} from './pokemonCardStyle'
import pokeball from '../../assets/pngwing 2.png'
import {getTypes} from '../../utils/ReturnPokemonType'

const PokemonCard = (props) => {

    return (
      <Container color={props.cardColor}>
        <div>
          <PokemonNumber>{props.pokemon.id}</PokemonNumber>
          <PokemonName>{props.pokemon.name.english}</PokemonName>
          <TypesContainer>
              {props.pokemon.type.map((type) => {
                  return <PokemonType key={type} src={getTypes(type)} alt='' />
              })}
          </TypesContainer>
          <p>Detalhes</p>
        </div>
        <div>
          <Pokemon src={`https://www.serebii.net/swordshield/pokemon/${props.pokemon.id}.png`} alt="" />
          <CatchButton>Capturar!</CatchButton>
        </div>
        <Pokeball src={pokeball} alt="pokeball" />
      </Container>
    );
  };
  
  export default PokemonCard;