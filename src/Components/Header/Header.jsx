import { HeaderContainer, Image, Button, NavLink, NavLinkPoke, ArrowIcon, DeleteButton, LinksContainer } from "./HeaderStyle";
import headerLogo from "../../assets/images/pokemons-logo-header.svg";
import arrowSymbolBackward from "../../assets/images/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.svg";
import arrowSymbolFoward from "../../assets/images/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.svg"
import {goToPokemonList, goToPokedex, goBack} from "../../Routes/coordinator";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";


export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const context = useContext(GlobalContext);
    
    const { removePokemon, catchPokemon, pokedex, setOpenModal, setIsFunctionCatch, pokemonDetail, pokeNameParams} = context;


    const chooseButton = () => {

        const pokemonInPokedex = pokedex.find((pokeObj)=> pokeObj.name == pokeNameParams);
           
        return (pokemonInPokedex ? 
            <DeleteButton onClick={()=>{
                removePokemon(pokemonDetail)
                setOpenModal(true)
                setIsFunctionCatch(false)
            }}>Excluir da Pokédex</DeleteButton> : 
            <Button onClick={()=>{
                catchPokemon(pokemonDetail)
                setOpenModal(true)
                setIsFunctionCatch(true)
            }}>Capturar!</Button>
        )  
    };

    const chooseHeader = () => {
        if(location.pathname==='/'){
            return(
                <HeaderContainer>
                    <Image src={headerLogo} />
                    <Button onClick={()=> goToPokedex(navigate)}>Pokédex</Button>
                </HeaderContainer>
            );
        }else if(location.pathname==='/pokedex'){
            return(
                <HeaderContainer>
                    <NavLink onClick={() => goToPokemonList(navigate)}>
                        <ArrowIcon src={arrowSymbolBackward}/>
                        Todos Pokémons
                    </NavLink>
                    <Image src={headerLogo} />
                   
                </HeaderContainer>
            );
        }else{
            return(
                <HeaderContainer>
                    <LinksContainer>
                        <NavLink onClick={() => goBack(navigate)}>
                            <ArrowIcon src={arrowSymbolBackward}/>
                            Todos Pokémons
                        </NavLink>
                        <NavLinkPoke onClick={() => goToPokedex(navigate)}>
                        Pokedex
                        <ArrowIcon src={arrowSymbolFoward}/>
                        </NavLinkPoke>
                    </LinksContainer>
                    <Image src={headerLogo} />
                    { chooseButton() }
                </HeaderContainer>
            );
        }
    }
   
    return(
        <>
            {chooseHeader()}
        </>
    )
}

export default Header