import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Header } from "../components/header";
import { GlobalContext } from "../context/GlobalContext";
import { vaiParaHome, vaiParaPokedex } from "../coordinator/coordinator";
import { CardDetalhes, FundoDaPokebola, TypesPokemon } from "./detalhes.styled";
import imagemFundo from "../assets/img/fundoPokebola.png"
import { types } from "../templates/tipos"
import { cores } from "../templates/cores";
import { Progress } from '@chakra-ui/react'
import { corProgress } from "../templates/corProgess"
import imagemFundoDetalhes from "../assets/img/fundoPokebolaDetalhes.png"
import { FundoPagina } from "../pages/detalhes.styled"



export function Detalhes() {

    const params = useParams()

    const navigate = useNavigate()

    const [pokemon, setPokemon] = useState({})

    const pegarPokemonApi = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
            setPokemon(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        pegarPokemonApi()
    }, [])

    const context = useContext(GlobalContext)
    const { addPoke, setAddPoke } = context


    const tipo = (pokemon) => {
        if (pokemon.types[1]) {
            return (
                <>
                    <img src={types(pokemon.types[0].type.name)} />
                    <img src={types(pokemon.types[1].type.name)} />
                </>
            )

        } else {
            return <img src={types(pokemon.types[0].type.name)} />
        }
    }

   
    <div>


    </div>

    return (
        <>
            <Header
                addPoke={addPoke}
                setAddPoke={setAddPoke}
                pokemon={pokemon}
            />

            <FundoPagina>

              <FundoDaPokebola>
                <div className="pokebolaFundo">
                    <img src={imagemFundo} />
                </div>
                </FundoDaPokebola>
                
                <div className="CardDetalhes">
                    <p><b>Detalhes</b></p>
                </div>



                {pokemon.name &&
                    <CardDetalhes color={cores(pokemon.types[0].type.name)}>



                        <img className="CardFundo" src={imagemFundoDetalhes} />

                        <div className="CardImagem1" >
                            <img width={"282px"} height={"282px"} src={pokemon.sprites?.front_default} />
                        </div>
                        <div className="CardImagem2" >
                            <img width={"282px"} height={"282px"} border src={pokemon.sprites?.back_default} />
                        </div>


                        <div className="CardNome">
                            <div className="CardId">
                                <p><b>{`#0${pokemon.id}`}</b></p>
                            </div>
                            <div className="CardNome1">
                                <p><b>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</b></p>
                            </div>
                            <div >
                                <TypesPokemon>{tipo(pokemon)}</TypesPokemon>
                            </div>


                        </div>

                        <div className="CardImagem3">
                            <img src={pokemon.sprites?.other["official-artwork"].front_default} />
                        </div>

                        <div className="CardBase">
                            <div className="BaseName">


                                <b>Base Stats</b>
                            </div>
                            {pokemon.stats.map((status) => {
                                return (
                                    <div className="CardBase1">
                                        <p className="StatName">{status?.stat.name.charAt(0).toUpperCase() + status?.stat.name.slice(1)}</p>
                                        <p className="BaseStat">{status?.base_stat}</p>
                                        <Progress className="BaseProgress" borderRadius={"8px"} marginTop={"8px"} width={"200px"} colorScheme={corProgress(status?.stat.name)}
                                            size='sm' value={status?.base_stat} />
                                    </div>
                                )
                            })}
                            <span>Total</span><span className="TotalStats">{pokemon && pokemon["stats"]["0"]["base_stat"] +
                                pokemon["stats"]["1"]["base_stat"] +
                                pokemon["stats"]["2"]["base_stat"] +
                                pokemon["stats"]["3"]["base_stat"] +
                                pokemon["stats"]["4"]["base_stat"] +
                                pokemon["stats"]["5"]["base_stat"]
                            }</span>

                        </div>



                        <div className="CardMoves">
                            <div className="CardMovesName">
                                <b>Moves</b>
                            </div>
                            <div className="CardMovesName1">
                                <p>{pokemon.moves[0]?.move.name}</p>
                            </div>
                            <div className="CardMovesName1">
                                <p>{pokemon.moves[1]?.move.name}</p>
                            </div>
                            <div className="CardMovesName1">
                                <p>{pokemon.moves[2]?.move.name}</p>
                            </div>
                            <div className="CardMovesName1">
                                <p>{pokemon.moves[3]?.move.name}</p>
                            </div>
                        </div>


                    </CardDetalhes>

                }
            </FundoPagina>

        </>
    )
} 