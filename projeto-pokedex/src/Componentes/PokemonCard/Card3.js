import {
    Button,
    Center,
    Flex,
    Heading,
    Stack,
    Text,

  } from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import { Diminiumargemdaimagem, Pokebola } from './Style';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pokebola from "../../Imagens/pngwing 2.png"
import {obj} from '../PegaImagens/Pegaimagens';

  
  export default function Card3(props) {
    const navigate = useNavigate()    

    console.log(props.pokemonsEscolhidos)

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
          <Center py={6} >
            <Stack position='relative' 
              borderRadius="lg"
              w={{ sm: '100%', md: '440px' }}
              height={{ sm: '100%', md: '210' }}
              direction={{ base: 'column', md: 'row' }}
            //   bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'} backgroundColor = '#729F92'
              padding={4}>
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                pt={2}>
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                <p>#{props.pokemon.id}</p>
                  {props.pokemon.name}
                </Heading>
                <Flex>
                    <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                      </Text>
                    {/* {props.pokemonsEscolhidos.types.map((pokemonachado, index) =>{
                          return (<img key={index} src={obj[pokemonachado.type.name]}></img>)
                    })
                  } */}
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
                  <Button onClick={()=>RemoverPokemon(props.pokemon.id, props.pokemonsEscolhidos)}
                  position = 'relative'
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'red.400'}
                    color={'white'}
                    boxShadow={
                      '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                      bg: 'red',
                    }}
                    _focus={{
                      bg: 're.500',
                    }}>
                    Excluir
                  </Button>
                </Stack>
              </Stack>
              <Pokebola src={pokebola}></Pokebola>
            <Flex >
            {/* <img src={props.pokemon.sprites.other.dream_world.front_default}/> */}
            <Diminiumargemdaimagem src={props.pokemon.sprites.other['official-artwork'].front_default}/>

          </Flex>
            </Stack>
          </Center>
        )
        
  }