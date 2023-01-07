import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import { Container, Image, Stats, Moves, Selection, Main, Pokemon, Pokebola } from './DetailsPageStyle'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import { getTypes } from '../../utils/PokemonType'
import pokebola from '../../assets/images/pokebola.png'
import { getColors } from '../../utils/CardColor'
import { Progress } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

const DetailsPage = () => {

  const params = useParams()
  const navigate = useNavigate()

  const [pokemonDetails, setPokemonDetails] = useState({})

  const getPokemon = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${params.pokemonName}`)
      setPokemonDetails(response)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPokemon()
    console.log(params)
  }, [])

  const type = () => {
    if (pokemonDetails?.data?.types[1]) {
      return (
        <>
          <img src={getTypes(pokemonDetails?.data?.types[0]?.type?.name)} />
          <img src={getTypes(pokemonDetails?.data?.types[1]?.type?.name)} />
        </>
      )
    }
    return (
      <img src={getTypes(pokemonDetails?.data?.types[0]?.type?.name)} />
    )
  }

  let totalValue = 0

  return (
    <>
      <Header />
      <ChakraProvider>

        <Main>
          <Selection>
            <div>Detalhes</div>
          </Selection>

          <Container color={getColors(pokemonDetails.data?.types[0]?.type?.name)}>

            <Pokebola src={pokebola} alt="pokeball" />
            <img className='img-front' src={pokemonDetails.data?.sprites?.front_default}></img>
            <img className='img-back' src={pokemonDetails.data?.sprites?.back_default}></img>

            <Stats>
              <div className='base-stats'>Base stats</div>
              {pokemonDetails.data?.stats?.map((stats) => {
                { totalValue += stats.base_stat }

                return (
                  <div className='organization'>
                    <div className='stats-names'>{stats.stat.name.charAt(0).toUpperCase() + stats.stat.name.slice(1)}</div>
                    <div className='stats-value'>{stats.base_stat}</div>
                    <div className='progress'>
                      <Progress width={'120px'} colorScheme={stats.base_stat < 50 ? 'orange' : stats.base_stat < 80 ? 'yellow'
                        : 'green'} size='md' value={stats.base_stat}
                      />
                    </div>
                  </div>
                )
              })}
              <div className='total-value'>
                <text>Total:</text>
                <text>{totalValue}</text>
              </div>
            </Stats>

            <Moves>
              <div className='informations-id'>
                {pokemonDetails.data?.id <= 9 ? <div>#0{pokemonDetails.data?.id}</div> : <div>#{pokemonDetails.data?.id}</div>}</div>
              <div className='informations-name'>{pokemonDetails.data?.name.charAt(0).toUpperCase() + pokemonDetails.data?.name.slice(1)}</div>
              <div className='informations-type'>{type()}</div>
              <div className='background'>
                <text className='text'>Moves:</text>
                {pokemonDetails.data?.moves?.filter((mov, index) => index <= 3).map((moves) => {
                  return (
                    <label className='group'>{moves.move.name.charAt(0).toUpperCase() + moves.move.name.slice(1)}</label>
                  )
                })}
              </div>
            </Moves>

            <Image>
              <Pokemon src={pokemonDetails.data?.sprites.other['official-artwork'].front_default} alt="image" />
            </Image>

          </Container>
        </Main>
      </ChakraProvider>
    </>
  )
}

export default DetailsPage