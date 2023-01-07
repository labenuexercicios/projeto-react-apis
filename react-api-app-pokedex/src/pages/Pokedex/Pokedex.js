import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Card } from "../../components/Cards/Card";
import Header from "../../pages/Header/Header";
import { MainContainer, DisplayCards, Backhome, HeaderContainer } from "../../pages/Pokedex/styledpokedex";
import { Col } from "react-bootstrap";
import { Container } from "../Home/styledhome";
import { Link } from "react-router-dom";

function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const context = useContext(GlobalContext)

    return (
      <>
        <HeaderContainer >
        <Header/>
        </HeaderContainer>
        <Backhome>
        <h5><Link to='/home'>&lt; Todos Pokémons</Link></h5>
        </Backhome>
          <MainContainer>
          <div><h1>Meus Pokémons</h1></div>
          <DisplayCards>
          {pokemon.map(p => (
      <Col key={p.data.name}>
        <Card pokemon={p.data}/>
      </Col>
        ))}
          </DisplayCards>  
        </MainContainer>
      </>
    );
  }
  
  export default Pokedex;