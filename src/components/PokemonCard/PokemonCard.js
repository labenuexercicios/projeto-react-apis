import { useState, useEffect, useContext } from "react";
import { PokemonCardStyle } from './PokemonCardStyle'
import axios from "axios";
import { Button, Link } from "@chakra-ui/react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToDetailsPage } from './../../routes/coordinator';
import { useLocation, useNavigate } from "react-router-dom";
import { typePokemon } from './../constants/types';
import pokebolaDetails from '../../assets/pokebolaDetails.png';
import Pokebola from '../../assets/pokebola.png'


export function PokemonCard(props) {


    const context = useContext(GlobalContext)
    const [pokemon, setPokemon] = useState([]);
    const [typesLocal, setTypesLocal] = useState([])
    const { pokemonUrl } = props
    const { addToPokedex, removeFromPokedex } = context
    const location = useLocation();
    const navigate = useNavigate();


    const fetchPokemon = async () => {
        try {
            const response = await axios.get(pokemonUrl)
            setPokemon(response.data)
            setTypesLocal([typePokemon[response.data.types[0].type.name], typePokemon[response.data.types[1]?.type.name]])
        }
        catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => { fetchPokemon() }, [])

    const buttonRender = () => {
        switch (location.pathname) {
            case '/':

                return (
                    <Button
                        color="white"
                        textColor="black"
                        fontSize="14px"
                        lineHeight='24px'
                        fontWeight="400"
                        width="146px"
                        onClick={() => addToPokedex(pokemon)}
                    >
                        Capturar!
                    </Button>
                )

            case '/pokedex':
                return (
                    <Button
                        backgroundColor='#FF6262'
                        color="red"
                        textColor="white"
                        fontSize="16px"
                        lineHeight='24px'
                        fontWeight="400"
                        width="146px"
                        onClick={() => removeFromPokedex(pokemon)}
                    >
                        Excluir
                    </Button>
                )

            default:
                break;
        }
    }



    return (
        <PokemonCardStyle style={{
            backgroundImage: `url(${Pokebola})`,
            backgroundPositionX: "180px",
            backgroundColor: `${typesLocal[0] && typesLocal[0].color}`
        }}>

            <div className="infos-pokemon">
                <h2>#0{pokemon.id}</h2>
                <h1 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h1>
                <div className="pokemon-type">

                    {pokemon.types?.map((type) => {
                        return <img src={typePokemon[type.type.name]?.urlImg} key={typePokemon.id} alt='pokemon-type' />
                    })}
                </div>

                <Link fontSize="16px" textDecoration="underline" justifySelf='flex-end' onClick={() => goToDetailsPage(navigate, pokemon.id)}>
                    Detalhes
                </Link>

            </div>


            <div className="img-button-pokemon">
                <img src={pokemon.sprites && pokemon.sprites?.other['official-artwork']['front_default']} alt="pokemon" />
                {buttonRender()}
            </div>

        </PokemonCardStyle>
    );
}
