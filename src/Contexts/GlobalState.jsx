import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constant/BASE_URL/BASE_URL";
import { GlobalContext } from "./GlobalContext";
import bug from "../assets/images/poke-types/bug.svg";
import dark from "../assets/images/poke-types/dark.svg";
import dragon from "../assets/images/poke-types/dragon.svg";
import electric from "../assets/images/poke-types/electric.svg";
import fairy from "../assets/images/poke-types/fairy.svg";
import fighting from "../assets/images/poke-types/fighting.svg";
import fire from "../assets/images/poke-types/fire.svg";
import flying from "../assets/images/poke-types/flying.svg";
import ghost from "../assets/images/poke-types/ghost.svg";
import grass from "../assets/images/poke-types/grass.svg";
import ground from "../assets/images/poke-types/ground.svg";
import ice from "../assets/images/poke-types/ice.svg";
import normal from "../assets/images/poke-types/normal.svg";
import poison from "../assets/images/poke-types/poison.svg";
import psychic from "../assets/images/poke-types/psychic.svg";
import rock from "../assets/images/poke-types/rock.svg";
import steel from "../assets/images/poke-types/steel.svg";
import water from "../assets/images/poke-types/water.svg";



export default function GlobalState({children}){

    const [pokemonList, setPokemonList] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [isFunctionCatch, setIsFunctionCatch] = useState(false);
    const [pokeNameParams, setPokeNameParams] = useState('');


    useEffect(()=>{
        getAllPokemon() 
        setPokemonDetail()
    }, []);

    
    //Função parar pegar todos os dados de todos os pokemons da API
    const getAllPokemon = async () => {
        try {
            const response = await 
            axios.get(`${BASE_URL}pokemon?limit=81&offset=0`)
            //console.log(response.data) 
            setPokemonList(response.data.results)
        } catch (error) {
            //console.log(error.response)
        }
    };

    useEffect(()=>{
        const pokemonListLocalStorage = JSON.parse(localStorage.getItem('pokemonList'));
        const pokedexLocalStorage = JSON.parse(localStorage.getItem('pokedex'));

        if(pokedexLocalStorage){
           setPokemonList(pokemonListLocalStorage);
            setPokedex(pokedexLocalStorage);
        }
    }, [])

    useEffect(()=>{
        if(pokedex.length>0){
            const pokemonListToString = JSON.stringify(pokemonList);
            const pokedexToString = JSON.stringify(pokedex);
            localStorage.setItem('pokemonList', pokemonListToString);
            localStorage.setItem('pokedex', pokedexToString);
        }else{
            localStorage.removeItem('pokemonList');
            localStorage.removeItem('pokedex');
        }
    }, [pokemonList, pokedex])
 

    //Função para acrescentar pokemons ao array pokedex
    const catchPokemon = (caughtPokemon) => {
        setPokedex([... pokedex, caughtPokemon]);
    };

    //Função parar remover pokemons do array pokedex
    const removePokemon = (pokemonRemove) =>{
        const pokemonInPokedex = pokedex.filter((pokemon) =>{
            return pokemon.name !== pokemonRemove.name
        });
        setPokedex(pokemonInPokedex)
    };

    //Função para renderizar a imagem específica do tipo do pokemon no card
    const getPokeTypeImg =(pokeType) =>{
        if(pokeType){
            switch(pokeType){
                case 'bug':
                    return(<img src={bug}/>)
                    break;
                case 'dark':
                    return(<img src={dark}/>)
                    break;
                case 'dragon':
                    return(<img src={dragon}/>)
                    break;
                case 'electric':
                    return(<img src={electric}/>)
                    break;
                case 'fairy':
                    return(<img src={fairy}/>)
                    break;
                case 'fighting':
                    return(<img src={fighting}/>)
                    break;
                case 'fire':
                    return(<img src={fire}/>)
                    break;
                case 'flying':
                    return(<img src={flying}/>)
                    break;
                case 'ghost':
                    return(<img src={ghost}/>)
                    break;
                case 'grass':
                    return(<img src={grass}/>)
                    break;
                case 'ground':
                    return(<img src={ground}/>)
                    break;
                case 'ice':
                    return(<img src={ice}/>)
                    break;
                case 'normal':
                    return(<img src={normal}/>)
                    break;
                case 'poison':
                    return(<img src={poison}/>)
                    break;
                case 'psychic':
                    return(<img src={psychic}/>)
                    break;
                case 'rock':
                    return(<img src={rock}/>)
                    break;
                case 'steel':
                    return(<img src={steel}/>)
                    break;
                case 'water':
                    return(<img src={water}/>)
                    break;
            };
        };
    };

    const data ={
        pokemonList,
        pokedex,
        catchPokemon,
        removePokemon,
        setPokemonDetail,
        pokemonDetail,
        getPokeTypeImg,
        openModal,
        setOpenModal,
        isFunctionCatch, 
        setIsFunctionCatch,
        pokeNameParams,
        setPokeNameParams,
        
    };

    return(
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    )
}