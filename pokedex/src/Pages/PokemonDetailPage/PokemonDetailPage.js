import { useRequestData } from "../../Hooks/UseRequestData"
import { GlobalContext } from "../../Contexts/GlobalContext"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import { StyledCard, StyledMain, StyledH1, StyledPokebola, StyledSprite, StyledSpriteDiv, StyledStats, StyledP, StyledInfoAndMoves, StyledMovesCard, StyledMoves, StyledPMoves, StyledName, StyledImg } from "./StyledPokemonDetailPage"
import { colors } from "../../Assets/colors"
import Pokebola from "../../Assets/Pokebola2.png"
import { StatBar } from "../../Components/StatBar/StatBar"
import { StyledTypes } from "../../Components/PokemonCard/StyledPokemonCard"
import { images } from "../../Assets/Types/images"


export const PokemonDetailPage = () => {

    const { name } = useParams()
    const {pokemons} = useContext(GlobalContext)

    const pokemon = pokemons.find((pokemon) => pokemon.name === name)
    console.log(pokemon)

    return (
        <StyledMain>
            {/* <StyledPokebola src={Pokebola}/> */}
            <StyledH1>Detalhes</StyledH1>
            <StyledCard color={colors[pokemon.types[0].type.name]}>
                <StyledSpriteDiv>
                    <StyledSprite>
                        <img src={pokemon.sprites["front_default"]} />
                    </StyledSprite>
                    <StyledSprite>
                        <img src={pokemon.sprites["back_default"]} />
                    </StyledSprite>
                </StyledSpriteDiv>
                <StyledStats>
                    <StyledP>Base stats</StyledP>
                    <div>
                        {pokemon.stats.map((stats) => {
                            return (<StatBar statValue={stats["base_stat"]} statName={stats.stat.name} />)
                        })}
                    </div>
                </StyledStats>
                <StyledInfoAndMoves>
                    <p>#{pokemon.id}</p>
                    <StyledName>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</StyledName>
                    <StyledTypes>
                        {pokemon.types.map((type) => {
                            return <img src={images[type.type.name]} />
                        })}
                    </StyledTypes>
                    <StyledMovesCard>
                    <StyledPMoves>Moves:</StyledPMoves>
                    {pokemon.moves.slice(0,5).map((move)=>{return <StyledMoves>{(move.move.name.charAt(0).toUpperCase()+move.move.name.slice(1))}</StyledMoves>})}
                    </StyledMovesCard>
                </StyledInfoAndMoves>
                <StyledImg src={pokemon.sprites.other["official-artwork"].front_default}/>
                <StyledPokebola src={Pokebola}/>
            </StyledCard>
        </StyledMain>
    )
}