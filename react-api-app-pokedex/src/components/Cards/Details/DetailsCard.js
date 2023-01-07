import React, {useState, useEffect} from "react";
import {Topheader, Goback, Topimg, Removebutton, DPokeball, DetailsContainer, CardDetails, Pokeid, Pokename, Poketypes, Imgtypes, Imgcard, Typescontainer, Img1, Img2, Pokestats, BarStats, PokeMoves, MovesDetails} from "../Details/styleddetails";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import pokeball from "../../../Images/pokeball.png";
import { getTypes } from "../../../routes/getTypes";
import axios from "axios";
import ProgressBar from "@ramonak/react-progress-bar";

export const DetailsCard = (props) => {
    const navigate = useNavigate();
    const navigateToHome =()=>{
        navigate("/home")
    }

    let params = useParams()
    const pokeId = params.id
    
    const [pokemon, setPokemon] = useState([]);

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    const getPokemonList = async () => {
        let pokemonArray = [];
            pokemonArray.push(await getPokemonData(pokeId));
            console.log(pokemonArray);
            setPokemon(pokemonArray);
        }
            
    useEffect(() => {
        getPokemonList();
    }, [])

    const pk = pokemon.map(p => (p.data));
    let count = 0;
    
    for(let i=0; i<=5; i++){
      count += pk.map(p => p.stats[i].base_stat)[0];
    }
    
    const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/404px-International_Pok%C3%A9mon_logo.svg.png"
    
    const getCardColors = () => {
        switch(pk.map(p => (p.types[0].type.name))[0]) {
          case "bug":
            return "#76A866";
          case "fire":
            return "#EAAB7D";
          case "flying":
            return "#6892B0";
          case "grass":
            return "#729F92";
          case "normal":
            return "#BF9762";
          case "poison":
            return "#729F92";
          case "water":
            return "#71C3FF";
          default:
            return "#8A8A8A";
        }
      };
      
        const getColors = (type) => {
        switch(type) {
          case "bug":
            return "#316520";
          case "dark":
            return "#5C5365";
          case "dragon":
            return "#0A6CBF";
          case "electric":
            return "#F4D23B";
          case "fairy":
            return "#EC8FE6";
          case "fighting":
            return "#CE4069";
          case "fire":
            return "#F44900";
          case "flying":
            return "#6892B0";
          case "ghost":
            return "#5269AC";
          case "grass":
            return "#70B873";
          case "ground":
            return "#D97745";
          case "ice":
            return "#74CEC0";
          case "normal":
            return "#8A8A8A";
          case "poison":
            return "#AD61AE";
          case "psychic":
            return "#F67176";
          case "rock":
            return "#C7B78B";
          case "steel":
            return "#BBBBBB";
          case "water":
            return "#33A4F5";
          default:
            return "#74CEC0";
        }
      };
      
    return (
        <>
        <Topheader className="header">
            <Goback>
        <h5><Link to='/home'>&lt; Todos Pokémons</Link></h5>
        </Goback>
        <Topimg alt="logo"
        src={logo}
        />
    <Removebutton>
        <motion.div className="poke-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} onClick={navigateToHome}>
                Excluir da Pokédex
        </motion.div>
    </Removebutton>
    <DetailsContainer>
          <div style={{background: "#5E5E5E"}}><h1>Detalhes</h1>
    <CardDetails color={getCardColors}> 
            <div>
            { pk.map(p => <Pokeid
                key={ p.id }>
                <p>#0{p.id}</p> 
            </Pokeid>)}
          <div>
            <Pokename>
                <strong >
                   {pk.map(p => (p.name[0].toUpperCase()))[0] + pk.map(p => (p.name.slice(1)))[0]}
                </strong>
            </Pokename>
              </div>
              <Poketypes color={getColors}>
                {pk.map(p => p.types.map(pokemonType => <Typescontainer color={getColors(pokemonType.type.name)}>
                  {pokemonType.type.name}
                </Typescontainer>))}
                {pk.map(p => p.types.map(pokemonType => { return <Imgtypes style={{color: "#FFF"}} src={getTypes(pokemonType.type.name.toLowerCase())}/>})).sort((a,b) => a > b ? 1 : -1)}
              </Poketypes>
            <Imgcard
            src={pk.map(p => p.sprites.other["official-artwork"].front_default)}
            />
            <Img1 src={pk.map(p => p.sprites.front_default)}
            />
            <Img2 src={pk.map(p => p.sprites.back_default)}
            />
            {/* Stats pokemon */}
            <Pokestats>
            <div>
            <h2>Base stats</h2>
            <p>{pk.map(p => p.stats[0].stat.name.toUpperCase())} - {pk.map(p => p.stats[0].base_stat)} </p>
              <BarStats stats={pk.map(p => p.stats[0].base_stat)} style={{width: pokemon.stats}}ProgressBar completed="100"><div></div></BarStats>
              <p>{pk.map(p => p.stats[1].stat.name)} - {pk.map(p => p.stats[1].base_stat)} </p>
              <BarStats stats={pk.map(p => p.stats[1].base_stat)}><div></div></BarStats>
              <p>{pk.map(p => p.stats[2].stat.name)} - {pk.map(p => p.stats[2].base_stat)} </p>
              <BarStats stats={pk.map(p => p.stats[2].base_stat)}><div></div></BarStats>
              <p>{pk.map(p => p.stats[3].stat.name.replace("special-attack","Sp. Atk"))} - {pk.map(p => p.stats[3].base_stat)} </p>
              <BarStats stats={pk.map(p => p.stats[3].base_stat)}><div></div></BarStats>
              <p>{pk.map(p => p.stats[4].stat.name.replace("special-defense","Sp. Def"))}  {pk.map(p => p.stats[4].base_stat)} </p>
              <BarStats stats={pk.map(p => p.stats[4].base_stat)}><div></div></BarStats>
              <p>{pk.map(p => p.stats[5].stat.name)} - {pk.map(p => p.stats[5].base_stat)} </p>
              <BarStats stats={pk.map(p => p.stats[5].base_stat)}><div></div></BarStats>
              <div>
                <p><span>Total:</span>
                <span >
                {count}
                </span>
                </p>
            </div>
            </div>
              </Pokestats>
              <MovesDetails>
                    <h2>Moves:</h2>
              <PokeMoves style={{width: pokemon.stats}}ProgressBar completed="100">
                    <div>{pk.map(p => p.moves[0].move.name)}</div>
                    <div>{pk.map(p => p.moves[1].move.name)}</div>
                    <div>{pk.map(p => p.moves[2].move.name)}</div>
                    <div>{pk.map(p => p.moves[3].move.name)}</div>
              </PokeMoves>
            </MovesDetails>
            </div>
          </CardDetails>
          </div>
    </DetailsContainer>
    <DPokeball src={pokeball} alt='pokeball'/>
    </Topheader>
        
          
          </>
          )
}
  
  export default DetailsCard;