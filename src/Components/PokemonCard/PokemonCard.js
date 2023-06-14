import axios from 'axios';
import {
  CardsContainer,
  Container,
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

        <div className='left'>
          <p>{pokemon.data?.id <= 9 ? <p>#0{pokemon.data?.id}</p> :
            <p>#{pokemon.data?.id}</p>}</p>

          <h1 className='pokemonName'>{pokemon.data?.name.charAt(0).toUpperCase() + pokemon.data?.name.slice(1)}</h1>

          <div className='types'>
            {type()}
          </div>

          <button onClick={() => goToDetails(navigate, pokemon.data?.name)}>Detalhes</button>
        </div>

        <div className='right'>
          <img className='pokemon' src={pokemon.data?.sprites.other['official-artwork'].front_default} alt="image" />

          {location.pathname === "/" ? (
            <CatchButton onClick={() => addToPokedex(pokemon)}>Capturar!</CatchButton>

          ) : (
            <CatchButton onClick={() => removeFromPokedex(pokemon)}>Excluir</CatchButton>
          )}

          <img src={pokebola} alt="pokeball"></img>
        </div>

      </Container>
    </CardsContainer>
  );
}