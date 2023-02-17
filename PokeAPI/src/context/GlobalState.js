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


    const addPokedex = (pokemonId) => {
        //FUNÇÃO QUE ADICIONA POKEMON NA POKEDEX
        const copiaPokedex = [...pokedex]
        const pokemon = copiaPokedex.find((pk) => pk.id === pokemonId.id)
        !pokemon ? copiaPokedex.push(pokemonId) : alert("Pokemom ja incluido")
        setPokedex(copiaPokedex)
    }

    const removePokedex = (pokemonId) => {
        // FUNNÇÃO QUE REMOVE POKEMON NA POKEDEX
        const novoArray = pokedex.filter((pk) => {
            return pokemonId.id !== pk.id
        })
        setPokedex(novoArray)
    }

    const getPokemons = async () => {
        // FUNÇÃO QUE PEGA OS DADOS DE TODOS OS POKEMONS
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
