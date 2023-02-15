import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const { name } = useParams();
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }, []);
  console.log(name);
  return (
    <div>
    </div>
  );
}

export default PokemonDetails