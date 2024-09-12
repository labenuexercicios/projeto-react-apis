import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import PokeCard from '../Cards/PokeCard'
import { Background, MapContainer, ModalContainer, Modal, Modal2, CloseButton, DarkContainer } from './HomeStyled'
import { GlobalContext } from '../../context/GlobalContext'
import { BASE_URL } from '../../constants/url'
import { Heading } from '@chakra-ui/react'

export const Context = createContext()

const Home = () => {

    const [modal, setModal] = useState('none')
    const closeModal = () => {
        setModal('none')
    }

    const { myPokemon, setMyPokemon } = useContext(GlobalContext)
    const capturePokemon = (id) => {
        let list = [...myPokemon]
        list.push(id)
        setMyPokemon([...new Set(list)])
        setModal('block')
    }

    const [pokemon, setPokemon] = useState([]);
    const [pokemonList, setPokemonList] = useState([])

    async function getPokemonUrl(pokeList) {
        const list = [...pokemon]
        for (let i = 0; i < pokeList.length; i++) {
            const result = await axios.get(pokeList[i].url)
            const resultData = result.data
            list.push(resultData)
        }
        setPokemon(list)
    }

    const getPokemon = async () => {
        axios
            .get(BASE_URL)
            .then((response) => {
                setPokemonList(response.data.results)
                getPokemonUrl(response.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const verifyPokemon = (id) => {
        for (let index = 0; index < myPokemon.length; index++) {
            if (myPokemon[index] === id) {
                return true
            }
        }
        return false
    }

    useEffect(() => {
        getPokemon()
    }, [])

    const pokemap = pokemon.map(index => {
            return <PokeCard capturePokemon={capturePokemon} pokemon={index} key={index.id} verifyPokemon={verifyPokemon(index.id)} />
        })

    return (
        <Background>
                <Heading 
                textAlign="center"
                size='4xl'            
                >Lista dos Pokémons
                </Heading>
            <MapContainer>
                {pokemap}
            </MapContainer>
            <ModalContainer modal={modal}>
                <DarkContainer>
                    <Modal>CAPTURADO</Modal>
                    <Modal2>O Pokémon foi adicionado à sua Pokedéx</Modal2>
                    <CloseButton onClick={closeModal}>Fechar</CloseButton>
                </DarkContainer>
            </ModalContainer>
        </Background>
    )
}

export default Home
