import React, {useState, useEffect} from "react";
import axios from "axios";
import { Col, Row } from 'react-bootstrap';
// import Pokemon from "../Cards/Pokemon";
import {Card} from "../../components/Cards/Card";
import { Container, Bodycontainer } from "./styledhome";
import Header from "../Header/Header";

const Homepage = () => {

  const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPokemonList = async () => {
        let pokemonArray = [];
        for(let i=1; i<=21; i++){
            pokemonArray.push(await getPokemonData(i));
        }
            // console.log(pokemonArray);
            setPokemon(pokemonArray);
            setLoading(false);
        }
    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }
    
useEffect(() => {
    getPokemonList();
}, [])

  return (
    <>
    <Header />
    <Bodycontainer>    
            <h5>Todos Pokémons</h5>
    </Bodycontainer>
    <Container background="gray">
      {pokemon.map(p => (
      <Col key={p.data.name}>
        <Card pokemon={p.data}/>
      </Col>
        ))}

    </Container>
    </>
  )
}

export default Homepage;