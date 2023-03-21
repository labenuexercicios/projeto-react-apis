import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { PokemonContext } from '../../contexts/PokemonContext'
import { ColorContext } from '../../contexts/ColorContext'
import { Text, Flex, Button, Box, Image, Center, Icon } from '@chakra-ui/react'
import { ImArrowLeft, ImArrowRight } from 'react-icons/im'
import mouseNext from '../../../src/assets/mouseNext.png'
import mousePrevious from '../../../src/assets/mousePrevious.png'

const PreviousNextButton = () => {
  const { name } = useParams()
  const navigate = useNavigate()
  const { pokemonsCopytoDetahes } = useContext(PokemonContext)
  const { getColors } = useContext(ColorContext)
  const pokemons = pokemonsCopytoDetahes
  const currentIndex = pokemons.findIndex(poke => poke.name === name)

  const goToPrevious = () => {
    const previousIndex = currentIndex - 1
    if (previousIndex >= 0) {
      const previousName = pokemons[previousIndex].name
      navigate(`/pokemon/${previousName}`)
    }
  }

  const goToNext = () => {
    const nextIndex = currentIndex + 1
    if (nextIndex < pokemons.length) {
      const nextName = pokemons[nextIndex].name
      navigate(`/pokemon/${nextName}`)
    }
  }

  const PreviousIco = () => {
    const previousIndex = currentIndex - 1
    if (previousIndex >= 0) {
      const previousIco =
        pokemons[previousIndex].sprites.versions['generation-iv'][
          'heartgold-soulsilver'
        ].front_default ||
        pokemons[previousIndex].sprites.versions['generation-v']['black-white']
          .front_default

      const previousType = pokemons[previousIndex].types[0].type.name
      const iconUrlP =
        pokemons[previousIndex].sprites.versions['generation-vii'].icons
          .front_default

      return (
        <Flex
          align='center'
          justify='center'
          transform={{ base: 'scale(0.85)', sm: 'scale(1)' }}
          onClick={goToPrevious}
          _hover={{
            '.flex': {
              bg: getColors(previousType),
              borderColor: 'white'
            },
            '& > button': {
              color: getColors(previousType),
              bg: 'white'
            }
          }}
          minWidth='fit-content'
          objectFit='contain'
          cursor={`url(${iconUrlP}), auto`}
          _active={{ cursor: `url(${mousePrevious}), auto` }}
        >
          <Center
            className='flex'
            h='5em'
            w='5em'
            borderRadius='100%'
            border='5px solid'
            borderColor={getColors(previousType)}
            bg='white'
            zIndex={1}
            align='center'
            justify='center'
            p='.4em'
            cursor={`url(${iconUrlP}), auto`}
            _active={{ cursor: `url(${mousePrevious}), auto` }}
          >
            <Image
              src={previousIco}
              cursor={`url(${iconUrlP}), auto`}
              _active={{ cursor: `url(${mousePrevious}), auto` }}
            />
          </Center>

          <Button
            bg={getColors(previousType)}
            maxWidth='fit-content'
            ml='-0.6em'
            color='white'
            cursor={`url(${iconUrlP}), auto`}
            _active={{ cursor: `url(${mousePrevious}), auto` }}
          >
            <Flex
              align='center'
              gap='.6em'
              cursor={`url(${iconUrlP}), auto`}
              _active={{ cursor: `url(${mousePrevious}), auto` }}
            >
              <Icon
                as={ImArrowLeft}
                cursor={`url(${iconUrlP}), auto`}
                _active={{ cursor: `url(${mousePrevious}), auto` }}
              />
              <Text
                mt='-.2em'
                textTransform='capitalize'
                cursor={`url(${iconUrlP}), auto`}
                _active={{ cursor: `url(${mousePrevious}), auto` }}
              >
                {pokemons[previousIndex].name}
              </Text>
            </Flex>
          </Button>
        </Flex>
      )
    } else {
      return <Box />
    }
  }

  const NextIco = () => {
    const nextIndex = currentIndex + 1
    if (nextIndex < pokemons.length) {
      const nextIco =
        pokemons[nextIndex].sprites.versions['generation-iv'][
          'heartgold-soulsilver'
        ].front_default ||
        pokemons[nextIndex].sprites.versions['generation-v']['black-white']
          .front_default

      const nextType = pokemons[nextIndex].types[0].type.name
      const iconUrl =
        pokemons[nextIndex].sprites.versions['generation-vii'].icons
          .front_default

      return (
        <Flex
          align='center'
          justify='center'
          transform={{ base: 'scale(0.85)', sm: 'scale(1)' }}
          onClick={goToNext}
          _hover={{
            '.flex': {
              bg: getColors(nextType),
              borderColor: 'white'
            },
            '& > button': {
              color: getColors(nextType),
              bg: 'white'
            }
          }}
          maxWidth='fit-content'
          cursor={`url(${iconUrl}), auto`}
          _active={{ cursor: `url(${mouseNext}), auto` }}
        >
          <Button
            bg={getColors(nextType)}
            maxWidth='fit-content'
            mr='-0.6em'
            color='white'
            cursor={`url(${iconUrl}), auto`}
            _active={{ cursor: `url(${mouseNext}), auto` }}
          >
            <Flex
              align='center'
              gap='.6em'
              cursor={`url(${iconUrl}), auto`}
              _active={{ cursor: `url(${mouseNext}), auto` }}
            >
              <Text
                mt='-.2em'
                textTransform='capitalize'
                cursor={`url(${iconUrl}), auto`}
                _active={{ cursor: `url(${mouseNext}), auto` }}
              >
                {pokemons[nextIndex].name}
              </Text>
              <Icon
                as={ImArrowRight}
                cursor={`url(${iconUrl}), auto`}
                _active={{ cursor: `url(${mouseNext}), auto` }}
              />
            </Flex>
          </Button>

          <Center
            className='flex'
            h='5em'
            w='5em'
            borderRadius='100%'
            border='5px solid'
            borderColor={getColors(nextType)}
            bg='white'
            zIndex={1}
            align='center'
            justify='center'
            p='.4em'
            cursor={`url(${iconUrl}), auto`}
            _active={{ cursor: `url(${mouseNext}), auto` }}
          >
            <Image
              src={nextIco}
              cursor={`url(${iconUrl}), auto`}
              _active={{ cursor: `url(${mouseNext}), auto` }}
            />
          </Center>
        </Flex>
      )
    } else {
      return <Box />
    }
  }

  return (
    <Flex
      justify='space-between'
      mt='-1em'
      maxW='139em'
      ml='0.5em'
      pl={{ base: '0.5em', smm: '1em', '2xl': '0.5em' }}
      pr='1em'
    >
      {PreviousIco()}
      {NextIco()}
    </Flex>
  )
}
export default PreviousNextButton
