import { useEffect, useState, React } from "react"
import axios from "axios"
import { CardPokemon } from "../../components/CardPokemon/CardPokemon"
import { AllPokemons, HomePageContainer } from "./HomePageStyled"
import { HeaderContainer } from "../../components/Header/HeaderStyled"

export const HomePage = () =>{
    const [pokemons, setPokemons ] = useState([])

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=51&offset=0")
        .then((response) =>{
            setPokemons(response.data.results)
            console.log(response.data.results);
            console.log(pokemons);
        })
        .catch((error) =>{
            console.log(error);
        })
    }, [])
    
    return(
    
        <HomePageContainer>
        <h1>Todos os Pokémons</h1>
        <AllPokemons>
        {pokemons.map((pokemon) =>{
           console.log(pokemon);
           return <CardPokemon pokemon={pokemon} key={pokemon.name}/>
        })}
        </AllPokemons>
        </HomePageContainer>
    )
}