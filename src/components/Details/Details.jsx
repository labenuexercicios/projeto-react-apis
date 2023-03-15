import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { goToHomePage, goToPokedexPage } from "../../Routes/cordinator"
import { Button } from '@chakra-ui/react'
import { Heading } from "@chakra-ui/react"
import {getColors} from '../../utils/returnCardColor'
import {getTypes} from '../../utils/returnType'
import {
  DetailsMain,
  DetailsNav,
  DetaisContent,
  ImgContainer,
  StatusContainer,
  PokemonContainer,
  ProgressBar,
  TypeContainer,
  LeftContainer,
  RightContainer,
  PokemonDetailContainer,
  MovesDetail
} from './Style'

export default function Details() {
  const navigate = useNavigate()
  const url = useParams().name

  const [pokemonDetails, setPokemonDetais] = useState([])
  useEffect(() => {getPokemonData(url)},[])
  

  const getPokemonData = async url => {
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${url}`)
      .then(response => {
        setPokemonDetais(response.data)
      })
      .catch(error => console.log(error))
  }

  // Total de pontos
  let totalPoints = 0;
  pokemonDetails.stats?.map(el => totalPoints += el.base_stat)

  return(
      <DetailsMain>
        <DetailsNav>
          <Button colorScheme='teal' onClick={() => goToHomePage(navigate)}>Ir para Pokemons</Button>
          <Button colorScheme='teal' onClick={() => goToPokedexPage(navigate)}>Ir para Pokedex</Button>
        </DetailsNav>

        <DetaisContent style={{backgroundColor: `${getColors(pokemonDetails.types?.[0].type.name)}`}}>
          <ImgContainer>
            <img src={pokemonDetails.sprites?.front_default} alt="" />
           </ImgContainer> 
           <ImgContainer>
            <img src={pokemonDetails.sprites?.back_default} alt="" />
           </ImgContainer> 
          

          <StatusContainer>
            <Heading size='md'>Base Stats</Heading>

            <table>
              <tbody>

                <tr>
                  <td>Hp</td>
                  <td>
                    <ProgressBar style={{width: `${pokemonDetails.stats?.[0].base_stat * 1.5}px`, backgroundColor: 'darkorange'}}>
                      {pokemonDetails.stats?.[0].base_stat}
                    </ProgressBar></td>
                </tr>
                <tr>
                  <td>Attack</td>
                  <td>
                    <ProgressBar style={{width: `${pokemonDetails.stats?.[1].base_stat * 1.5}px`, backgroundColor: 'darkorange'}}>
                      {pokemonDetails.stats?.[1].base_stat}
                    </ProgressBar></td>
                </tr>
                <tr>
                  <td>Defense</td>
                  <td>
                    <ProgressBar style={{width: `${pokemonDetails.stats?.[2].base_stat * 1.5}px`, backgroundColor: 'darkorange'}}>
                      {pokemonDetails.stats?.[2].base_stat}
                    </ProgressBar></td>
                </tr>
                <tr>
                  <td>Sp. Atk</td>
                  <td>
                    <ProgressBar style={{width: `${pokemonDetails.stats?.[3].base_stat * 1.5}px`, backgroundColor: 'orange'}}>
                      {pokemonDetails.stats?.[3].base_stat}
                    </ProgressBar></td>
                </tr>
                <tr>
                  <td>Sp. Def</td>
                  <td>
                    <ProgressBar style={{width: `${pokemonDetails.stats?.[4].base_stat * 1.5}px`, backgroundColor: 'orange'}}>
                      {pokemonDetails.stats?.[4].base_stat}
                    </ProgressBar></td>
                </tr>
                <tr>
                  <td>Speed</td>
                  <td>
                    <ProgressBar style={{width: `${pokemonDetails.stats?.[5].base_stat * 1.5}px`, backgroundColor: 'darkorange'}}>
                      {pokemonDetails.stats?.[5].base_stat}
                    </ProgressBar></td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>
                    <b>
                      {totalPoints}
                    </b>
                  </td>
                </tr>

              </tbody>
            </table>

          </StatusContainer>
            
          <PokemonContainer>
            <LeftContainer>         
              <Heading size='md'>#{pokemonDetails.id}</Heading>
              <Heading>{pokemonDetails.name}</Heading>

              <TypeContainer>
                {pokemonDetails.types?.map(types => {
                  const type = getTypes(types.type.name)
                  return (
                    <img key={types.type.name} src={type} alt={types.type.name}/>
                  )
                })}
              </TypeContainer>

              <Heading size='md'>Moves:</Heading>

              <PokemonDetailContainer>
                {pokemonDetails.moves?.map(move => <MovesDetail key={move.move.name} >{move.move.name.replace('-', ' ')}</MovesDetail>)}
              </PokemonDetailContainer>
            </LeftContainer>
            
            <RightContainer>
                <img alt='' src={pokemonDetails.sprites?.other["official-artwork"]["front_default"]}></img>
            </RightContainer>

          </PokemonContainer>
        </DetaisContent>
      </DetailsMain>
  )
}