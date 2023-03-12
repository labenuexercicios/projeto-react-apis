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

import { Formatodaimagemdetalhe, Formatodosbasestats } from './Style';
import { Progress } from '@chakra-ui/react'
  
  export default function Carddetalhe(props) {
    // let contador = 0

    // for(let x = 0; x<=6; x++){
    //   contador = contador + props.detalhe.stats[x].base_stat

    //   console.log(contador)
    // }

    return (
        <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w='1400px'
          height="663px"
          direction={{ base: 'column', md: 'row' }}
        //   bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
            <Formatodaimagemdetalhe src={props.detalhe.sprites.front_default}/>
            <Formatodaimagemdetalhe src={props.detalhe.sprites.back_default}/>
            <Formatodosbasestats>
                <h2>Base Stats</h2>
                {/* <ul>
                    <li><Progress colorScheme='green' borderRadius="lg" value={props.detalhe.stats[0].base_stat} /></li>
                </ul> */}
                <section> {props.detalhe.stats[0].stat.name}{props.detalhe.stats[0].base_stat} 
                <Progress colorScheme='green' borderRadius="lg" value={props.detalhe.stats[0].base_stat}/>
                </section>
                <section> {props.detalhe.stats[1].stat.name}{props.detalhe.stats[1].base_stat} 
                <Progress colorScheme='green' borderRadius="lg" value={props.detalhe.stats[1].base_stat}/>
                </section>
                <section> {props.detalhe.stats[2].stat.name}{props.detalhe.stats[2].base_stat} 
                <Progress colorScheme='green' borderRadius="lg" value={props.detalhe.stats[2].base_stat}/>
                </section>
                <section> {props.detalhe.stats[3].stat.name}{props.detalhe.stats[3].base_stat} 
                <Progress colorScheme='green' borderRadius="lg" value={props.detalhe.stats[3].base_stat}/>
                </section>
                <section> {props.detalhe.stats[4].stat.name}{props.detalhe.stats[4].base_stat} 
                <Progress colorScheme='green' borderRadius="lg" value={props.detalhe.stats[4].base_stat}/>
                </section>
                <section> {props.detalhe.stats[5].stat.name}{props.detalhe.stats[5].base_stat} 
                <Progress colorScheme='green' borderRadius="lg" value={props.detalhe.stats[5].base_stat}/>
                </section>


                {/* <Progress value={20} size='xs' colorScheme='pink' borderRadius="lg"/> */}
                {/* <Progress value={80} /> */}
            </Formatodosbasestats>
            {/* <CssdoCarddetalhe> */}
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'}><p>salve</p>
              {/* {props.pokemon.name}
              <p>#{props.pokemon.id}</p> */}
            </Heading>
            <Flex>
                {/* <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                {props.pokemon.types.map((pokemon, index) =>{
                            return(
                                <div key={index}>{pokemon.type.name}</div>
                            )
                        })}
                </Text> */}
            </Flex>
            {/* <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}> */}
              {/* <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}>
                Detalhes
              </Button> */}
              {/* <Button 
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
                Capturar
              </Button> */}
            {/* </Stack> */}
          </Stack>
          <Flex >
            {/* <img src={props.pokemon.sprites.other.dream_world.front_default}/> */}
            {/* <Diminiumargemdaimagem/> */}

          </Flex>
         {/* </CssdoCarddetalhe> */}
        </Stack>
      </Center>
    );
  }