import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { goToHome, goToPokedexPage } from "../../routes/coordinator";
import Pokemon from "../../assets/images/pokemon.png";
import Pokedex from "../../assets/images/pokedex.svg";
import Excluir from "../../assets/images/excluir.svg";
import { Container, Image, Button, Button2, Button3 } from "./Header.styled";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const context = useContext(GlobalContext);
  const [pokemonDetails, setPokemonDetails] = useState({});
  const { addToPokedex, pokedex, removeFromPokedex } = context;

  const getPokemon = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${params.pokemonName}`);
      setPokemonDetails(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemon();
    console.log(params);
  }, [params]);

  const threeHeaders = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <Button onClick={() => goToPokedexPage(navigate)}>
              <img src={Pokedex}></img>
            </Button>
            <Image src={Pokemon}></Image>
          </>
        );
      case "/pokedex":
        return (
          <>
            <Button2 onClick={() => goToHome(navigate)}>Todos Pokémons</Button2>
            <Image src={Pokemon}></Image>
          </>
        );
      case `/details/${params.pokemonName}`:
        return (
          <>
            <Button2 onClick={() => goToHome(navigate)}>Todos Pokémons</Button2>
            <Image src={Pokemon}></Image>

            {pokedex.find(
              (pokemon) => pokemon.data?.name === params.pokemonName
            ) ? (
              <Button onClick={() => removeFromPokedex(pokemonDetails)}>
                <img src={Excluir}></img>
              </Button>
            ) : (
              <Button3 onClick={() => addToPokedex(pokemonDetails)}>
                Capturar Pokemon
              </Button3>
            )}
          </>
        );
      default:
        return (
          <Button onClick={() => goToHome(navigate)}>Página Inicial</Button>
        );
    }
  };
  return <Container>{threeHeaders()}</Container>;
};

export default Header;
