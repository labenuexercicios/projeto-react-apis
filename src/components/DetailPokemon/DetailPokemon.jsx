import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {
  BaseStats,
  BoxImageMiniPoke,
  ContainerCard,  
  DetailPage,  
  Id,
  InfoAndMoves,
  MoviesPokemon,
  Pokeball,
  Pokemon,
  PokemonType,
  ProgressBar,
  ProgressBarContainer,
  TypeMoves,
  TypesContainer,
  H1,  
} from "./styled";
import pokeball from "../../assets/pngwing 2.png";
import GlobalContext from "../../context/GlobalContext";

export const DetailPokemon = () => {

  const context = useContext(GlobalContext)
    const { type1,
      type2,
      setType1,
      setType2,
      detail,
      getColors,
      getTypes,
      colorProgress,
      abbreviate,
      ModifayFirstLetter
     } = context
  
  const [image, setImage] = useState("");
  const [imageBack, setImageBack] = useState("");
  const [imageFront, setImageFront] = useState("");
  const [name,setName] =useState('')
  const [id, setId] = useState("")
  const [stats, setStats] = useState([]);
  const [moves, setMoves] = useState([]);
  const statName = stats.map((stat) => stat.stat.name);

  const getPokemonData = async () => {
    try {
      const res = await axios.get(detail?.url);
      setImage(res.data.sprites.other["official-artwork"].front_default);
      setImageBack(res.data.sprites.back_default);
      setImageFront(res.data.sprites.front_default);
      setType1(res.data.types[0]?.type.name);
      setType2(res.data.types[1]?.type.name);
      setStats(res.data.stats);
      setMoves(res.data.moves);
      setName(res.data.name);
      setId(res.data.id)     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemonData();
  }, [detail]);

  const typ2Detail = () => {
    if (type2) {
      return <PokemonType src={getTypes(type2)} />;
    } else {
      return null;
    }
  };
  return (
    <DetailPage>
      <div>
        <H1>Detalhes</H1>
      </div>
      <ContainerCard color={getColors(type1)}>
        <BoxImageMiniPoke>
          <div>
            <img src={imageFront} alt="pokemon image" />
          </div>
          <div>
            <img src={imageBack} alt="pokemon image" />
          </div>
        </BoxImageMiniPoke>
        <BaseStats>
          <h2>Base stats:</h2>
          {stats.map((stat, index) => (
            <div  key={index}>
              <h5>
                {abbreviate(ModifayFirstLetter(stat.stat.name))}{" "}
                {stat.base_stat}
              </h5>
              <ProgressBarContainer>
                <ProgressBar
                  color={colorProgress(statName[index])}
                  progress={stat.base_stat}
                >
                  .
                </ProgressBar>
              </ProgressBarContainer>             
            </div>
          ))}
          <div>
            <p>
              Total:{""}
              {stats.length > 0
                ? stats.reduce(
                    (allPower, valueStat) => allPower + valueStat.base_stat,
                    0
                  )
                : 0}
            </p>
          </div>
        </BaseStats>
        <InfoAndMoves>
          <div>
          {id?<Id>#0{id}</Id>:<Id>#{id}</Id>}
          <h1>{name}</h1>
          </div>
           <TypesContainer>
            <PokemonType src={getTypes(type1)} />
            {typ2Detail()}
          </TypesContainer>        
         
        </InfoAndMoves>
        <MoviesPokemon>
        <h2>Moves:</h2>
        <div>
          {moves?.filter((move, index) => index < 4).map((move, index) => {
            return (
            <div key={index}>
            <TypeMoves>{ModifayFirstLetter(move.move.name)}</TypeMoves>
            </div>
            );
          })}
          </div>
        </MoviesPokemon>
        <Pokemon src={image} alt="pokemon image" />
        <Pokeball src={pokeball} alt="pokeball" />
      </ContainerCard>
    </DetailPage>
  );
};

