import React from 'react';
import PokeCard from '../../Components/PokeCard/PokeCard';
import { HomeContainer } from './PokedexListStyles';

export default function PokedexListPage() {
 return (
     <>
     <h1>Todos os pokemons</h1>
        <HomeContainer>
            <PokeCard/>
            <PokeCard/>
            <PokeCard/>
            <PokeCard/>
            <PokeCard/>
            <PokeCard/>
            <PokeCard/>
        </HomeContainer>
     </>
  );
}