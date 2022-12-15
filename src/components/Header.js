import React from "react";
import { Flex, Button } from "@chakra-ui/react"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {ButtonPokedex, ButtonTodosPokemonsDetalhes, ButtonExcluir} from "../components/header.styled"
import {goToHomePage, goToPokedexPage} from "../routes/coordinators"
import imgPokemonHeader from "../imagens/img-pokemon-header.png"



const HeaderStyled = styled.div`
height: 160px;
width:95vw;
margin: 0 auto;
display: flex;
justify-content:space-between;
align-items: center;
div{
  width: 20%;
  display: flex;
  justify-content:center;
 
}


h1{
/* position: absolute; */
/* width: 307px;
height: 113px; */
/* left: 566px; */
/* top: 21px; */
font-size:32px;
}


`
const Header = (props) => {

  const navigate = useNavigate()

  const pokedex = () =>{
    goToPokedexPage(navigate)
  }

  const homePage = () =>{
    goToHomePage(navigate)
  }
  console.log(pokedex)

  const {isHomePage, isDetalhes, isPokedex} = props
  
  return (
    <HeaderStyled>
      {/* <Flex bg="white" justifyContent={"end" } alignItems={"center"}      > */}
      
      <div>{isPokedex && <ButtonTodosPokemonsDetalhes onClick={homePage}>Todos os Pokemons</ButtonTodosPokemonsDetalhes>}</div>
      {/* <div><h1>Pokemon</h1></div> */}
      <div> <img className='imgMoves' src={imgPokemonHeader} /></div>
      <div>
      {isHomePage && <ButtonPokedex onClick={pokedex}>Pokedéx</ButtonPokedex>}
        {isDetalhes && <ButtonExcluir > excluir da pokedéx </ButtonExcluir>}      
      </div>

      {/* para os botões ir p essas paginas */}     
      {/* </Flex> */}
      
    </HeaderStyled>
  )
}
export default Header