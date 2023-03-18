import { useContext, useState } from 'react'
import { ColorContext } from '../contexts/ColorContext'
import { PokemonContext } from '../contexts/PokemonContext'
import {
  Flex,
  Box,
  Button,
  Icon,
  Input,
  Tooltip,
  Text,
  Image,
  useBreakpointValue,
  useColorMode,
  chakra,
  shouldForwardProp
} from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import Cards from './Card'
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline
} from 'react-icons/io5'
import pikachuShy from '../assets/pikachuShy.gif'
import pikachuRun from '../assets/pikachuRun.gif'
import { RotateLoader } from 'react-spinners'

const CustomTabs = ({ filteredPokemons, currentPage, setCurrentPage }) => {
  const { getColors } = useContext(ColorContext)
  const { colorMode } = useColorMode()
  const { isLoading, error } = useContext(PokemonContext)
  const transform = useBreakpointValue({ base: 'scale(0.8)', sm: 'scale(1)' })
  const hoverTransform = useBreakpointValue({
    base: 'scale(0.85)',
    sm: 'scale(1.03)'
  })

  const pageSize = useBreakpointValue({
    base: 10,
    lg: 16,
    xl: 20,
    '4xl': 30,
    '5xl': 40
  })

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      setPage('')
    }
  }

  const handleNextPage = () => {
    const totalPages = Math.ceil(filteredPokemons.length / pageSize)
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      setPage('')
    }
  }

  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const currentCards = filteredPokemons.slice(startIndex, endIndex)

  const [page, setPage] = useState('')

  const handlePage = event => {
    const newPage = parseInt(event.target.value, 10)
    if (
      !isNaN(newPage) &&
      newPage > 0 &&
      newPage <= Math.ceil(filteredPokemons.length / pageSize)
    ) {
      setCurrentPage(newPage)
      setPage(event.target.value)
    } else {
      setPage('')
    }
  }

  const [select, setSelect] = useState(null)
  const [selectAnimate, setSelectAnimate] = useState(false)
  const AnimateCard = chakra(motion.div, {
    shouldForwardProp: prop =>
      isValidMotionProp(prop) || shouldForwardProp(prop)
  })

  const cardAnimate = useBreakpointValue({
    base: {
      opacity: 1,
      position: 'fixed',
      zIndex: 'banner',
      top: '38%',
      transform: 'scale(0.9)'
    },
    sm: {
      opacity: 1,
      position: 'fixed',
      zIndex: 'banner',
      top: '45%',
      transform: 'scale(1.1)'
    },
    smm: {
      opacity: 1,
      position: 'fixed',
      zIndex: 'banner',
      top: '41%',
      transform: 'scale(1.2)'
    },
    md: {
      opacity: 1,
      position: 'fixed',
      zIndex: 'banner',
      top: '40%',
      transform: 'scale(1.2)'
    },
    lg: {
      opacity: 1,
      position: 'fixed',
      zIndex: 'banner',
      top: '36%',
      transform: 'scale(1.2)'
    },
    xl: {
      opacity: 1,
      position: 'fixed',
      zIndex: 'banner',
      top: '30%',
      transform: 'scale(1.3)'
    },
    '2xl': {
      opacity: 1,
      position: 'fixed',
      zIndex: 'banner',
      top: '30%',
      transform: 'scale(1.5)'
    },
    '4xl': {
      opacity: 1,
      position: 'fixed',
      zIndex: 'banner',
      top: '28%',
      transform: 'scale(1.7)'
    }
  })

  return (
    <>
      <Flex justify='center' mt='-1em' mb='2em'>
        {currentPage !== 1 ? (
          <Tooltip
            hasArrow
            bg='#1DA1F2'
            label={`Página ${currentPage - 1}`}
            placement='left'
            mr='-1em'
            borderRadius='0.1em'
          >
            <Button
              color='white'
              bg='none'
              _hover={{ bg: 'none', opacity: 1 }}
              opacity={0.3}
              onClick={handlePrevPage}
              cursor='pointer'
              mr='-0.5em'
            >
              <Icon as={IoArrowBackCircleOutline} w={8} h={8} />
            </Button>
          </Tooltip>
        ) : (
          <Box w='3.5em' h={8} />
        )}
        <Input
          textAlign='center'
          type='number'
          placeholder={`Página ${currentPage} de ${Math.ceil(
            filteredPokemons.length / pageSize
          )}`}
          w='9.5em'
          onChange={handlePage}
          value={page}
          color='white'
          borderColor={colorMode === 'light' ? '#8d8d8d' : '#696e76'}
          fontWeight={600}
        />
        {currentPage !== Math.ceil(filteredPokemons.length / pageSize) ? (
          <Tooltip
            hasArrow
            bg='#1DA1F2'
            label={`Página ${currentPage + 1}`}
            placement='right'
            ml='-1em'
            borderRadius='0.1em'
          >
            <Button
              color='white'
              bg='none'
              _hover={{ bg: 'none', opacity: 1 }}
              opacity={0.3}
              onClick={handleNextPage}
              cursor='pointer'
              ml='-0.5em'
            >
              <Icon as={IoArrowForwardCircleOutline} w={8} h={8} />
            </Button>
          </Tooltip>
        ) : (
          <Box w='3.5em' h={8} />
        )}
      </Flex>

      <Flex
        p='2em'
        gap='1.5em'
        wrap='wrap'
        align='center'
        justify='center'
        mt='1em'
      >
        {' '}
        {error ? (
          <Flex align='center' justify='center' direction='column' gap='1em'>
            <Image src={pikachuShy} alt='Pikachu envergonhado'></Image>
            <Text
              fontWeight='bold'
              fontFamily='poppins'
              color='white'
              fontSize='24px'
            >
              Erro de requisição, volte mais tarde!
            </Text>
          </Flex>
        ) : !isLoading ? (
          currentCards.map(pokemon => {
            return (
              <AnimateCard
                initial={{
                  opacity: 1,
                  transformOrigin: 'top'
                }}
                animate={
                  !selectAnimate
                    ? { opacity: 1 }
                    : select !== pokemon.id
                    ? { opacity: 0 }
                    : cardAnimate
                }
                transition={{
                  duration: select !== pokemon.id ? 0.3 : 0.5,
                  ease: 'easeInOut'
                }}
                spacing={4}
                marginBottom={{ base: '-1em', sm: '2em' }}
                transform={transform}
                _hover={{ transform: hoverTransform }}
                key={pokemon.id}                
              >
                <Cards
                  pokemon={pokemon}
                  cardColor={getColors(pokemon.types[0].type.name)}
                  select={() => setSelect(pokemon.id)}
                  setSelectAnimate={setSelectAnimate}
                />
              </AnimateCard>
            )
          })
        ) : (
          <Flex align='center' justify='center' direction='column' gap='1em'>
            <Image src={pikachuRun} alt='Pikachu correndo' w='10em'></Image>
            <Text
              fontWeight='bold'
              fontFamily='poppins'
              color={colorMode === 'light' ? 'light.white' : 'dark.pTitle'}
              fontSize='24px'
              mb='2em'
              textAlign='center'
            >
              Juntando pokémons, aguarde ...
            </Text>
            <RotateLoader color='#1DA1F2' />
          </Flex>
        )}
      </Flex>
    </>
  )
}

export default CustomTabs
