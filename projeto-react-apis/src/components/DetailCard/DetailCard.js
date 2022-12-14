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
} from "./style";

export const DetailCard = ({ url }) => {
  const [hp, setHp] = useState(45);
  const [attack, setAttack] = useState(49);
  const [defense, setDefense] = useState(49);
  const [spAtk, setSpAtk] = useState(65);
  const [spDef, setSpDef] = useState(100);
  const [speed, setSpeed] = useState(30);

  const graphicColor = (item) => {
    if (item < 31) return "#f5410f";
    if (item > 30 && item < 61) return "#f7b72d";
    if (item > 60) return "#61c754";
  };

  const [pokemonId, setPokemonId] = useState("1");
  const [pokemonName, setPokemonName] = useState("bulbasaur");
  const [pokemonType1, setPokemonType1] = useState("poison");
  const [pokemonType2, setPokemonType2] = useState("grass");
  const [pokemonImg, setPokemonImg] = useState("");

  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/1/`, {})
      .then((response) => {
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
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    searchPokemon();
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <ContainerCard>
      <DivColumn>
        <DivImg>
          <img src={""} alt="pokemon" />
        </DivImg>
        <DivImg>
          <img src={""} alt="pokemon" />
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
          <Moves><p>Razor Wind</p></Moves>
          <Moves><p>Sword Dance</p></Moves>
        </DivMoves>
        
      </DivInfos>
      <PokemonImg src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
    </ContainerCard>
  );
};
