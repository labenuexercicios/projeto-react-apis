import { useContext } from "react"
import { CatchButton, Container, Pokeball, Pokemon, PokemonName, PokemonNumber, PokemonType, TypesContainer } from "./styles"
import pokeball from '../../assets/pokebol.png'
import { cardTypes } from "../../util/ReturnCardType"
import { Link, useNavigate } from "react-router-dom"
import { goToDetailsPage } from "../../routes/coordinator"
import { GlobalContext } from "../../contexts/GlobalContext"
import { getColors } from "../../util/ReturnCardColor"



const PokemonCard = ({pokemon}) => {
  const navigate = useNavigate()

  const context= useContext(GlobalContext)
  const {  addToPokedex, removeFromPokedex , inPokedex}= context.managePokedex
  
 const buttonPokemon =()=>{
 if(inPokedex(pokemon)){
  return  <CatchButton background={"#ff6262"} color={"#fff"} onClick={()=>{removeFromPokedex(pokemon)}}>excluir</CatchButton>

 }else{
  return  <CatchButton background={"#fff"} color={"#000"}  onClick={()=>{addToPokedex(pokemon)}}>Capturar!</CatchButton>
 }

 }
  return (
<Container backColors={getColors(pokemon.types[0])}>
      <div>
        <PokemonNumber>{pokemon.id}</PokemonNumber>
        <PokemonName>{pokemon.name}</PokemonName>
        <TypesContainer>
        {pokemon.types.map((type) => {
                return <PokemonType key={type} src={cardTypes(type)} alt='' />
            })}
        </TypesContainer>
        {/* <Link onClick={() => goToDetailsPage(navigate, {state: pokemon})}>detalhes</Link> */}
        <a href="default.asp"  onClick={(e) => {e.preventDefault();goToDetailsPage(navigate, {state: pokemon})}}>detalhes</a>
      </div>
      <div>
        <Pokemon src={pokemon.sprites.default} alt={pokemon.name}/>
       {buttonPokemon()}
      </div>
      <Pokeball src={pokeball} alt="pokeball" />
    </Container>
  )
}

export default PokemonCard