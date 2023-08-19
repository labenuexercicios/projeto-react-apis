import {
    Button,
    Flex,
    Heading,
    Stack
  } from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import { Cardresponsivo, Diminiumargemdaimagem, Pokebola, Separarostipes } from './Style';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pokebola from "../../Imagens/pngwing 2.png"
import {obj} from '../PegaImagens/Pegaimagens';
import { useEffect } from 'react';

  
  export default function Card3(props) {
    const navigate = useNavigate()    


    useEffect(()=>{
      const listaDeitensstorage2 = JSON.parse(localStorage.getItem("Pokemons escolhidos"))
      if(listaDeitensstorage2){
       props.setPokemonsEscolhidos(listaDeitensstorage2)
      }
    },[])


    const RemoverPokemon = (id, pokemonsEscolhidos) =>{

        const carrinhoComItem = pokemonsEscolhidos.find((item) => item.id === id);
        console.log(carrinhoComItem)

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
        console.log(novoarray)

        localStorage.setItem("Pokemons Lista nova", JSON.stringify(novoarray))

        if(props.pokemonsEscolhidos.length === 1){
          localStorage.removeItem("Pokemons escolhidos");
        }

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
    console.log(props.pokemonsEscolhidos)
    localStorage.setItem("Pokemons escolhidos", JSON.stringify(props.pokemonsEscolhidos))
    

    const Detalhespokemon = () =>{
      localStorage.setItem("Pokemons para detalhes", JSON.stringify(props.pokemon))
      props.setDetalhe(props.pokemon)
      props.setPokemonsEstanosEscolhidos(true)
      navigate("/cap")

    }


    return (
          <Cardresponsivo py={6} >
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
                <Heading  fontSize={'2xl'} fontFamily={'body'} color= 'white' mb='10px'>
                <Heading fontSize={15} >
                {props.pokemon.id <10 ? (
                <p>#0{props.pokemon.id}</p>
              ) :
              (
                <p>#{props.pokemon.id}</p>
              )}
                </Heading>

                  {props.pokemon.name[0].toUpperCase()+props.pokemon.name.substr(1)}
                </Heading>
                <Flex >
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
            <Diminiumargemdaimagem src={props.pokemon.sprites.other['official-artwork'].front_default}/>

          </Flex>
            </Stack>
          </Cardresponsivo>
        )
        
  }