import {Container}  from "../Header/Styled";
import logo from "../../assets/logo.png";
import React from "react";
import {useNavigate,useLocation} from "react-router-dom";
import { gotopokedexPage,gotohomePage } from "../../routes/coordinator";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import {BotaovoltarHomebutton,Botaoexcluir} from "./Styled";
import seta from "../../assets/seta.png";
import { useState } from "react";
function Header (){

    const location = useLocation();

    const navigate = useNavigate();

    const params = useParams();

 
    const [pokedex, setPokedex] = useState([])

    

    const removeFromPokedex = (pokemonToRemove) => {
      const newPokedex = pokedex.filter((pokemonInPokedex) => pokemonInPokedex.id !== pokemonToRemove.id)
      window.localStorage.removeItem('pokedex')
      setPokedex(newPokedex)
    }

    const renderizarHeader = () => {
        switch (location.pathname) {
          case "/":
            return (
              <>
                <button onClick={() => gotopokedexPage(navigate)}>
                  Pokedex
                </button>
              </>
            );
          case "/pokedex":
            return (
              <>
                <BotaovoltarHomebutton onClick={() => gotohomePage(navigate)}>
                <img src={seta} ></img> Todos Pokémons
                </BotaovoltarHomebutton>
              </>
            );
      
case `/detalhes/${params.id}`:
            return (
              <>
                <BotaovoltarHomebutton onClick={() => gotohomePage(navigate)}>
                <img src={seta} ></img> Todos Pokémons
                </BotaovoltarHomebutton>
{/* 
                <Botaoexcluir onClick={() => removeFromPokedex()} >
                  Excluir da Pokedex
                </Botaoexcluir>
                 */}
              </>
            );
          
        }
      };

    return(
        
        <Container>
            <div>
            <img src={logo} ></img>    
            </div>
            {renderizarHeader()}
        </Container>
        
                 
    )

}

export default Header;