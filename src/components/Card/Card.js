import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardItem, Id, Left, Name } from "./styled";

const Card = ({ url }) => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(url);
      setPokemon(response.data);
      //console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Erro ao pegar dados do Pokemon!");
      console.log(error);
    }
  };

  return (
    <CardItem>
      <Left>
        <Id>#{pokemon.id}</Id>
        <Name>{pokemon.name}</Name>
      </Left>
    </CardItem>
  );
};

export default Card;
