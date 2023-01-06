import axios from "axios";
import { GlobalContext } from '../../contexts/GlobalContext'
import { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetails } from "../../router/Coordinator";
import { Container, Img, ImgPoke, RightSide, PokemonType, Higher, LeftSide, 
  Name, Id, Types, Button, Details, CaptureButton, RemoveButton } from "./Card.styled";
import { typesPokemon } from "../../utils/typesPokemon";
import { getColors } from "../../utils/getColors";
import poke from "../../assets/poke.png"

const Card = (props) => {
  const { pokemonUrl, addToPokedex, removeFromPokedex, pokemons} = props;

  const context = useContext(GlobalContext)
  const { openModalCapture } = context

  const location = useLocation();

  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({});
  const [types, setTypes] = useState({})

  useEffect(() => {
    fetchPokemon();
    fetchPokemonType();
    // eslint-disable-next-line
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

  const fetchPokemonType = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setTypes(response.data.types[0].type.name);
    } catch (error) {
      console.log("Erro ao buscar lista de tipos de pokemons");
      console.log(error);
    }
  };
  
  function modalEaddToPokedex () {
    openModalCapture()
    addToPokedex(pokemons)
  };

  function modalRemoveToPokedex () {
    openModalCapture()
    removeFromPokedex(pokemon)
  };

  return (
    <Container cardColor={getColors(types)}>
      <Higher>
        <LeftSide>
          <Id>{pokemon.id < 10 ? (<span>{"#0"+pokemon.id}</span>):(<span>{"#"+pokemon.id}</span>)}</Id>
          <Name>{pokemon.name}</Name>
          <Types>{pokemon.types?.map((typePokemon) => {
             return (
              <PokemonType src={typesPokemon(typePokemon.type.name)} alt={`${typePokemon.type.name}`}/>
          )})}
          </Types>
        </LeftSide>
        <RightSide>
          <Img src={pokemon.sprites?.other['official-artwork'].front_default} alt={pokemon.name} />
          <ImgPoke src={poke} />
        </RightSide>
      </Higher>
      <Button>
      <Details onClick={() => goToDetails(navigate, pokemon.id)}>
          Detalhes
      </Details>
      {location.pathname === "/" ? (
        <CaptureButton onClick={() => modalEaddToPokedex()}>
          Capturar!
        </CaptureButton>
        ) : (
        <RemoveButton onClick={() => modalRemoveToPokedex()}>
          Excluir
        </RemoveButton>
        )}
      </Button>
    </Container>
  );
}

export default Card;