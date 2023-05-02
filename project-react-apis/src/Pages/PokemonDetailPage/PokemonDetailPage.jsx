import React, { useState, useEffect } from 'react'
import { Header } from '../../Components/Header/Header'
import { Main, Container, PokemonNumber, PokemonName, PokemonType, TypesContainer, Pokeball,  Pokemon} from './styled'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import pokeball from "../../assets/img/pngwing 2.png"
import { getColors } from '../../utils/ReturnCardColor';
import { getTypes } from '../../utils/ReturnPokemonType';

export function PokemonDetailPage() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [type, setType] = useState([])
    const [types, setTypes] = useState([])

    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => {
          setPokemon(response.data);
          setType(response.data.types[0].type.name)
            setTypes(response.data.types)
        })
    }, []);
  
    if(!pokemon) {
      return <div>Carregando...</div>
    }
  console.log(pokemon);
    return(
        <>
            <Header currentPage="details" pokemon={pokemon}/>
            <Main>
            <Container style={{ backgroundColor: getColors(type) }}>
            <div>
                <PokemonNumber>{pokemon.id}</PokemonNumber>
                <PokemonName>{pokemon.name}</PokemonName>
                <TypesContainer>
                    {types.map((type, key) => (
                        <PokemonType key={key} src={getTypes(type.type.name)} alt={type.type.name} />
                    ))}
                </TypesContainer>
            </div>
            <div>
                <Pokemon src={pokemon.sprites?.other["official-artwork"].front_default} />
            </div>
            <Pokeball src={pokeball} />
            </Container>
            </Main>
        </>
    )
}