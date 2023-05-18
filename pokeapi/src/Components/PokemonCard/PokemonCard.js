import { CatchButton, Container, Containerimg, Pokeball, Pokemon, PokemonName, PokemonNumber, PokemonType, TypesContainer } from './styledPokeCard';
import pokeball from '../../assets/pokebola.png';
import { getTypes } from '../../utils/PokeType';
import { getColors } from '../../utils/TypeColor';
import { useState } from 'react';

export const PokeCard = (props) => {
  const types = props.pokemons.data?.types?.map((type) => getTypes(type.type.name));
  const color = props.pokemons.data?.types?.map((typecolor) => getColors(typecolor.type.name));

  const handleCapture = () => {
    const capturedPokemon = {
      id: props.pokemons.data.id,
      name: props.pokemons.data.name,
      types: types,
    };

    // Retrieve the existing captured Pokemon array from localStorage or initialize an empty array
    const storedCapturedPokemon = localStorage.getItem('capturedPokemon');
    const capturedPokemonArray = storedCapturedPokemon ? JSON.parse(storedCapturedPokemon) : [];

    // Add the captured Pokemon to the array
    capturedPokemonArray.push(capturedPokemon);

    // Update the captured Pokemon array in localStorage
    localStorage.setItem('capturedPokemon', JSON.stringify(capturedPokemonArray));
  };

  return (
    <Container color={color}>
      <div>
        <PokemonNumber>{props.pokemons.data.id}</PokemonNumber>
        <PokemonName>{props.pokemons.data.name}</PokemonName>
        <TypesContainer>
          {types && types.map((typeUrl) => (
<<<<<<< HEAD
            <img src={typeUrl} alt="" key={typeUrl} />
=======
            <img src={typeUrl} alt="" />
>>>>>>> 633d06f5575c7ce7bd61d8b1acfd391643988ff6
          ))}
        </TypesContainer>
        <a href={`/list/detail/${props.pokemons.data.id}`}>Ver detalhes</a> {/* Adiciona um link para a página "Pokedex" com o ID do Pokémon */}
      </div>
      <Containerimg>
<<<<<<< HEAD
      {props.pokemon && props.pokemon.sprites && (
  <Pokemon src={`${props.pokemon.sprites.front_default}`} alt="" />
)}
        <CatchButton onClick={handleCapture}>Capturar!</CatchButton>
      </Containerimg>
      <Pokeball src={pokeball} alt="pokeball" />
    </Container>
  );
};
=======
        {props.pokemons.data.sprites && <Pokemon src={`${props.pokemons.data.sprites.front_default}`} alt="" />}
        {captured ?
          <CatchButton onClick={() => removePokemon(props.pokemons.data)}>Remover</CatchButton> :
          <CatchButton onClick={() => capturePokemon(props.pokemons.data)}>Capturar!</CatchButton>
        }
      </Containerimg>
      <Pokeball src={pokeball} alt="pokeball" />
    </Container>
  )
}
>>>>>>> 633d06f5575c7ce7bd61d8b1acfd391643988ff6
