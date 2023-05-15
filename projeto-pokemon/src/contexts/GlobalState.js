import axios from "axios"
import { useEffect, useState } from "react"
import { GlobalContext } from "./GlobalContext"
import Swal from "sweetalert2"
import { BASE_URL } from "../constants/BASE_URL"


export default function GlobalState(props) {

    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [pokeInfo, setPokeInfo] = useState([])
    const [catchPokemon, setCatchPokemon] = useState([])



    const getAllPokemons = () => {


        axios.get(`${BASE_URL}`)
            .then((response) => {
                setPokemons(response.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const addToPokedex = (pokemon) => {
        const isAlreadyOnPokedex = pokedex.find((pokedexPokemons) =>
            (pokedexPokemons.name) === pokemon.name)
            if (!isAlreadyOnPokedex) {
            const newPokemonPokedex = [...pokedex, pokemon]
            setPokedex(newPokemonPokedex)
            
        }

        Swal.fire({
            title: "Gotcha!",
            text: "O pokémon foi adicionado na pokedex!"
        })

    }

    const removeFromPokedex = (pokeRemove) => {
        const newPokemonPokedex = pokedex.filter(
            (beforeRemove) => beforeRemove.name !== pokeRemove.name
        )

        setPokedex(newPokemonPokedex)
        Swal.fire({
            title: "Ops!",
            text: "O pokémon escapou da pokedex!"
        })
    }

    useEffect(() => {
        getAllPokemons()

    }, [])

    const data = {
        pokemons,
        setPokemons,
        pokedex,
        setPokedex,
        getAllPokemons,
        removeFromPokedex,
        addToPokedex,
        setPokeInfo,
        pokeInfo,
        setCatchPokemon,
        catchPokemon


    }
    return (
        <GlobalContext.Provider value={data}>
            {props.children}
        </GlobalContext.Provider>
    )
}
