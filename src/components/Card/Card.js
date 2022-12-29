import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetalhes } from "../../router/Coordinator";
import { Container, Img, ImgPoke, DireitoCard, PokemonType, 
  Superior, LadoEsquerdo, Nome, Id, Types, Button, Detalhes, ButtonCapturar, ButtonRemover } from "./styled";
import { typesPokemon } from "../../utils/typesPokemon";
import { getColors } from "../../utils/getColors";
import poke from "../../assets/poke.png"


const Card = (props) => {
  const { pokemonUrl, addToPokedex, removeFromPokedex } = props;


  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
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
    }console.log(pokemon)
  };

  const fetchPokemonType = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setTypes(response.data.types[0].type.name);
    } catch (error) {
      console.log("Erro ao buscar lista de tipos de pokemons");
      console.log(error);
    }console.log(types)
  };
  
  

  return (
    <Container cardColor={getColors(types)}>
      <Superior>
        <LadoEsquerdo>
          <Id>{pokemon.id < 10 ? (<span>{"#0"+pokemon.id}</span>):(<span>{"#"+pokemon.id}</span>)}</Id>
          <Nome>{pokemon.name}</Nome>
          <Types>{pokemon.types?.map((typePokemon) => {
            return (
              <PokemonType src={typesPokemon(typePokemon.type.name)} alt={`${typePokemon.type.name}`}/>
          )})}
          </Types>
        </LadoEsquerdo>
        <DireitoCard>
          <Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} />
          <ImgPoke src={poke} />
        </DireitoCard>
      </Superior>
      <Button>
      <Detalhes onClick={() => goToDetalhes(navigate, pokemon.id)}>
          Detalhes
      </Detalhes>
      
        {location.pathname === "/" ? (
          <ButtonCapturar onClick={() => addToPokedex(pokemon)}>
            {console.log(pokemon)}Capturar!
          </ButtonCapturar>
        ) : (
          <ButtonRemover onClick={() => removeFromPokedex(pokemon)}>
            Excluir
          </ButtonRemover>
        )}

        
        
      </Button>
    </Container>
  );
}

export default Card;