import { CatchButton, Container, Containerimg, Pokeball, Pokemon, PokemonName, PokemonNumber, PokemonType, TypesContainer } from './styledPokeCard'
import pokeball from '../../assets/pokebola.png'
import { getTypes } from '../../utils/PokeType'
import { getColors } from '../../utils/TypeColor'

export const PokeCard = (props) => {

  const types = props.pokemons.data.types.map((type) => getTypes(type.type.name));
  const color = props.pokemons.data.types.map((typecolor) => getColors(typecolor.type.name));
  console.log(color)
  
  return (
    <Container color={color}>
      <div>
        <PokemonNumber></PokemonNumber>
        <PokemonName>{props.pokemons.data.name}</PokemonName>
        <TypesContainer>
          {types.map((typeUrl) => (
            <img src={typeUrl} alt="" />
          ))}
        </TypesContainer>
        <a href="/list/detail">Ver detalhes</a>
      </div>
      <Containerimg>
        {<Pokemon src={`${props.pokemons.data.sprites.front_default}`} alt="" />}
        <CatchButton>Capturar!</CatchButton>
      </Containerimg>
      <Pokeball src={pokeball} alt="pokeball" />
    </Container>
  )
}
