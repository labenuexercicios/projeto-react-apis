import React from 'react';
import PokeCard from '../../Components/PokeCard/PokeCard';
import { PokedexContainer } from './PokedexStyles';

export default function PokedexPage() {
 return (
   <>
    <h1>Meus Pokemons</h1>
    <PokedexContainer>
      <PokeCard/>
      <PokeCard/>
      <PokeCard/>
      <PokeCard/>
    </PokedexContainer>
   </>
  );
}