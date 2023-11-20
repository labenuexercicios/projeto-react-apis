

import React from "react";
import {TypesContainer, PokemonDetails,PokemonGif, Container, CatchButton, PokemonNumber, PokemonName, Pokeball, Pokemon, ExtButton,PokemonType, PokemonGifBack, BaseStatsContainer, Hp, StatsName, BarStats, Attack, Sp, AttackAndDefense, BaseNumbers, BaseBars, StatsNames, StatHp, StatCustom, StatSpeed, TotalBar, MovesContainer } from "./styled";
import { getPokemonType } from "../../constants/type";
import { getColors } from "../../constants/color";




function PokemonDetailedCard(props) { 
    const { pokemonDetailed} = props;
    const capitalize = str => {
        if (typeof str !== 'string') {
          return '';
        }
        return str.charAt(0).toUpperCase()  + str.substring(1);
      }
      // hook para saber nosso path atual
    
      // hook para redirecionar
return (
<>
<Container  color={getColors(pokemonDetailed.types && pokemonDetailed.types[0].type.name)}>
<Pokemon 
          src={pokemonDetailed.sprites?.other["official-artwork"]["front_default"]} alt={pokemonDetailed.name} />
          <div>
          <PokemonNumber>#{pokemonDetailed.id < 10 ? '0' + String(pokemonDetailed.id):pokemonDetailed.id}</PokemonNumber>
           <PokemonName>{capitalize(pokemonDetailed.name)}</PokemonName>
           <TypesContainer>
      {pokemonDetailed.types?.map((type) => {
              return (
                <PokemonType src={getPokemonType(type.type.name)}  />
              );
            })}
        </TypesContainer>
          </div>
          <PokemonGif  src={pokemonDetailed.sprites?.versions["generation-v"]["black-white"]["front_default"]}  alt={pokemonDetailed.name} />
          <PokemonGifBack  src={pokemonDetailed.sprites?.versions["generation-v"]["black-white"]["back_default"]}  alt={pokemonDetailed.name} />
          <BaseStatsContainer>
          <h1>Base stats</h1>
          <StatsNames>
          <StatCustom> HP </StatCustom>
          <StatsName> Attack </StatsName>
          <StatsName> Defense </StatsName>
          <StatsName> Sp.Atk </StatsName>
          <StatsName> Sp.Defense </StatsName>
          <StatSpeed> Speed </StatSpeed>
          </StatsNames>
          <BaseNumbers>
          <p> {pokemonDetailed.stats && pokemonDetailed.stats[0]["base_stat"]} </p>
          <p> {pokemonDetailed.stats && pokemonDetailed.stats[1]["base_stat"]} </p>
          <p> {pokemonDetailed.stats && pokemonDetailed.stats[2]["base_stat"]} </p>
          <p> {pokemonDetailed.stats && pokemonDetailed.stats[3]["base_stat"]} </p>
          <p> {pokemonDetailed.stats && pokemonDetailed.stats[4]["base_stat"]} </p>
          <p> {pokemonDetailed.stats && pokemonDetailed.stats[5]["base_stat"]} </p>
          </BaseNumbers>
          <BaseBars>
          <BarStats stats={pokemonDetailed.stats && pokemonDetailed.stats[0]["base_stat"]}><div></div></BarStats>
          <BarStats stats={pokemonDetailed.stats && pokemonDetailed.stats[1]["base_stat"]}><div></div></BarStats>
          <BarStats stats={pokemonDetailed.stats && pokemonDetailed.stats[2]["base_stat"]}><div></div></BarStats>
          <BarStats stats={pokemonDetailed.stats && pokemonDetailed.stats[3]["base_stat"]}><div></div></BarStats>
          <BarStats stats={pokemonDetailed.stats && pokemonDetailed.stats[4]["base_stat"]}><div></div></BarStats>
          <BarStats stats={pokemonDetailed.stats && pokemonDetailed.stats[5]["base_stat"]}><div></div></BarStats>
          <TotalBar>
          <StatsName> total </StatsName>
          <span>
          {pokemonDetailed?.stats?.reduce((acc,cur)=> acc + cur.base_stat,0)}
           </span>
           </TotalBar>
          </BaseBars>
          </BaseStatsContainer>
          <MovesContainer>
          <h1>Moves:</h1>
          <button>{(pokemonDetailed.moves && pokemonDetailed.moves[0]["move"]["name"])}</button>
          <button>{(pokemonDetailed.moves && pokemonDetailed.moves[1]["move"]["name"])}</button>
          <button>{(pokemonDetailed.moves && pokemonDetailed.moves[2]["move"]["name"])}</button>
          <button>{(pokemonDetailed.moves && pokemonDetailed.moves[4]["move"]["name"])}</button>

          </MovesContainer>
</Container>
</> 
);
}
export default PokemonDetailedCard;