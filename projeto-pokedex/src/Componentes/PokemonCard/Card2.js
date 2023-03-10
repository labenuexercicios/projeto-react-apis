import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure,
  } from '@chakra-ui/react';
import { wrap } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Diminiumargemdaimagem } from './Style';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  
  export default function Card2(props) {
    const navigate = useNavigate()
    // const [detalhe, setDetalhe] = useState([])

    // console.log(props.pokemon.id)

    const adicionapokemon = (id) =>{
      toast.success("Seu pc ta com virus!Parabéns vc instalou o .bin com sucesso!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      console.log("to aqui")
      // console.log(props.pokemon.id)
      // console.log(id)
      // Salva em pokemons o pokemon que foi clicado
     
     
     
      const pokemons = props.pokemonsEscolhidos.find((item) => item.id === id)
      // console.log(props.pokemonsEscolhidos)
      // console.log(pokemons)

      //Se existe o pokemon
      if(pokemons){
        // alert("Pokemon ja capturado")
      }
      else{
          const itemencontrado = props.pokemons.filter((item) => item.id === id);
          const novoItem = { ...itemencontrado[0],  amount: 1 };
          const novaLista = [...props.pokemonsEscolhidos, novoItem];
          props.setPokemonsEscolhidos(novaLista)
          localStorage.setItem("Pokemons escolhidos", JSON.stringify(props.pokemonsEscolhidos))
  
      }
 
    }

    useEffect(()=>{
        localStorage.setItem("Pokemons escolhidos", JSON.stringify(props.pokemonsEscolhidos))
    },[props.pokemonsEscolhidos])

    const Detalhespokemon = () =>{
      // props.setDetalhe(props.pokemon)
      navigate("/cap")
      // console.log(props.pokemon)
      props.setDetalhe(props.pokemon)

    }

    // console.log(props.pokemon.name)
    return (

      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '440px' }}
          height={{ sm: '100%', md: '210' }}
          direction={{ base: 'column', md: 'row' }}
        //   bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {props.pokemon.name}
              <p>#{props.pokemon.id}</p>
            </Heading>
            <Flex>
                <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                {props.pokemon.types.map((pokemon, index) =>{
                            return(
                                <div key={index}>{pokemon.type.name}</div>
                            )
                        })}
                </Text>
            </Flex>
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
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
              <Button onClick={() => adicionapokemon(props.pokemon.id)} 
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}>
                {/* <Alert status='success'>
                  <AlertIcon />
                 Data uploaded to the server. Fire on!
                </Alert> */}
                Capturar
                
              </Button>
            </Stack>
          </Stack>
          <Flex >
            {/* <img src={props.pokemon.sprites.other.dream_world.front_default}/> */}
            <Diminiumargemdaimagem src={props.pokemon.sprites.other['official-artwork'].front_default}/>

          </Flex>
        </Stack>
      </Center>
    );
  }