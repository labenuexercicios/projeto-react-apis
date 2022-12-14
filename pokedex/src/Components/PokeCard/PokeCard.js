import React from 'react';
import { PokeCardContainer } from './PokecardStyle';

export default function PokeCard() {
 return (
   <PokeCardContainer>
     <div>
       <p>
        PokeCard
      </p>
     </div>
     <div>
      <button>Capturar</button>
      <button>Detalhes</button>
     </div>
      {/* PokeCard
      <button>Capturar</button>
      <button>Detalhes</button> */}

   </PokeCardContainer>
  );
}