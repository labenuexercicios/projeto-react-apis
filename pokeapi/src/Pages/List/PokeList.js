import { useEffect, useState } from 'react'
import { Header } from '../../Components/Header/Header'
import { PokemonCard } from '../../Components/PokemonCard/PokemonCard'
import axios from 'axios'
import { getColors } from '../../utils/TypeColor'
import { getTypes } from '../../utils/PokeType'
import { Containerlist, Displaynone } from './styledList'
import { PokeDetails } from '../Details/PokeDetails'

export const PokeList = (props) => {
    const cardColor = getColors
    const pokeType = getTypes
    const [pokemons, setPokemons] = useState([])
    
    useEffect(() => {
        getPokemons()
    }, [])
    
    const getPokemons = () => {
        const endpoints = [];
        for (let i = 1; i < 5; i++) {
          endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((responses) => {
          const pokemonsData = responses.map((response) => response.data);
          setPokemons(pokemonsData);
        });
      };
    
    return (
        <div>
            <Header />
            <Containerlist>
                {pokemons.length ? (
                    pokemons.map((pokemons) => {
                        return (
                            <PokemonCard
                                pokemons={pokemons}
                                cardColor={cardColor}
                                getTypes={pokeType}
                              
                            />
                        )
                    })
                ) : (
                    <div>Loading...</div>
                )}
            </Containerlist>
            <Displaynone>
                <PokeDetails pokemons={pokemons} cardColor={cardColor} getTypes={pokeType} />
            </Displaynone>
        </div>
    )
}