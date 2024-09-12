import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerPokedex } from "./PokedexStyle";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";
import CardPokedex from "../Cards/CardPokedex";
import { MapContainer } from "../HomePage/HomeStyled";
import Header from "../../components/Header/Header";
import { Heading } from "@chakra-ui/react";

const Pokedex = () => {
  const navigate = useNavigate();
 
  const { myPokemonList, setMyPokemonList, myPokemon } = useContext(GlobalContext);

  const [modalDelete, setModalDelete] = useState("none");
  const changeModalDelete = () => {
    setModalDelete("block");
  };

  async function getPokemon() {
    const list = [];
    for (let i = 0; i < myPokemon.length; i++) {
      const result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${myPokemon[i]}`
      );
      const resultData = result.data;
      list.push(resultData);
    }
    setMyPokemonList(list);
  }

  useEffect(() => {
    getPokemon();
  }, []);
  return (
    <ContainerPokedex>

        <Heading 
          textAlign="center"
          size='4xl'            
          >Pokédex
        </Heading>

      <MapContainer>
        {myPokemonList.map((index) => {
          return (
            <CardPokedex
              pokemon={index}
              key={index.id}
              changeModalDelete={changeModalDelete}
            />
          );
        })}
      </MapContainer>
      </ContainerPokedex>
  );
}

export default Pokedex
