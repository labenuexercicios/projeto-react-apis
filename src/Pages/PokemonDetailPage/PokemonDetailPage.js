import React from 'react';
import Header from '../../Components/Header/Header';
import axios from 'axios';
import { useEffect,useState} from 'react';
import { useParams} from 'react-router-dom';
import {CardPokemonDetalhes} from "./PokemonDetailPageStyle"
import { Container, ContainerCard } from '../HomePage/HomePageStyle';
import { getColors } from '../../Constantes/Cardcor';
import {PokemonNumeroDetalhes,PokemonNomeDetalhes,ImagensCardContainerDetalhes,ImagemDetalhes,DetalhesBaseStatus,Barra,Status,MovimentoDetalhes,StatusSp,} from "./PokemonDetailPageStyle";
import Pokeboladet from "../../assets/pokeboladet.png";
import { getPokemonType } from '../../Constantes/type';
import { PokemonType } from './PokemonDetailPageStyle';
import { TypesContainer } from './PokemonDetailPageStyle';
import {Tipomovi} from "./PokemonDetailPageStyle";




export default function PokemonDetailPage() {



  const [pokemon, setPokemon] = useState({});
  const [pokemonColorDetalhe, setPokemonColorDetalhe] = useState("")
  const [totalGeral, setTotalGeral] = useState(0);

  const params = useParams();
 

  useEffect(() => {
    fetchPokeDetails();
    
  }, [])


  // const fetchPokeDetails = async () => {
  //   try {
  //     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  //     setPokemon(response.data);
  //     setPokemonColorDetalhe(getColors(response.data.types[0].type.name))
  //     const total = pokemon.stats.reduce ((contador,stats) => {
  //       return (contador += stats.base_stat);
  //     },0); settotalGeral(total)


  //   } catch (error) {
  //     console.log("Erro ao buscar detalhes de pokemon");
  //     console.log(error.response);
  //   }
  // };

  const fetchPokeDetails = async() => {
    await axios 
    .get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    .then((response) => {
    const pokemon = response.data;
    setPokemon(pokemon)
    setPokemonColorDetalhe(getColors(pokemon.types[0].type.name))
    const total = pokemon.stats.reduce((contador, stats) => {
              return (contador += stats.base_stat);
            }, 0);
    setTotalGeral(total);
    })
    .catch((error) => {
     console.log("Erro ao buscar lista de pokemons", error);
          });
      };


  return (
    <>
    <Header/>
    <Container>
    <ContainerCard>
    <CardPokemonDetalhes  style={{ backgroundColor: pokemonColorDetalhe}}  >

          <ImagensCardContainerDetalhes>


            <img className='pokeimage' src={pokemon.sprites?.other['official-artwork'].front_default} alt = "pokeimage" />
            <img className="pokeboladet" src={Pokeboladet} alt="pokebola" />
      </ImagensCardContainerDetalhes>


        <PokemonNumeroDetalhes>
          <p>#{pokemon.id}</p>
        </PokemonNumeroDetalhes>
        <PokemonNomeDetalhes>
          <h1>{pokemon.name}</h1>
        </PokemonNomeDetalhes>


       <ImagemDetalhes>
          <div>
        <img src={pokemon.sprites?.versions["generation-v"]["black-white"].animated.front_default} alt="" />
          </div>
        <div>
        <img src={pokemon.sprites?.versions["generation-v"]["black-white"].animated.back_default} alt="" />
        </div>

        </ImagemDetalhes>

       
      
        <DetalhesBaseStatus>
        <h2>Base Status</h2>
        <br></br>
        <table>
        
        <tr><td>HP</td> <td><b>  {pokemon.stats && pokemon?.stats[0]?.base_stat}</b></td> 
        <td><Barra> <Status width = {pokemon.stats && pokemon?.stats[0]?.base_stat}></Status></Barra></td> </tr> 
         <br></br>
        <tr><td>Defense</td> <td><b>  {pokemon.stats && pokemon?.stats[1]?.base_stat}</b></td> 
        <td><Barra> <Status width = {pokemon.stats && pokemon?.stats[1]?.base_stat}></Status></Barra></td> </tr> 
        <br></br>

  
        <tr><td>Sp. Atk</td> <td><b>  {pokemon.stats && pokemon?.stats[2]?.base_stat}</b></td> 
        <td><Barra> <StatusSp width = {pokemon.stats && pokemon?.stats[2]?.base_stat}></StatusSp></Barra></td> </tr> 
        <br></br>

        <tr><td>Sp. Def</td> <td><b>  {pokemon.stats && pokemon?.stats[3]?.base_stat}</b></td> 
        <td><Barra> <StatusSp width = {pokemon.stats && pokemon?.stats[3]?.base_stat}></StatusSp></Barra></td> </tr> 
        <br></br>

        <tr><td>Speed</td> <td><b>  {pokemon.stats && pokemon?.stats[4]?.base_stat}</b></td> 
        <td><Barra> <Status width = {pokemon.stats && pokemon?.stats[4]?.base_stat}></Status></Barra></td> </tr> 
        <br></br>

        <tr><td>total</td> <td><b>  {totalGeral}</b></td> 
        <td></td></tr> 
        <br></br>


     


         
        </table>
				

        </DetalhesBaseStatus>

        <TypesContainer>
          
          {pokemon?.types?.map((type) => {

            return <PokemonType key={type} src={getPokemonType(type.type.name)} alt="" />;
          })}

         
        </TypesContainer>





        <MovimentoDetalhes>
        <h2>Moves:</h2>
        { pokemon.moves &&
          pokemon.moves.splice(5) &&
            pokemon.moves.map((item)=> {
              return <Tipomovi>{item.move.name}</Tipomovi>
            })}

        </MovimentoDetalhes>
       

          </CardPokemonDetalhes>
          </ContainerCard>
          </Container>
    </>
  )
}
