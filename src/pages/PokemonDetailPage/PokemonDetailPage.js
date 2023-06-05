import { Box, Img, Progress, Stack, Text } from '@chakra-ui/react'
import { Header } from "../../components/Header/Header";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from './../../components/constants/BASE_URL';
import { typePokemon } from "../../components/constants/types";
import pokebolaDetails from '../../assets/pokebolaDetails.png'
import { MovesTypes, PokemonDetailPageStyle, CardDetails } from './PokemonDetailsStyle';
import Modal from './../../components/Modal/Modal';

export function PokemonDetailPage() {

    const context = useContext(GlobalContext)
    const params = useParams()
    const [typesLocal, setTypesLocal] = useState([])
    const {pokemon, setPokemon, isModalOpen} = context
    
   
    const fetchPokemonDetails = async () => {
        try {
         const response =  await axios.get(`${BASE_URL}/${params.id}`) 
         setTypesLocal([typePokemon[response.data.types[0].type.name], typePokemon[response.data.types[1]?.type.name]])
         setPokemon(response.data)
        } catch (error) {
          console.log(error.response)
          
        }
      }
    
      useEffect(()=>{
        fetchPokemonDetails()
      },[])


    const calculateTotal = () => {
      const total = 
      Number(pokemon.stats && pokemon?.stats[0]?.base_stat) + 
      Number(pokemon.stats && pokemon?.stats[1]?.base_stat) +
      Number(pokemon.stats && pokemon?.stats[2]?.base_stat) +
      Number(pokemon.stats && pokemon?.stats[3]?.base_stat) +
      Number(pokemon.stats && pokemon?.stats[4]?.base_stat) +
      Number(pokemon.stats && pokemon?.stats[5]?.base_stat);
  
      return total
    }
  
    const progressBar = (value) => {
      
      
      if(value < 50 ){
        return 'orange'
      }else if(value >= 50 && value < 70){
        return 'yellow'
      }else if(value >= 70 ){
        return 'green'
      }
  
    }


    return ( 
        <>
        {isModalOpen && <Modal/>}
        <Header/>
        <PokemonDetailPageStyle>
        <h1>Detalhes</h1>
        <CardDetails style={{
        backgroundImage: `url(${pokebolaDetails})`,
        backgroundRepeat: `no-repeat`,
        backgroundPositionX: '620px',
        backgroundColor: `${typesLocal[0] && typesLocal[0].color}`
        
      }}>
      <div className='details-columm'>
      <Box w='282px' h='282px' bg='white' borderRadius='8px' display='flex' justifyContent='center' alignItems='center'> 
        <img id="img-pokemon" src={pokemon.sprites?.versions["generation-v"]["black-white"].animated.front_default} alt='pokemon-front' />
        </Box>
      <Box w='282px' h='282px' bg='white' borderRadius='8px' display='flex' justifyContent='center' alignItems='center'>
        <img id="img-pokemon" src={pokemon.sprites?.versions["generation-v"]["black-white"].animated.back_default} alt='pokemon-back'/>
      </Box>

      </div>
      
      <div className='details-columm'>
      <Box w='343px' h='613px' bg='white' borderRadius='12px' padding='24px' >
      <Text color='black' fontSize='24px'>Base Stats</Text>


      <table>
        <thead>

        <tr>
          <td className='stat-title'>HP</td> 
          
          <td className='stat-number'>{pokemon.stats && pokemon?.stats[0]?.base_stat}</td>
      
          <td className='stat-progress'>
          <Progress colorScheme={progressBar(pokemon.stats && pokemon?.stats[0]?.base_stat)} size='sm' value={pokemon.stats && pokemon?.stats[0]?.base_stat} borderRadius='10px' bg='transparent'/>
          </td>
          
          </tr>
        <tr>
          <td className='stat-title'>Attack</td> 

          <td className='stat-number'>{pokemon.stats && pokemon?.stats[1]?.base_stat}</td>

          <td className='stat-progress'>
          <Progress colorScheme={progressBar(pokemon.stats && pokemon?.stats[1]?.base_stat)} size='sm' value={pokemon.stats && pokemon?.stats[1]?.base_stat} borderRadius='10px' bg='transparent'/>
          </td>
          
          </tr>
        <tr>
          <td className='stat-title'>Defense</td> 

          <td className='stat-number'>{pokemon.stats && pokemon?.stats[2]?.base_stat}</td>

          <td className='stat-progress'>
          <Progress colorScheme={progressBar(pokemon.stats && pokemon?.stats[2]?.base_stat)} size='sm' value={pokemon.stats && pokemon?.stats[2]?.base_stat} borderRadius='10px' bg='transparent'/>
          </td>
          
          </tr>
        <tr>
          <td className='stat-title'>Sp. Atk</td> 
          <td className='stat-number'>{pokemon.stats && pokemon?.stats[3]?.base_stat}</td>
          <td className='stat-progress'>
          <Progress colorScheme={progressBar(pokemon.stats && pokemon?.stats[3]?.base_stat)} size='sm' value={pokemon.stats && pokemon?.stats[3]?.base_stat} borderRadius='10px' bg='transparent'/>
          </td>
          
          </tr>
        <tr>
          <td className='stat-title'>Sp. Def</td> 
          <td className='stat-number'>{pokemon.stats && pokemon?.stats[4]?.base_stat}</td>
          <td className='stat-progress'>
          <Progress colorScheme={progressBar(pokemon.stats && pokemon?.stats[4]?.base_stat)} size='sm' value={pokemon.stats && pokemon?.stats[4]?.base_stat} borderRadius='10px' bg='transparent'/>
          </td>
          
          </tr>
        <tr>
          <td className='stat-title'>Speed</td> 
          <td className='stat-number'>{pokemon.stats && pokemon?.stats[5]?.base_stat}</td>
          <td className='stat-progress'>
          <Progress colorScheme={progressBar(pokemon.stats && pokemon?.stats[5]?.base_stat)} size='sm' value={pokemon.stats && pokemon?.stats[5]?.base_stat} borderRadius='10px' bg='transparent'/>
          </td>
          
          </tr>
        <tr>
          <td className='stat-title'>Total</td> 
          <td className='stat-number' style={{fontSize:'16px'}}>{calculateTotal()}</td>
          <td className='stat-progress'>
          </td>
          
          </tr>
          </thead>
          </table>

      </Box>
      </div>

      <div className='details-columm'>
        <div className='details-columm-title'>
        <h2>#0{pokemon.id}</h2>
        <h1 style={{textTransform: 'capitalize'}}>{pokemon.name}</h1> 
        </div>
        <div className="pokemon-type">

            {pokemon.types?.map((type) => {
                return <img src={typePokemon[type.type.name]?.urlImg} key='{pokemon.id}' alt='pokemon-type' />
            })}



        </div>

      <Box w='292px' h='453px' bg='white' borderRadius='8px' padding='24px' display='flex' flexDirection='column' alignItems='flex-start'>
        <Text color='black' fontSize='24px' marginLeft='12px'>Moves:</Text>
        { pokemon.moves &&
          pokemon.moves.splice(5) &&
            pokemon.moves.map((item)=> {
              return <MovesTypes>{item.move.name}</MovesTypes> 
            })}
        </Box>
      </div>

      <div className='details-column' >
      <Box w='270px' h='250px' bg='transparent' borderRadius='12px' position='relative' bottom='350px' >
        <Img src={pokemon.sprites && pokemon.sprites?.other['official-artwork']['front_default']} alt='pokemon '  />
      </Box>
      </div>


    </CardDetails>
    </PokemonDetailPageStyle>
    </>
  )
}
