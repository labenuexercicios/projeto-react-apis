import React from "react"
import HeaderPokedex from "../../Components/Headers/HeaderPokedex"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { Container, CardsContainer, Heading, Message } from "./styles"

function Pokedex(props) {

  return (
    <Container>
      <HeaderPokedex activeScreen={props.activeScreen} setActiveScreen={props.setActiveScreen}/>  
      <Heading>Meus Pokémons</Heading>    
      <CardsContainer>                
        {props.pokedex.length === 0 ? <Message>Você ainda não capturou nenhum pokémon!</Message> : props.pokedex.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} deleteFromPokedex={props.deleteFromPokedex}/>
        })}
      </CardsContainer>

    </Container>
  )
}

export default Pokedex