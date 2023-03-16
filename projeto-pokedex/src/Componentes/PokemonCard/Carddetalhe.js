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

import { Alinharositens, Espacoentreositens, Espacoentreostipos, Espaçoentreositens, Formatodaimagemdetalhe, Formatodosbasestats, Formatodosbasestats2, Imagensdodetalhe, Quadradodostats, Tamanhodopokemon } from './Style';
import { Progress } from '@chakra-ui/react'
import { backobj, obj } from '../PegaImagens/Pegaimagens';
  
  export default function Carddetalhe(props) {
    console.log(props.detalhe)
    let nomes = []
    let x = 0
    const background = props.detalhe.types.map((pokemonachado) =>{
      return backobj[pokemonachado.type.name]
      })

      for(x; x<=3; x++){
       nomes.unshift(props.detalhe.moves[x].move.name)
      }

    return (

      <div>

        <Center py={6} position = 'relative'>
        <Stack
        backgroundColor= {background}
          borderWidth="1px"
          borderRadius="lg"
          w='1389.14px'
          height="663px"
          direction={{ base: 'column', md: 'row' }}
        //   bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>

            <Imagensdodetalhe>
            <Formatodaimagemdetalhe src={props.detalhe.sprites.versions["generation-v"]["black-white"].animated.front_default}/>
            <Formatodaimagemdetalhe src={props.detalhe.sprites.versions["generation-v"]["black-white"].animated.back_default}/>
            </Imagensdodetalhe>


            <Formatodosbasestats>
              <Text fontSize={40} as='b'>Base stast</Text>
                <section as ='b'> Hp: <b>{props.detalhe.stats[0].base_stat}</b>
                <Progress colorScheme='orange' borderRadius="lg" value={props.detalhe.stats[0].base_stat}/>
                </section>
                <section> Attak: <b>{props.detalhe.stats[1].base_stat}</b>
                <Progress colorScheme='orange' borderRadius="lg" value={props.detalhe.stats[1].base_stat}/>
                </section>
                <section> Defense: <b>{props.detalhe.stats[2].base_stat}</b>
                <Progress colorScheme='orange' borderRadius="lg" value={props.detalhe.stats[2].base_stat}/>
                </section>
                <section> Sp.atk: <b>{props.detalhe.stats[3].base_stat}</b>
                <Progress colorScheme='orange' borderRadius="lg" value={props.detalhe.stats[3].base_stat}/>
                </section>
                <section> Sp.def: <b>{props.detalhe.stats[4].base_stat}</b>
                <Progress colorScheme='orange' borderRadius="lg" value={props.detalhe.stats[4].base_stat}/>
                </section>
                <section> Speed: <b>{props.detalhe.stats[5].base_stat}</b> 
                <Progress colorScheme='orange' borderRadius="lg" value={props.detalhe.stats[5].base_stat}/>
                </section>
            </Formatodosbasestats>
            <Alinharositens>

            <Text as='b' color='white'>
              {props.detalhe.id < 10? (
                <p>#0{props.detalhe.id}</p>
              ) :(
                <p>#{props.detalhe.id}</p>
              )}
              </Text>
            <Text as='b' color='white' fontSize={'4xl'}>{props.detalhe.name[0].toUpperCase()+props.detalhe.name.substr(1)}</Text>
            <Tamanhodopokemon>

            {props.detalhe.types.map((pokemonachado, index) =>{
              return (<Espacoentreostipos key={index} src={obj[pokemonachado.type.name]}></Espacoentreostipos>)
                })
              }
            </Tamanhodopokemon>
            <Formatodosbasestats2>
              <Text fontSize={40} as='b'>Moves</Text>
              {nomes.map((pokemonachado) =>{
              return (<Espacoentreositens><Quadradodostats>{pokemonachado[0].toUpperCase()+pokemonachado.substr(1)}</Quadradodostats></Espacoentreositens>)
                })
              }
            </Formatodosbasestats2>
            </Alinharositens>
          <Stack
          position='relative'
            flex={1}
            top={-200}
            mt={100}
            padding={19}
            >
              <img src={props.detalhe.sprites.other['official-artwork'].front_default}></img>
          </Stack>
        </Stack>
      </Center>
      </div>
    );
  }