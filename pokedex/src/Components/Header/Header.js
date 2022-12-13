import React from 'react';
import { HeaderContainer } from './HeaderStyle';
import Pokelogo from '../../images/pokemon.png'

export default function Header() {
 return (
   <HeaderContainer>
     <p></p>
    <img src={Pokelogo} />
    <button>Pokedex</button>
   </HeaderContainer>
  );
}