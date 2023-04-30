import React, { useContext, useState, useEffect } from 'react'
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from '../../contexts/GlobalContext';
import { Container, PokemonNumber, PokemonName, PokemonType, TypesContainer, Pokeball, CatchButton, Pokemon, DeleteButton, Detalhes } from './styled'
import pokeball from "../../assets/img/pngwing 2.png"
import { goToDetailsPage } from '../../routes/coordinator';
import { getColors } from '../../utils/ReturnCardColor';
import { getTypes } from '../../utils/ReturnPokemonType';


export function PokemonCard({ pokemonUrl }) {

    const context = useContext(GlobalContext)

    const { addToPokedex, removeFromPokedex } = context

    // hook para saber nosso path atual
    const location = useLocation();

    // hook para redirecionar
    const navigate = useNavigate();

    const [pokemon, setPokemon] = useState({});
    const [type, setType] = useState([])
    const [types, setTypes] = useState([])

    useEffect(() => {
        fetchPokemon();
    }, []);

    const fetchPokemon = async () => {
        try {
            const response = await axios.get(pokemonUrl);
            setPokemon(response.data);
            setType(response.data.types[0].type.name)
            setTypes(response.data.types)

        } catch (error) {
            console.log("Erro ao buscar lista de pokemons");
            console.log(error);
        }
    };

    return (
        <Container style={{ backgroundColor: getColors(type) }}>
            <div>
                <PokemonNumber>{pokemon.id}</PokemonNumber>
                <PokemonName>{pokemon.name}</PokemonName>
                <TypesContainer>
                    {types.map((type, key) => (
                        <PokemonType key={key} src={getTypes(type.type.name)} alt={type.type.name} />
                    ))}
                </TypesContainer>
                <Detalhes onClick={() => { goToDetailsPage(navigate) }}>Detalhes</Detalhes>
            </div>
            <div>
                <Pokemon src={pokemon.sprites?.other["official-artwork"].front_default} />
                {location.pathname === "/" ? (
                    <CatchButton onClick={() => addToPokedex(pokemon)}>
                        Capturar!
                    </CatchButton>
                ) : (
                    <DeleteButton onClick={() => removeFromPokedex(pokemon)}>
                        Excluir
                    </DeleteButton>
                )}

            </div>
            <Pokeball src={pokeball} />
        </Container>
    )
}