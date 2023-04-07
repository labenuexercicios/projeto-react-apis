import { BigDetail, CardDetail, PokeId, PokemonDetailStyle, SmallDetail, PokeName, PokeInfo, PokeType, PokeMoves } from "./pokemonDetailStyle"
import Header from "../../Components/Header/Header"
import { Title } from "../PokedexPage/pokedexStyle"
import pokeball from '../../assets/pngwing 1.png'
import pokeball2 from '../../assets/pngwing 2.png'
import { SmallPokeball, BigPokeball } from "./pokemonDetailStyle"


export default function PokemonDetailPage (){
   return (
   <div>
        <Header/>
        <PokemonDetailStyle>
            <Title>Detalhes</Title>
            <BigPokeball src={pokeball}/>
            <CardDetail>
                <SmallDetail/>
                <SmallDetail/>
                <BigDetail/>
                <PokeInfo>
                    <PokeId>#01</PokeId>
                    <PokeName>Bulbasaur</PokeName>
                    <PokeType></PokeType>
                    <PokeMoves></PokeMoves>
                </PokeInfo>
            </CardDetail>
        </PokemonDetailStyle>
   </div>
   )
}