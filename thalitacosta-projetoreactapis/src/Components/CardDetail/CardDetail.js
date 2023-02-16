import {NameMoves, FotoPokemonDireita, Dados, PokemonType, PokemonName, PokemonNumber, ImagePokemon, Title, BlocoMoves, ContainerDetails, BgImagePokemon, BlocoImagensPokemon, BlocoBaseStates, BlocoDados, Pokeball, BlocoFotoPokemon} from "./Styled"
import bulbasaur from "../../Assets/PokemonImages/bulbasaur.png"
import pokeball from "../../Assets/pokeboll.png"
import ice from "../../Assets/PokemonTypes/ice.png"

function CardDetail(props) {


    return (
        <>
            <Title>Detalhes</Title>
            <ContainerDetails>
              <BlocoImagensPokemon>
                <BgImagePokemon>
                  <ImagePokemon src={bulbasaur}/>
                </BgImagePokemon>
                <BgImagePokemon>
                  <ImagePokemon src={bulbasaur}/>
                </BgImagePokemon>
              </BlocoImagensPokemon>
              <BlocoBaseStates>
                <h2>Base stats</h2>
              </BlocoBaseStates>
              <BlocoDados>
                <Dados>
                  <PokemonNumber>#01</PokemonNumber>
                  <PokemonName>Bulbasaur</PokemonName>
                  <PokemonType src={ice}/>
                </Dados>
                <BlocoMoves>
                  <h2>Moves:</h2>
                  <NameMoves>Name Moves</NameMoves>
                </BlocoMoves>
              </BlocoDados>
              <BlocoFotoPokemon>
                <FotoPokemonDireita src={bulbasaur}/>
              </BlocoFotoPokemon>
              <Pokeball src={pokeball}/>
            </ContainerDetails>
        </>
        )
      }

export default CardDetail;