import React from 'react';
import { DetailsContainer, ImgBoxFront, ImgBoxBack, BaseStatus, PokemonData,Moves, ImagePokemon  } from './PokemonDatailsStyles';
import Bulbasaur from '../../images/Bulbasaur.png'

export default function PokemonDetailsPage() {
 return (
   <>
   <h1>Detalhes do pokemon</h1>
    <DetailsContainer>
      <ImgBoxFront>a</ImgBoxFront>
      <ImgBoxBack>b</ImgBoxBack>
      <BaseStatus>
          <h2>Base Status</h2>
          <p>HP 45</p>
          <p>Attack 56</p>
          <p>Defense 56</p>
          <p>Sp. Atk 56</p>
          <p>Sp. Def 56</p>
          <p>Speed 56</p>
          <p>Total 56</p>
      </BaseStatus>
      <PokemonData>
        <p>#01</p>
        <p>Bulbasaur</p>
        <span>Poison</span>
        <span>Grass</span>
      </PokemonData>
      <Moves>
        <h2>Moves:</h2>
        <p>Razon Wind</p>
        <p> cut</p>
        <p> cut</p>
        <p> Vine Whip</p>
      </Moves>
      <ImagePokemon>
        <img src={Bulbasaur}/>
      </ImagePokemon>
    </DetailsContainer>
   </>
  );
}