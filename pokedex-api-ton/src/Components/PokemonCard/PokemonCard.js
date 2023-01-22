import { ClassFirst, ClassSecond, DetailAndCaptur, ImgPokemon, StyleCard, StyleClass, StyleId, StyleImgClass, StyleName, StyleTextClass } from "./PokemonCardStyle";


function PokemonCard(){


    return(
        <>
            <ImgPokemon/>
            <StyleCard>
                <div>
                    <StyleId>id</StyleId>
                    <StyleName>nome</StyleName>
                    <StyleClass>
                        <ClassFirst>
                            <StyleImgClass/>
                            <StyleTextClass>Poison</StyleTextClass>
                        </ClassFirst>
                        <ClassSecond>
                            <StyleImgClass/>
                            <StyleTextClass>Grass</StyleTextClass>
                        </ClassSecond>
                    </StyleClass>
                </div>
                <DetailAndCaptur>
                    <p>Detalhes</p>
                    <button>Capturar</button>
                </DetailAndCaptur>
            </StyleCard>
        
        </>
    )
}

export default PokemonCard;