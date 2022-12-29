import React from "react";
import { ContainerHeader } from "./Header.styled";
import {useLocation, useNavigate} from "react-router-dom"
import { goToHomePage, goToPokedexPage } from "../../router/coordinator";
import { Link, Text } from "@chakra-ui/react";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const Header = () =>{
    const navigate = useNavigate()
    const location=useLocation()
    const context=useContext(GlobalContext)
    const{callBackPokemonHome,callPlace, capturePokemon,pokemonShow,setCallPlace,deletePokedex, pokemonDetails}= context 
    const params=useParams()

    return (
        <ContainerHeader>
            {location.pathname === "/"?
            <>
            <img src="../imgs/pokemon-header.svg" ></img>
            <button  onClick={()=>goToPokedexPage(navigate)}>Pokédex</button>
            </>
            :location.pathname === "/Pokedex"?
            <>
            <Link
                marginLeft={"20px"}
                fontFamily={'Poppins'}
                color={'#1A1A1A'}
                fontSize={"24px"}
                onClick={()=>goToHomePage(navigate)}
            > <Text as={'u'}>{"< Todos os Pokémons"}</Text></Link>
            <img src="../imgs/pokemon-header.svg" ></img>
            <button className="deletePokedex"  onClick={deletePokedex}>Excluir Pokédex</button>
            </>
            :!callPlace?<> 
            {/* Se a chamada de detalhes foi originada da Home o Pokemon pode ser incluido na pokedex, caso seja chamado da pokedex pode ser excluido da pokedex */}
            <Link
                marginLeft={"20px"}
                fontFamily={'Poppins'}
                
                fontSize={"24px"}
                onClick={()=>goToHomePage(navigate)}
            > <Text>{"<Todos os Pokémons"}</Text></Link>
            <img src="../imgs/pokemon-header.svg" ></img>
            
            <button className="btnDelete" onClick={()=>{
                callBackPokemonHome(params);
                setCallPlace(true)
                
                }}
                >Excluir da Pokédex</button>
            </>:
            <>
            <Link
                marginLeft={"20px"}
                fontFamily={'Poppins'}
                
                fontSize={"24px"}
                onClick={()=>goToHomePage(navigate)}
            > <Text>{"<Todos os Pokémons"}</Text></Link>
            <img src="../imgs/pokemon-header.svg" ></img>
            
            <button className="btnAddPokemon" onClick={()=>{
                capturePokemon(pokemonDetails); //a constante pokemonshow armazena o pokemon que esta sendo exibido portanto é utilizada para adicionar pokemon
                setCallPlace(false)}
            }
                >CapturePokemon</button>
            </>
            
        }
        </ContainerHeader>
    )
}

export default Header;