import React, { useState, useEffect } from 'react'
import { GlobalContext } from './GlobalContext'
import axios from "axios"

const GlobalState = ({ children }) => {
    const [pokemons, setPokemons] = useState([])
    const [exibir, setExibir] = useState(false)
    const [pokedex, setPokedex] = useState([])
    const [pokemonDetalhes, setPokemonDetalhes] = useState({})
    const [exibirBtnRemoverHeader, setExibirBtnRemoverHeader] = useState(false)
    const [buttonAdd, setButtonAdd] = useState()
    const [showGotcha, setShowGotcha] = useState(false)
    const [showRemove, setShowRemove] = useState(false)

    const showCart = () => {
        setTimeout(function () {
        }, 3000)
    }


    const getPokemonDetails = async (id) => {
        //FUNÇÃO QUE PEGA UM POKEMON PARA RENDERIZAR NA PAGINA DE DETALHES
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            setPokemonDetalhes(response.data)
        } catch (error) {

        }
    }

    const exibirBtnRemoverHeaderFunction = (id) => {
        // FUNÇÃO QUE FAZ O BOTÃO DE VOLTAR SER EXIBIDO
        setExibirBtnRemoverHeader(true)
        const pokeInPokedex = pokedex.find(pk => pk.id === id)
        pokeInPokedex === undefined ? (setButtonAdd(true)) : (setButtonAdd(false))
    }


    const notExibirBtnRemoverHeaderFunction = (id) => {
        // FUNÇÃO QUE FAZ O BOTÃO DE VOLTAR NÃO SER EXIBIDO
        setExibirBtnRemoverHeader(false)
    }


    const addPokedex = (pokemon) => {
        //FUNÇÃO QUE ADICIONA POKEMON NA POKEDEX
        if (pokedex.some((p) => p.id === pokemon.id)) {
            alert("Pokemon já incluído")
        } else {
            setPokedex((pokedex) => [...pokedex, pokemon])
        }
    }

    const removePokedex = (pokemon) => {
        // FUNÇÃO QUE REMOVE POKEMON NA POKEDEX
        setPokedex((pokedex) => pokedex.filter((p) => p.id !== pokemon.id))
    }

    const getPokemons = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=21&offset=0')
            const pokeUrls = response.data.results.map((result) => result.url)
            const pokemons = await Promise.all(pokeUrls.map((url) => axios.get(url)))
            setPokemons(pokemons.map((pokemon) => pokemon.data))
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
        pokemonDetalhes,
        exibirBtnRemoverHeaderFunction,
        notExibirBtnRemoverHeaderFunction,
        exibirBtnRemoverHeader,
        buttonAdd,
        getPokemonDetails,
        showCart,
        showGotcha,
        setShowGotcha,
        showRemove,
        setShowRemove
    }
    return (
        <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
    )
}

export default GlobalState
