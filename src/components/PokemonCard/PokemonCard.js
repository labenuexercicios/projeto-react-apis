import { ButtonDetails, CatchButton, ContainerCard, Pokeball, PokemonImg, PokemonName, PokemonNumber, TypeImg, TypesContainer } from "./PokemonCardStyled";
import pokeball from '../../imgs/pokeball.png';
import { useState,useEffect } from "react";
import axios from "axios";
import { getColors } from "../../utils/ReturnCardColor";
import { getType } from "../../utils/ReturnType";
import { goToPokemonDetails } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";

export default function PokemonCard(props){
    const [pokemon,setPokemon] = useState({});
    const navigate = useNavigate();
    
    let pokemonUrl = props.pokemon.url
    
    const pegaPokemon = async () => {
        const response = await axios.get(pokemonUrl)
                setPokemon(response.data)
    }
    
    useEffect(() => { pegaPokemon() }, [])


    let pokemonName=""

    if(pokemon.name){
        pokemonName=pokemon.name
    }

    
    const primeiraLetraMaiuscula = (nome) =>{
        return nome.charAt(0).toUpperCase()+nome.slice(1);
    }

    
    let pokemonId = 0

    if(pokemon.id){
       pokemonId=pokemon.id
    }

    let pokemonTypes= [];
    let pokemonTypesNames= [];

    let color = "";
    let temp="";
    if(pokemon.types){
        pokemonTypes=pokemon.types
        color = getColors(pokemonTypes[0].type.name)

        for(let i=0;i<pokemonTypes.length;i++){
            temp = pokemonTypes[i].type.name
            pokemonTypesNames.push(temp);
        }
    }


     
    
    // const getPokemonNumber = (id)=>{
    //     let baseNumberString="0"
    //     if(pokemon.id>=10){
    //         baseNumberString=""
    //     }

    //     let pokeNumber = baseNumberString+id

    //     return pokeNumber;
    // }

    const getImgSource = (id)=>{
        let baseNumberString = "00"
        if(id>=10){
            baseNumberString = "0"
        }
        let convertidoString = id.toString();

        let imgSource = baseNumberString+convertidoString
        return imgSource
    }

    //     let source = baseNumberString + id


    //     return `https://www.serebii.net/swordshield/pokemon/${source}.png`;
    // }

    // let imgSource=getImgSource(idConvertida)
    // let pokemonNumber=getPokemonNumber(idConvertida)

    if(props.pokemon){
    return(
        <ContainerCard color={color}>
        <PokemonNumber>#{pokemon.id}</PokemonNumber>
        <PokemonName>{primeiraLetraMaiuscula(pokemonName)}</PokemonName>
        <TypesContainer>
            {pokemonTypesNames.map((type)=>{
                return <TypeImg src={getType(type)} />
            })}
        </TypesContainer>
        <ButtonDetails onClick={()=>goToPokemonDetails(navigate,pokemonName)}>Detalhes</ButtonDetails>
        <CatchButton onClick={()=>props.addToPokedex(props.pokemon)}>Capturar!</CatchButton>
        <PokemonImg src={`https://www.serebii.net/swordshield/pokemon/${getImgSource(pokemonId)}.png`}/>
        <Pokeball src={pokeball}/>
        </ContainerCard>
    )}else{
        <h1>Carregando pokemons</h1>
    }
}