import { Button, Link } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { HeaderStyle } from "./HeaderStyle";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import PokeLogo from "../../assets/PokeLogo.png"


export function Header(props) {

    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams()
    const context = useContext(GlobalContext)
    const {pokemon} = props
    const {addToPokedex, removeFromPokedex, pokedex} = context
    const [pokemonFound, setPokemonFound] = useState()
    

    function findPokemon(){
      if(location.pathname === `/details/${params.id}`){
        const result = pokedex.find((pokemonToFind) => Number(pokemonToFind.id) === Number(params.id))
        if(result){
          setPokemonFound(true)
        }else{
          setPokemonFound(false)
        }
      }
    }
    
      useEffect(() => {
        findPokemon()
      }, [])
    


    const rightHeader = () => {
      switch (location.pathname) {
        case "/":
          return (
            <Button
              colorScheme="blue"
              width="287px"
              height="74px"
              fontSize="24px"
              lineHeight="36px"
              onClick={() => goToPokedexPage(navigate)}
            >
              Pokédex
            </Button>
          );
  
        case "/pokedex":
          return <></>;
  
        case `/details/${params.id}`:
          return (
            <>
            {pokemonFound ?
            
            <Button colorScheme="red" width="226px" height="57px" fontSize="20px" onClick={() => removeFromPokedex(pokemon)}>
              Excluir da Pokédex
            </Button> :
            <Button colorScheme="blue" width="226px" height="57px" fontSize="20px" onClick={() => addToPokedex(pokemon)}>
            Adicionar a Pokédex
          </Button>
      }
  
            </>
          );
  
        default:
      }
    };
    

      const leftHeader = () => {
        switch (location.pathname) {
          case "/":
            return <></>;
    
          case "/pokedex":
            return (
              <Link
                href="/"
                textDecoration="underline"
                fontSize="24px"
                lineHeight="36px"
              >
                <ChevronLeftIcon/>
                Todos Pokemons
              </Link>
            );
          case `/details/${params.id}`:
            return (
              <Link
                href="/"
                textDecoration="underline"
                fontSize="24px"
                lineHeight="36px"
              >
                <ChevronLeftIcon />
                Todos Pokemóns
              </Link>
            );
          default:
        }
      };


    
    return ( 

        <>
       
        
        <HeaderStyle>
        <div className="header-div">
        {leftHeader()}
      </div>
      <div className="header-div">
        <img src={PokeLogo} alt="Logo" />
      </div>
      <div className="header-div">
        {rightHeader()}
      </div>
        </HeaderStyle>

        
        </>
     );
}
