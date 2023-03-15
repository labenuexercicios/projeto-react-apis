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

import { Alinharositens, Formatodaimagemdetalhe, Formatodosbasestats, Formatodosbasestats2, Imagensdodetalhe, Quadradodostats, Tamanhodopokemon } from './Style';
import { Progress } from '@chakra-ui/react'
import { backobj, obj } from '../PegaImagens/Pegaimagens';
  
  export default function Carddetalhe(props) {
    console.log(props.detalhe)
    const background = props.detalhe.types.map((pokemonachado) =>{
      return backobj[pokemonachado.type.name]
      })

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
              <Text fontSize={40} as='abbr'>Base stast</Text>
                <section> Hp {props.detalhe.stats[0].base_stat} 
                <Progress colorScheme='orange' borderRadius="lg" value={props.detalhe.stats[0].base_stat}/>
                </section>
                <section> {props.detalhe.stats[1].stat.name}{props.detalhe.stats[1].base_stat} 
                <Progress colorScheme='orange' borderRadius="lg" value={props.detalhe.stats[1].base_stat}/>
                </section>
                <section> {props.detalhe.stats[2].stat.name}{props.detalhe.stats[2].base_stat} 
                <Progress colorScheme='orange' borderRadius="lg" value={props.detalhe.stats[2].base_stat}/>
                </section>
                <section> {props.detalhe.stats[3].stat.name}{props.detalhe.stats[3].base_stat} 
                <Progress colorScheme='orange' borderRadius="lg" value={props.detalhe.stats[3].base_stat}/>
                </section>
                <section> {props.detalhe.stats[4].stat.name}{props.detalhe.stats[4].base_stat} 
                <Progress colorScheme='orange' borderRadius="lg" value={props.detalhe.stats[4].base_stat}/>
                </section>
                <section> {props.detalhe.stats[5].stat.name}{props.detalhe.stats[5].base_stat} 
                <Progress colorScheme='orange' borderRadius="lg" value={props.detalhe.stats[5].base_stat}/>
                </section>
            </Formatodosbasestats>
            <Alinharositens>

            <Text color='white'>#{props.detalhe.id}</Text>
            <Text color='white' fontSize={'4xl'}>{props.detalhe.name[0].toUpperCase()+props.detalhe.name.substr(1)}</Text>
            <Tamanhodopokemon>

            {props.detalhe.types.map((pokemonachado, index) =>{
              return (<img key={index} src={obj[pokemonachado.type.name]}></img>)
                })
              }
            </Tamanhodopokemon>
            <Formatodosbasestats2>
              <Text fontSize={40} as='abbr'>Moves</Text>
              <Quadradodostats  >
              {props.detalhe.moves.map((pokemonachado, index) =>{
                return (<Quadradodostats key={index}>{pokemonachado.move.name}</Quadradodostats>)
                      // for(let x = 0; x < 4; x++){
                      // }
                    })
                  }
              </Quadradodostats>
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