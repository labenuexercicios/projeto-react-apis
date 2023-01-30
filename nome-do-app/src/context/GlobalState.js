import React, { useState, useEffect } from 'react'
import { GlobalContext } from './GlobalContext'
import axios from "axios"

const GlobalState = ({ children }) => {
    const [pokemons, setPokemons] = useState([])
    const [exibir, setExibir] = useState(false)
    const [pokedex, setPokedex] = useState([])
    const [pokemonDetalhes, setPokemonDetalhes] = useState([])
    const [exibirBtnRemover, setExibirBtnRemover] = useState(false)
    const [exibirBtnRemoverHeader, setExibirBtnRemoverHeader] = useState(false)

    const exibirBtnRemoverHeaderFunction = () => {
        setExibirBtnRemoverHeader(true)
    }
    const notExibirBtnRemoverHeaderFunction = () => {
        setExibirBtnRemoverHeader(false)
    }


    const detailsPokemon = (pokemonId) => {
        const pokemon = pokemons.find((pk) => pk.id === pokemonId.id)
        setPokemonDetalhes(pokemon)
    }



    const addPokedex = (pokemonId) => {
        const copiaPokedex = [...pokedex]
        const pokemon = copiaPokedex.find((pk) => pk.id === pokemonId.id)
        !pokemon ? copiaPokedex.push(pokemonId) : alert("Pokemom ja incluido")
        setPokedex(copiaPokedex)
    }

    const removePokedex = (pokemonId) => {
        const copiaPokedex = [...pokedex]
        console.log(copiaPokedex.length)
        const novoArray = copiaPokedex.filter((pk) => {
            return pokemonId.id !== pk.id
        })
        setPokedex(novoArray)
    }

    const getPokemons = async () => {
        const copiaPokemons = []
        try {
            const response = await axios.get(`
            https://pokeapi.co/api/v2/pokemon?limit=21&offset=0
            `)
            const poke = response.data.results
            try {
                for (let key in poke) {
                    let pokemom = await axios.get(poke[key].url)
                    copiaPokemons.push(pokemom.data)
                }
                setPokemons(copiaPokemons)
            } catch (error) {
                console.log(error)
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPokemons()
    }, [])

    const exibirBtn = () => {
        setExibir(true)
    }

    const ocultarBtn = () => {
        setExibir(false)
    }


    const data = {
        pokemons,
        exibir,
        exibirBtn,
        ocultarBtn,
        addPokedex,
        pokedex,
        removePokedex,
        detailsPokemon,
        pokemonDetalhes,
        exibirBtnRemover,
        exibirBtnRemoverHeaderFunction,
        notExibirBtnRemoverHeaderFunction,
        exibirBtnRemoverHeader
    }
    return (
        <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
    )
}

export default GlobalState
