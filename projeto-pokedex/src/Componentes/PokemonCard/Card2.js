import {
    Button,
    Flex,
    Heading,
    Stack
  } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cardresponsivo, Diminiumargemdaimagem, Headerdocardresponsivo, Pokebola, Separarostipes } from './Style';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pokebola from "../../Imagens/pngwing 2.png"
import {backobj, colorofbutton, obj} from '../PegaImagens/Pegaimagens';

  
  export default function Card2(props) {

    const navigate = useNavigate()

    const Adicionapokemon = (id) =>{
     
      const pokemons = props.pokemonsEscolhidos.find((item) => item.id === id)

      //Se existe o pokemon
      if(pokemons){
      }
      else{
          const itemencontrado = props.pokemons.find((item) => item.id === id);
          const novoItem = { ...itemencontrado,  amount: 1 };
          const novaLista = [...props.pokemonsEscolhidos, novoItem];
          props.setPokemonsEscolhidos(novaLista)
          toast.success("Pokemon capturado com sucesso!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
  
      }

      const carrinhoSemItem = props.pokemons.filter((item) => item.id !== id);
      props.setPokemons(carrinhoSemItem)
      localStorage.setItem("Pokemons Lista nova", JSON.stringify(carrinhoSemItem))
 
    }

    useEffect(()=>{
        localStorage.setItem("Pokemons escolhidos", JSON.stringify(props.pokemonsEscolhidos))
    },[props.pokemonsEscolhidos])

    const Detalhespokemon = () =>{
      navigate("/cap")
      props.setDetalhe(props.pokemon)

    }

    const background = props.pokemon.types.map((pokemonachado) =>{
      return backobj[pokemonachado.type.name]
      })

      const colorofbutton2 = props.pokemon.types.map((pokemonachado) =>{
        return colorofbutton[pokemonachado.type.name]
        })

    


    return (

      <Cardresponsivo py={6} >
        <Stack position='relative'
          borderRadius="lg"
          w={{ sm: '100%', md: '440px' }}
          height={{ sm: '100%', md: '210' }}
          direction={{ base: 'column', md: 'row' }}
        //   bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          
          backgroundColor={background}
          padding={4}>
          
          <Stack 
            flex={1}
            flexDirection="column"
            justifyContent="center"
            pt={2}>
            <Heading  fontSize={'2xl'} fontFamily={'body'} color= 'white' mb='10px'>
            <Headerdocardresponsivo fontSize={15} >
                {props.pokemon.id <10 ? (
                <p>#0{props.pokemon.id}</p>
              ) :
              (
                <p>#{props.pokemon.id}</p>
              )}
                </Headerdocardresponsivo>
              {props.pokemon.name[0].toUpperCase()+props.pokemon.name.substr(1)}
            </Heading>
            <Flex>
                {props.pokemon.types.map((pokemonachado, index) =>{
                          return (<Separarostipes key={index} src={obj[pokemonachado.type.name]}></Separarostipes>)
                    })
                  }
            </Flex>
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              // padding={2}
              gap='40px'
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Button onClick={Detalhespokemon}
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}>
                Detalhes
              </Button>
              <Button onClick={() => Adicionapokemon(props.pokemon.id)} 
                position = 'relative'
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={`${colorofbutton2}.600`}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: colorofbutton2,
                }}
                _focus={{
                  bg: colorofbutton2,
                }}>
                Capturar
              </Button>
            </Stack>
          </Stack>
          <Pokebola src={pokebola}></Pokebola>
          <Flex >
            <Diminiumargemdaimagem src={props.pokemon.sprites.other['official-artwork'].front_default}/>

          </Flex>
        </Stack>
      </Cardresponsivo>
    );
  }