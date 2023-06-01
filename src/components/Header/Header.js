import { useLocation, useNavigate } from "react-router-dom";
import {  goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { ButtonAdd, Container } from "./styled";
import { PokemonLogo,Button,P,ButtonExt } from "./styled";
import logo from "../../assets/image 1PokemonLogo.svg"
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import React from "react";
function Header() {
  const context = useContext(GlobalContext);
  // hook para saber nosso path atual
  const location = useLocation();
  // hook para redirecionar
  const navigate = useNavigate();

const {pokemonDetailed, pokemonExistsInPokedex, addToPokedex, removeFromPokedex,verifyPokemon, setOpenModal} = context




  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
         <>
            <Button onClick={() => goToPokedexPage(navigate)}>
              Pokédex
            </Button>
            <PokemonLogo src={logo} alt="" />
            </>
            
        );
      case "/pokedex":
        return (
          <>
         <P>
          <p typeof="submit" onClick={() => goToHomePage(navigate)}>
           Todos Pokémons
        </p>
        </P>
            <PokemonLogo src={logo} alt="" />
          </>
          
        );
        case `/pokemon/${pokemonDetailed.name}`:
          return (
            <>
            <P>
         <p typeof="submit" onClick={() => goToHomePage(navigate)}>
          Todos Pokémons
       </p>
       </P>
           { (verifyPokemon(pokemonDetailed), !pokemonExistsInPokedex) ?( 
          <ButtonExt  onClick={() =>  {setOpenModal(true); removeFromPokedex(pokemonDetailed)}}>
             excluir do pokedex 
           </ButtonExt>
            ):
           (<ButtonAdd onClick={() =>  {setOpenModal(true); addToPokedex(pokemonDetailed)}}>
             Capturar
           </ButtonAdd>)}
           <PokemonLogo src={logo} alt="" />
           </>
            
          );
      default:
        return (
            <>
         
            </>
        );
    }
  };

  return <Container>{renderHeader()}</Container>;
}

export default Header;
