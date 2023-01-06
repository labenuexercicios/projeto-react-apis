import Header from "../../Components/Header/Header"
import {
    PokemonDetailPageMain,
    PokemonCardDetailStyle,
    Base,
    PokemonDetailNameStyle,
    Container,
    PokemonImagem,
    PokemonImagemFrente,
    PokemonTypeDetail,
    PokemonTypeDetail2,
    TypesContainer,
    Move,
    Move1,
    Move2,
    Move3,
    Stats,
    Stats1,
    Stats2,
    Stats3,
    Stats4,
    Stats5,
    PokemonId,
    Moves,
    PokemonImagemCostas
} from "./pokemonDetailPageStyle"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getTypes } from "../../MudaCor/RetornaPokemonType"
import { getColors } from "../../MudaCor/RetornaCardColor"
import { Progress } from "@chakra-ui/react"


export default function PokemonDetailPage() {

    const [imagemFrente, setImagemFrente] = useState([])
    const [imagemCosta, setImagemCosta] = useState([])
    const [detalhes, setDetalhes] = useState([])
    const [moves, setMoves] = useState([])
    const [typeApiDetail, setTypeApiDetail] = useState([])
    const [typeApiDetail2, setTypeApiDetail2] = useState([])
    const [typeMove, setTypeMove] = useState([])
    const [typeMove1, setTypeMove1] = useState([])
    const [typeMove2, setTypeMove2] = useState([])
    const [typeMove3, setTypeMove3] = useState([])
    const [stats, setStats] = useState([])
    const [stats1, setStats1] = useState([])
    const [stats2, setStats2] = useState([])
    const [stats3, setStats3] = useState([])
    const [stats4, setStats4] = useState([])
    const [stats5, setStats5] = useState([])
    const params = useParams()


    const getPokemon = () => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`)


            .then((resposta) => {

                // console.log(resposta.data.stats)
                // console.log(resposta.data.stats[3].stat.name)

                setImagemFrente(resposta.data.sprites["front_default"])
                setImagemCosta(resposta.data.sprites["back_default"])
                setMoves(resposta.data.moves[0].move.name)
                setTypeApiDetail(resposta.data.types[0].type.name)
                setTypeApiDetail2(resposta.data.types[1].type.name)
                setTypeMove(resposta.data.moves[0].move.name)
                setTypeMove1(resposta.data.moves[1].move.name)
                setTypeMove2(resposta.data.moves[2].move.name)
                setTypeMove3(resposta.data.moves[4].move.name)
                setStats(resposta.data.stats[0].base_stat)
                setStats1(resposta.data.stats[1].base_stat)
                setStats2(resposta.data.stats[2].base_stat)
                setStats3(resposta.data.stats[3].base_stat)
                setStats4(resposta.data.stats[4].base_stat)
                setStats5(resposta.data.stats[5].base_stat)
                setDetalhes(resposta.data)

            })

            .catch((error) => {

            })
    }
    useEffect(() => {
        getPokemon()
    }, [])

    return (
        <>
        
            <Header />
            <Container>Detalhes</Container>
            <PokemonDetailPageMain>
                <PokemonCardDetailStyle color={getColors(typeApiDetail)} />
                <PokemonId>{`#${detalhes.id}`}</PokemonId>
                <PokemonDetailNameStyle>{detalhes.name}</PokemonDetailNameStyle>
                <TypesContainer>
                    <PokemonTypeDetail src={getTypes(typeApiDetail)} cardColor={getColors(typeApiDetail)} alt="" />
                    <PokemonTypeDetail2 src={getTypes(typeApiDetail2)} alt="" />
                </TypesContainer>
                <PokemonImagem src={detalhes.sprites?.other["official-artwork"]["front_default"]} />
                <Moves>
                    <span className="TituloMoves">Moves:</span>
                </Moves>
                <Move>{typeMove}</Move>
                <Move1>{typeMove1}</Move1>
                <Move2>{typeMove2}</Move2>
                <Move3>{typeMove3}</Move3>

                <Base>
                    <span className="TituloBase">Base Stats:</span>
                </Base>

                <Stats>{`HP ${stats}`}<Progress hasStripe value={stats} colorScheme='red' /></Stats>
                <Stats1>{`Attack ${stats1}`}<Progress hasStripe value={stats1} colorScheme='red' /></Stats1>
                <Stats2> {`Defense ${stats2}`} <Progress hasStripe value={stats2} colorScheme='red' /></Stats2>
                <Stats3> {`Sp.Atk ${stats3}`} <Progress hasStripe value={stats3} colorScheme='red' /> </Stats3>
                <Stats4> {`Sp.Def ${stats4}`} <Progress hasStripe value={stats4} colorScheme='red' /></Stats4>
                <Stats5>{`Speed ${stats5}`}<Progress hasStripe value={stats5} colorScheme='red' /></Stats5>

                <PokemonImagemFrente src={imagemFrente} />
                <PokemonImagemCostas src={imagemCosta} />
            </PokemonDetailPageMain>


        </>
    )
}