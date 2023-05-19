import { useEffect, useState, useRef } from 'react';
import { Header } from '../../Components/Header/Header';
import { PokemonCard } from '../../Components/PokemonCard/PokemonCard';
import axios from 'axios';
import { getColors } from '../../utils/TypeColor';
import { getTypes } from '../../utils/PokeType';
import { ContainerMsg, Containerlist, Displaynone } from './styledList';
import { PokeDetails } from '../Details/PokeDetails';

export const PokeList = (props) => {
  const cardColor = getColors;
  const pokeType = getTypes;
  const [pokemons, setPokemons] = useState([]);
  const [showCaptureMessage, setShowCaptureMessage] = useState(false);
  const captureMessageRef = useRef(null);

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (captureMessageRef.current && !captureMessageRef.current.contains(event.target)) {
        setShowCaptureMessage(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleCaptureMensagePokemon = () => {
    setShowCaptureMessage(true);
  };

  const getPokemons = () => {
    const endpoints = [];
    for (let i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((responses) => {
      const pokemonsData = responses.map((response) => response.data);
      setPokemons(pokemonsData);
    });
  };

  return (
    <div>
      <Header />
      <Containerlist>
        {showCaptureMessage && (
          <ContainerMsg ref={captureMessageRef}>
            <h1>Gotcha!</h1>
            <h3>O Pokémon foi adicionado a sua Pokédex</h3>
          </ContainerMsg>
        )}
        {pokemons.length ? (
          pokemons.map((pokemons) => {
            return (
              <PokemonCard
                pokemons={pokemons}
                cardColor={cardColor}
                getTypes={pokeType}
                onCapturemsg={handleCaptureMensagePokemon}
              />
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </Containerlist>
      <Displaynone>
        <PokeDetails pokemons={pokemons} cardColor={cardColor} getTypes={pokeType} />
      </Displaynone>
    </div>
  );
};
