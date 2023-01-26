import React, { useState, useEffect } from 'react'
import { GlobalContext } from './GlobalContext'
import axios from "axios"

const GlobalState = ({ children }) => {
    const [pokemons, setPokemons] = useState([])
    const [exibir, setExibir] = useState(false)

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
        setPokemons,
        exibir,
        exibirBtn,
        ocultarBtn
    }
    return (
        <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
    )
}

export default GlobalState
