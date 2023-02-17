import {Moves, States, Move, FotoPokemonDireita, Dados, PokemonType, PokemonName, PokemonNumber, ImagePokemon, Title, BlocoMoves, ContainerDetails, BgImagePokemon, BlocoImagensPokemon, BlocoBaseStates, BlocoDados, Pokeball, BlocoFotoPokemon} from "./Styled"
import pokeball from "../../Assets/pokeboll.png"
import { getImg } from "../../Utils/ReturnPokemonImage";
import {getTypes} from "../../Utils/ReturnPokemonType"

function CardDetail({detailPokemon}) {

    return (
        <>
            <Title>Detalhes</Title>
            <ContainerDetails>
              <BlocoImagensPokemon>
                <BgImagePokemon>
                  <ImagePokemon src={detailPokemon.sprites?.back_default}/>
                </BgImagePokemon>
                <BgImagePokemon>
                  <ImagePokemon src={detailPokemon.sprites?.front_default}/>
                </BgImagePokemon>
              </BlocoImagensPokemon>
              <BlocoBaseStates>
                <h2>Base stats</h2>
                <States>
                  <div>
                    {detailPokemon.stats?.map((stat) => {   
                    const stats = stat.stat.name  
                    return (<p>{stats}</p>);
                    })}
                  </div>
                  <div>
                    {detailPokemon.stats?.map((statnumber) => {   
                    const statsnumber = statnumber.base_stat 
                    return (<p>{statsnumber}</p>);
                    })}
                  </div>
                </States>
              </BlocoBaseStates>
              <BlocoDados>
                <Dados>
                  <PokemonNumber>#{detailPokemon.id}</PokemonNumber>
                  <PokemonName>{detailPokemon.name}</PokemonName>
                  {detailPokemon.types?.map((type) => {   
                  const tipo = type.type.name  
                  return (<PokemonType key={tipo} src={getTypes(tipo)} alt={tipo} />);
                  })}
                </Dados>
                <BlocoMoves>
                  <h2>Moves:</h2>
                  <Moves>
                    {detailPokemon.moves?.map((movee) => {   
                    const move = movee.move.name  
                    return (<Move><p>{move}</p></Move>);
                    })}
                  </Moves>
                </BlocoMoves>
              </BlocoDados>
              <BlocoFotoPokemon>
                <FotoPokemonDireita src={getImg(detailPokemon.name)}/>
              </BlocoFotoPokemon>
              <Pokeball src={pokeball}/>
            </ContainerDetails>
        </>
        )
      }

export default CardDetail;