import axios from 'axios';
import {
  CardsContainer,
  Button,
  Pokebola,
  Container,
  PokemonNumber,
  PokemonName,
  TypesContainer,
  Pokemon,
  CatchButton
} from "./PokemonCardStyle"
import { useEffect, useState } from 'react';
import pokebola from '../../assets/images/pokebola.png'
import { goToDetails } from '../../router/coordinates'
import { useNavigate, useLocation } from 'react-router-dom';
import { getTypes } from "../../utils/PokemonType.js"
import { getColors } from '../../utils/CardColor';

export default function PokemonCard(props) {

  const { addToPokedex, removeFromPokedex, url } = props

  const location = useLocation()
  const navigate = useNavigate()

  const [pokemon, setPokemon] = useState({})
  // const [types, setTypes] = useState(false)

  const fetchData = async () => {
    try {
      const response = await axios.get(url)
      setPokemon(response)


    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  const type = () => {
    if (pokemon?.data?.types[1]) {
      return (
        <>
          <img src={getTypes(pokemon?.data?.types[0]?.type?.name)} />
          <img src={getTypes(pokemon?.data?.types[1]?.type?.name)} />
        </>
      )
    }
    return (
      <img src={getTypes(pokemon?.data?.types[0]?.type?.name)} />
    )
  }

  return (

    <CardsContainer>

      <Container color={getColors(pokemon.data?.types[0]?.type?.name)}>

        <div>
          <PokemonNumber>{pokemon.data?.id <= 9 ? <PokemonNumber>#0{pokemon.data?.id}</PokemonNumber> :
            <PokemonNumber>#{pokemon.data?.id}</PokemonNumber>}</PokemonNumber>

          <PokemonName>{pokemon.data?.name.charAt(0).toUpperCase() + pokemon.data?.name.slice(1)}</PokemonName>

          <TypesContainer>
            {/* {pokemon.data?.types?.map((type) => <PokemonType key={type} src={getTypes(type[0])} alt="" />)} */}
            {type()}
          </TypesContainer>

          <Button onClick={() => goToDetails(navigate, pokemon.data?.name)}>Detalhes</Button>
        </div>

        <div>
          <Pokemon src={pokemon.data?.sprites.other['official-artwork'].front_default} alt="image" />

          {location.pathname === "/" ? (
            <CatchButton onClick={() => addToPokedex(pokemon)}>Capturar!</CatchButton>

          ) : (
            <CatchButton onClick={() => removeFromPokedex(pokemon)}>Excluir</CatchButton>
          )}

        </div>

        <Pokebola src={pokebola} alt="pokeball" />
      </Container>
    </CardsContainer>
  );
}