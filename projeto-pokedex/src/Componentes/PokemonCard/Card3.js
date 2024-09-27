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
  } from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import { Diminiumargemdaimagem } from './Style';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
  export default function Card3(props) {
    const navigate = useNavigate()    
    // console.log(props.pokemonsEscolhidos)

    const RemoverPokemon = (id, pokemonsEscolhidos) =>{

        const carrinhoComItem = pokemonsEscolhidos.find((item) => item.id === id);

        const novoarray = props.pokemons

        novoarray.splice(id - 1, 0, carrinhoComItem)
        novoarray.sort(function(a,b) {
          if(a.id < b.id){
            return -1
          }
          if(a.id > b.id){
            return 1
          }
        })
        props.setPokemons(novoarray)



        const carrinhoSemItem = pokemonsEscolhidos.filter((item) => item.id !== id);

        props.setPokemonsEscolhidos(carrinhoSemItem)
        toast.success("Pokemon excluido com sucesso!", {
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

    const Detalhespokemon = () =>{
      props.setDetalhe(props.pokemon)
      props.setPokemonsEstanosEscolhidos(true)
      // console.log("vo usar na pag cap:",props.pokemon)
      navigate("/cap")


    }


    return (
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '440px' }}
          height={{ sm: '100%', md: '210' }}
          direction={{ base: 'column', md: 'row' }}
        //   bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'} backgroundColor = 'white'
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
            {/* <Text
            textAlign={'center'}
            //   color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              Actress, musician, songwriter and artist. PM for work inquires or
              <Link href={'#'} color={'blue.400'}>
                #tag
              </Link>
              me in your posts
            </Text> */}
            {/* <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                // bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                #art
              </Badge>
              <Badge
                px={2}
                py={1}
                // bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                #photography
              </Badge>
              <Badge
                px={2}
                py={1}
                // bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                #music
              </Badge>
            </Stack> */}
  
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
              <Button onClick={()=>RemoverPokemon(props.pokemon.id, props.pokemonsEscolhidos)}
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
                Excluir
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