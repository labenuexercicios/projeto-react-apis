import axios from "axios";
import { useState, useEffect } from "react";
import { BackgroundColor } from "../BackgroundColor/BackgroundColor";
import { PokemonType } from "../PokemonType/PokemonType";
import {
  ContainerCard,
  DivColumn,
  DivImg,
  DivRow,
  DivStats,
  DivText,
  Value,
  DivLine,
  Title,
  DivGraphic,
  DivGraphicInterior,
  DivValue,
  TextId,
  TextPokemon,
  DivPoison,
  DivInfos,
  DivMoves,
  DivName,
  PokemonImg,
  Moves,
  Img,
} from "./style";

export const DetailCard = ({ url }) => {
  const searchPokemon = () => {
    axios
      .get(`${url}`, {})
      .then((response) => {
        // console.log(response.data)
        setMoves(response.data.moves);
        setPokemonFrontImg(response.data.sprites.front_default);
        setPokemonBackImg(response.data.sprites.back_default);
        setHp(response.data.stats[0].base_stat);
        setAttack(response.data.stats[1].base_stat);
        setDefense(response.data.stats[2].base_stat);
        setSpAtk(response.data.stats[3].base_stat);
        setSpDef(response.data.stats[4].base_stat);
        setSpeed(response.data.stats[5].base_stat);
        setPokemonId(response.data.id);
        setPokemonName(response.data.name);
        setPokemonType1(response.data.types[0].type.name);
        if (!!response.data.types[1]) {
          setPokemonType2(response.data.types[1].type.name);
        }
        for (let i in response.data.sprites.other) {
          if (i === "official-artwork") {
            setPokemonImg(response.data.sprites.other[i].front_default);
          }
        }
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    searchPokemon();
  }, []);

  const [hp, setHp] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [spAtk, setSpAtk] = useState("");
  const [spDef, setSpDef] = useState("");
  const [speed, setSpeed] = useState("");
  const [pokemonId, setPokemonId] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType1, setPokemonType1] = useState("");
  const [pokemonType2, setPokemonType2] = useState("");
  const [pokemonImg, setPokemonImg] = useState("");
  const [pokemonFrontImg, setPokemonFrontImg] = useState("");
  const [pokemonBackImg, setPokemonBackImg] = useState("");
  const [moves, setMoves] = useState([]);

  const graphicColor = (item) => {
    if (item < 31) return "#f5410f";
    if (item > 30 && item < 61) return "#f7b72d";
    if (item > 60) return "#61c754";
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <ContainerCard style={{ backgroundColor: BackgroundColor(pokemonType1) }}>
      <DivColumn>
        <DivImg>
          <Img src={pokemonFrontImg} alt="pokemon" />
        </DivImg>
        <DivImg>
          <Img src={pokemonBackImg} alt="pokemon" />
        </DivImg>
      </DivColumn>
      <DivStats>
        <Title>Base stats</Title>
        <DivLine></DivLine>
        <DivRow>
          <DivText>
            <p>HP</p>
          </DivText>
          <DivValue>
            <Value>{hp}</Value>
          </DivValue>
          <DivGraphic>
            <DivGraphicInterior
              style={{
                width: (hp * 160) / 100,
                backgroundColor: graphicColor(hp),
              }}
            ></DivGraphicInterior>
          </DivGraphic>
        </DivRow>
        <DivLine></DivLine>
        <DivRow>
          <DivText>
            <p>Attack</p>
          </DivText>
          <DivValue>
            <Value>{attack}</Value>
          </DivValue>
          <DivGraphic>
            <DivGraphicInterior
              style={{
                width: (attack * 160) / 100,
                backgroundColor: graphicColor(attack),
              }}
            ></DivGraphicInterior>
          </DivGraphic>
        </DivRow>
        <DivLine></DivLine>
        <DivRow>
          <DivText>
            <p>Defense</p>
          </DivText>
          <DivValue>
            <Value>{defense}</Value>
          </DivValue>
          <DivGraphic>
            <DivGraphicInterior
              style={{
                width: (defense * 160) / 100,
                backgroundColor: graphicColor(defense),
              }}
            ></DivGraphicInterior>
          </DivGraphic>
        </DivRow>
        <DivLine></DivLine>
        <DivRow>
          <DivText>
            <p>Sp. Atk</p>
          </DivText>
          <DivValue>
            <Value>{spAtk}</Value>
          </DivValue>
          <DivGraphic>
            <DivGraphicInterior
              style={{
                width: (spAtk * 160) / 100,
                backgroundColor: graphicColor(spAtk),
              }}
            ></DivGraphicInterior>
          </DivGraphic>
        </DivRow>
        <DivLine></DivLine>
        <DivRow>
          <DivText>
            <p>Sp. Def</p>
          </DivText>
          <DivValue>
            <Value>{spDef}</Value>
          </DivValue>
          <DivGraphic>
            <DivGraphicInterior
              style={{
                width: (spDef * 160) / 100,
                backgroundColor: graphicColor(spDef),
              }}
            ></DivGraphicInterior>
          </DivGraphic>
        </DivRow>
        <DivLine></DivLine>
        <DivRow>
          <DivText>
            <p>Speed</p>
          </DivText>
          <DivValue>
            <Value>{speed}</Value>
          </DivValue>
          <DivGraphic>
            <DivGraphicInterior
              style={{
                width: (speed * 160) / 100,
                backgroundColor: graphicColor(speed),
              }}
            ></DivGraphicInterior>
          </DivGraphic>
        </DivRow>
        <DivLine></DivLine>
        <DivRow>
          <DivText>
            <p>Total</p>
          </DivText>
          <DivValue>
            <Value>{hp + attack + defense + spAtk + spDef + speed}</Value>
          </DivValue>
        </DivRow>
        <DivLine></DivLine>
      </DivStats>
      <DivInfos>
        <DivName>
          <TextId>#{pokemonId}</TextId>
          <TextPokemon>{capitalizeFirstLetter(pokemonName)}</TextPokemon>
          <DivPoison>
            <PokemonType type={pokemonType1} />
            <PokemonType type={pokemonType2} />
          </DivPoison>
        </DivName>
        <DivMoves>
          <Title>Moves:</Title>
          {moves
            .filter((move, index) => {
              return index < 5;
            })
            .map((item) => {
              return (
                <Moves key={item.move.name}>
                  <p>{item.move.name}</p>
                </Moves>
              );
            })}
          <Moves>
            <p>Razor Wind</p>
          </Moves>
        </DivMoves>
      </DivInfos>
      <PokemonImg src={pokemonImg} />
    </ContainerCard>
  );
};
