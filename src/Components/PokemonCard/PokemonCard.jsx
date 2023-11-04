import { useContext, useEffect, useState } from "react";
import{ PokemonCardContainer, InfoContainer, DataContainer, PokeTypeContainer, PokeId, PokeName, Image, ButtonContainer, CatchButton, DeleteButton, DetailsLink } from "./PokemonCardStyle";
import axios from "axios";
import { goToDetails } from "../../Routes/coordinator";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constant/BASE_URL/BASE_URL";
import { GlobalContext } from "../../Contexts/GlobalContext";

export const PokemonCard = ({ pokemon, setOpenModal, setIsFunctionCatch }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const context = useContext(GlobalContext);

    const { removePokemon, catchPokemon, getPokeTypeImg, setPokemonDetail } = context;

    const [pokeImg, setPokeImg] = useState('');
    const [pokeId, setPokeId] = useState('');
    const [poketypes, setPokeTypes] = useState([]);

    useEffect(() => {
        getPokemonData()
    }, [pokemon]);
    

   //função para pegar os dados de um pokemon específico da API
    const getPokemonData = async () => {
        try {
            const response = await
            axios.get(`${BASE_URL}pokemon/${pokemon.name}`);
            setPokeId(response.data.id);
            setPokeImg(response.data.sprites.other['official-artwork'].front_default);
            //setPokeImg(response.data.sprites.other.dream_world.front_default);
            setPokeTypes(response.data.types);

        } catch (error) {
            //console.log(error.response)
        }
    }; 
 
    //função para mapear os tipos de cada pokemon, para pegar os dois primeiros
    const pokeTypeList = poketypes.map((typeObjt) =>{
        return( typeObjt.type.name )
    });
    
    //função para mostrar o id do pokemon conforme o formato requerido
    const id = pokeId.toString().length === 1? `0${pokeId.toString()}` : pokeId.toString();
   
    //função para mostrar o botão específico da página, podendo ser o de Capturar ou Excluir
    const selectButton = () => {
        if(location.pathname === '/'){
            return(
                <CatchButton onClick={()=> {
                    catchPokemon(pokemon)
                    setOpenModal(true)
                    setIsFunctionCatch(true)
                }}>Capturar!</CatchButton>
            )
        }else if(location.pathname === '/pokedex'){
            return(
                <DeleteButton onClick={()=> {
                    removePokemon(pokemon)
                    setOpenModal(true)
                    setIsFunctionCatch(false)
                }}>Excluir</DeleteButton>
            )
        }
    };

    const onClickDetails = () => {
        setPokemonDetail(pokemon) //esse vai para o array que vai ser usado nas funções de capturar e retirar da pokedex
        goToDetails(navigate, pokemon.name) 
    };

    return(
        <PokemonCardContainer pokeTypeColor={`${pokeTypeList[0]}`}>
            <DataContainer>
                <InfoContainer>
                    <PokeId>#{id}</PokeId>
                    <PokeName>{pokemon.name.charAt(0).toLocaleUpperCase() + pokemon.name.slice(1)}</PokeName>
                    <PokeTypeContainer>
                        {pokeTypeList[0] && getPokeTypeImg(pokeTypeList[0])}
                        {pokeTypeList[0] && getPokeTypeImg(pokeTypeList[1])}
                    </PokeTypeContainer>
                </InfoContainer> 
                <Image src= {pokeImg} alt="pokemon_image"/>
            </DataContainer>

            <ButtonContainer>
                <DetailsLink 
                    onClick={()=> {
                        onClickDetails()
                    }}
                >
                    Detalhes
                </DetailsLink>
                {selectButton()}
            </ButtonContainer>
        </PokemonCardContainer>
    )
}

export default PokemonCard