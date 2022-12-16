import React from "react"
import HeaderPokedex from "../../Components/Headers/HeaderPokedex"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { Container, CardsContainer } from "./styles"

function Pokedex(props) {

  console.log(props.pokedex)

  return (
    <Container>
      <HeaderPokedex/>
      <CardsContainer>
        {props.pokedex.map((pokemon) => {
          return <PokemonCard pokemon={pokemon}/>
        })}
      </CardsContainer>

    </Container>
  )
}

export default Pokedex