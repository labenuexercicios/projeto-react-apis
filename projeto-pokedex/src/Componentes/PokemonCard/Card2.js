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
import { wrap } from 'framer-motion';
import { useEffect } from 'react';
  
  export default function Card2(props) {

    const Adicionapokemon = () =>{
        props.setPokemonsEscolhidos([... props.pokemonsEscolhidos, props.pokemon])
        // localStorage.setItem("Pokemons escolhidos", JSON.stringify(props.pokemonsEscolhidos))

    }

    useEffect(()=>{
        localStorage.setItem("Pokemons escolhidos", JSON.stringify(props.pokemonsEscolhidos))
    },[props.pokemonsEscolhidos])


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
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}>
                Detalhes
              </Button>
              <Button onClick={Adicionapokemon}
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
              </Button>
            </Stack>
          </Stack>
          <Flex flex={1} w={193} h={193} position ='relative' mb={20000}>
            {/* <img src={props.pokemon.sprites.other.dream_world.front_default}/> */}
            <Image
            //   objectFit="cover"
            //   boxSize="100%"
              src={props.pokemon.sprites.other.dream_world.front_default}
            />
          </Flex>
        </Stack>
      </Center>
    );
  }