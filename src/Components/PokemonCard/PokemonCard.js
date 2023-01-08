import {
    Pokeball,
    PokemonCardStyle,
    PokemonImagem,
    PokemonName,
    PokemonNumber,
    TypesContainer,
    PokemonType,
    Button,
    ButtonExcluir
} from "./pokemonCardStyle";
import pokeball from "../../assets/pngwing 2.png";
import { useEffect, useState } from "react";

import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { goToPokemonDetailPage } from "../../routes/coordinator";
import { getTypes } from "../../MudaCor/RetornaPokemonType";
import { getColors } from "../../MudaCor/RetornaCardColor";



export default function PokemonCard(props) {
    const { pokemonUrl, adicionaPokedex, removeFromPokedex, } = props
    const location = useLocation()
    const navigate = useNavigate()

    // const context = useContext(GlobalContext)
    const [pokemon1, setPokemon1] = useState([])
    const [typeApi, setTypeApi] = useState([])
    const [typeApi2, setTypeApi2] = useState([])

    const getPokemon = () => {
        axios.get(pokemonUrl)

            .then((resposta) => {
                // console.log(resposta.data.types[0].type.name)
                // console.log(resposta.data)

                setPokemon1(resposta.data)
                setTypeApi(resposta.data.types[0].type.name)
                setTypeApi2(resposta.data.types[1].type.name)

            })

            .catch((error) => {

            })
    }
    useEffect(() => {
        getPokemon()
    }, [])
    // console.log()
    return (
        <PokemonCardStyle color={getColors(typeApi)}>
            <div>
                <PokemonNumber>{`#${pokemon1.id}`}</PokemonNumber>
                <PokemonName>{pokemon1.name}</PokemonName>
                <TypesContainer>
                        <PokemonType src={getTypes(typeApi)} alt="" />
                        <PokemonType src={getTypes(typeApi2)} alt="" />
                </TypesContainer>

            </div>
            <div>
                <PokemonImagem src={pokemon1.sprites?.other["official-artwork"]["front_default"]} />
                {/* <PokemonImagem src={`https://raw.githubusercontent.com/PokeAPI/sprites/master
                /sprites/pokemon/other/official-artwork/3.png`} */}
                {location.pathname === "/" ? (
                    <Button onClick={() => adicionaPokedex(pokemon1)}>
                        Capturar!
                    </Button>
                ) : (
                    <ButtonExcluir onClick={() => removeFromPokedex(pokemon1)}>
                        Excluir
                    </ButtonExcluir>
                )}
                <a onClick={() => goToPokemonDetailPage(navigate, pokemon1.name)} className="Detalhes" href="">Detalhes</a>
            </div>
            <Pokeball src={pokeball} alt="pokeball" />
        </PokemonCardStyle>
    )
}