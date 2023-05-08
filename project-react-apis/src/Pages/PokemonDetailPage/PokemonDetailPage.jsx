import React, { useState, useEffect } from 'react'
import { Header } from '../../Components/Header/Header'
import { Main, Local, Text, Container, PokemonNumber, PokemonName, PokemonType, TypesContainer, Pokeball, Pokemon, MainData, ImgDiv, Img1, Img2, StatsDiv, MovesDiv, Img, Title, Moves, Stats, StatsItem, StatsNumber, StatsChart } from './styled'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import pokeball from "../../assets/img/pngwing 2.png"
import { getColors } from '../../utils/ReturnCardColor';
import { getTypes } from '../../utils/ReturnPokemonType';


export function PokemonDetailPage() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [type, setType] = useState([])
  const [types, setTypes] = useState([])
  const [moves, setMoves] = useState([])
  const [baseStats, setBaseStats] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => {
        setPokemon(response.data);
        setType(response.data.types[0].type.name)
        setTypes(response.data.types)
        setMoves(response.data.moves)
        setBaseStats(response.data.stats.map(stat => stat.base_stat));
      })
  }, []);

  if (!pokemon) {
    return <div>Carregando...</div>
  }

  function getBarColor(value) {
    if (value < 10) {
      return 'red';
    } else if (value < 50) {
      return '#f77f11';
    } else {
      return '#ffde69';
    }
  }


  return (
    <>
      <Header currentPage="details" pokemon={pokemon} name={name} />
      <Local>
        <Text>Detalhes</Text>
      </Local>
      <Main>
        <Container style={{ backgroundColor: getColors(type) }}>
          <ImgDiv>
            <Img1>
              <Img src={pokemon.sprites.front_default} alt="" />
            </Img1>
            <Img2>
              <Img src={pokemon.sprites.back_default} alt="" />
            </Img2>
          </ImgDiv>
          <StatsDiv>
            <Title>Base stats</Title>
            <Stats>
              <StatsItem>
                <p>HP</p>
                <p>Attack</p>
                <p>Defense</p>
                <p>Sp. Atk</p>
                <p>Sp. Def</p>
                <p>Speed</p>
                <p>Total</p>
              </StatsItem>
              <StatsNumber>
                {baseStats.map((stat, index) => (
                  <p
                    key={index}>{stat}
                  </p>
                ))}
                <span style={{fontWeight: '700'}}>{baseStats.reduce((total, num) => total + num, 0)}</span>
              </StatsNumber>
              <StatsChart>
                {baseStats.map((stat, key) => (
                  <span key={key} style={{ width: `${stat}%`, maxWidth: '100%', backgroundColor: getBarColor(stat), height: "0.7rem", margin: "0rem 0 0rem 1.5rem", borderRadius: '4px', }}>
                  </span>
                ))}
              </StatsChart>
            </Stats>
          </StatsDiv>
          <MovesDiv>
            <Title>Moves:</Title>
            {moves.slice(0, 4).map((move, key) => {
              const name = move.move.name;
              const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
              return <Moves key={key}><p style={{ color: "black" }}>{capitalized}</p></Moves>;
            })}
          </MovesDiv>
          <MainData>
            <PokemonNumber>#{pokemon.id}</PokemonNumber>
            <PokemonName>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</PokemonName>
            <TypesContainer>
              {types.map((type, key) => (
                <PokemonType key={key} src={getTypes(type.type.name)} alt={type.type.name} />
              ))}
            </TypesContainer>
          </MainData>
          <div>
            <Pokemon src={pokemon.sprites?.other["official-artwork"].front_default} />
          </div>
          <Pokeball src={pokeball} />
        </Container>
      </Main>
    </>
  )
}