import { useRequestData } from "../../Hooks/UseRequestData"
import { GlobalContext } from "../../Contexts/GlobalContext"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import { StyledCard, StyledMain, StyledH1, StyledPokebola, StyledSprite, StyledSpriteDiv, StyledStats, StyledP } from "./StyledPokemonDetailPage"
import { colors } from "../../Assets/colors"
import Pokebola from "../../Assets/pokebola.png"
import { StatBar } from "../../Components/StatBar/StatBar"


export const PokemonDetailPage = () => {

    const { name } = useParams()
    const dados = useContext(GlobalContext)

    const pokemon = dados.find((pokemon) => pokemon.name === name)
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
                    {pokemon.stats.map((stats)=>{
                        return (<StatBar statValue = {stats["base_stat"]} statName={stats.stat.name}/>)
                    })}
            
                    </div>
                </StyledStats>
            </StyledCard>
        </StyledMain>
    )
}