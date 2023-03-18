import { useContext, useState } from 'react'
import { PokedexContext } from '../../contexts/PokedexContext'
import { PokemonContext } from '../../contexts/PokemonContext'
import {
  Text,
  Flex,
  Image,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  useColorMode
} from '@chakra-ui/react'
import { RiseLoader } from 'react-spinners'
import limparPokedex from '../../assets/limparPokedex.gif'
import adeus from '../../assets/adeus.gif'
import mouseWarning from '../../assets/mouseWarning.gif'
import mouseWarning2 from '../../assets/mouseWarning2.gif'

const AlertExcluirAll = ({ isOpen, onClose }) => {
  const { colorMode } = useColorMode()
  const { pokedex, clearPokedex } = useContext(PokedexContext)
  const { addMultPokemon, pokemonsCopytoDetahes } = useContext(PokemonContext)

  const [isConfirmation, setIsConfirmation] = useState(false)
  const [showSecondModalExcluir, setShowSecondModalExcluir] = useState(false)

  const addAllPokedexIdsToPokemon = () => {
    const pokedexNames = pokedex.map(pokemon => pokemon.name)
    const newPokedex = pokemonsCopytoDetahes.filter(pokemon => {
      return pokedexNames.includes(pokemon.name)
    })
    addMultPokemon(newPokedex)
  }

  const alertClearPokedex = () => {
    onClose()
    setIsConfirmation(true)
    setTimeout(() => {
      setIsConfirmation(false)
      setShowSecondModalExcluir(true)
      addAllPokedexIdsToPokemon()
      clearPokedex()
      setTimeout(() => {
        setShowSecondModalExcluir(false)
      }, 1000)
    }, 2000)
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        isCentered
        closeOnOverlayClick={false}
        closeOnEsc={false}
        fontFamily='poppins'
      >
        <ModalOverlay />
        <ModalContent>
          <Flex
            align='center'
            justify='center'
            direction='column'
            borderRadius='12px'
          >
            <ModalHeader>
              <Text
                fontSize='48px'
                color='red'
                fontWeight='900'
                align='center'
                mb='0.5em'
              >
                Atenção!!
              </Text>

              <Image
                src={limparPokedex}
                alt='Pikachu triste'
                borderRadius='1em'
              />
              <Text
                fontSize='24px'
                fontWeight='bold'
                align='center'
                mt='0.5em'
                lineHeight='24px'
                color={colorMode === 'light' ? 'light.white' : 'dark.pTitle'}
              >
                Você realmente quer mandar seus pokémons embora?
              </Text>
            </ModalHeader>

            <ModalFooter mt='-0.5em'>
              <Button
                fontWeight='400'
                bg='#1DA1F2'
                _hover={{
                  boxShadow: 'md',
                  color: 'white',
                  fontWeight: '600',
                  bg: '#1A94DA'
                }}
                mr={3}
                onClick={onClose}
              >
                Não!
              </Button>
              <Button
                bg='#FF6262'
                color='white'
                fontWeight='400'
                _hover={{ boxShadow: 'md', fontWeight: '600', bg: '#ce424e' }}
                onClick={alertClearPokedex}
                cursor={`url(${mouseWarning}), auto`}
                _active={{ cursor: `url(${mouseWarning2}), auto` }}
              >
                Sim!
              </Button>
            </ModalFooter>
          </Flex>
        </ModalContent>
      </Modal>

      <Modal
        onClose={() => setIsConfirmation(false)}
        isOpen={isConfirmation}
        isCentered
        closeOnOverlayClick={false}
        closeOnEsc={false}
      >
        <ModalOverlay />
        <ModalContent borderRadius='xl' p='0.5em' bg='white'>
          <ModalHeader>
            <Flex align='center' justify='center' direction='column'>
              <Flex
                align='center'
                justify='center'
                fontWeight='700'
                fontSize='24px'
                borderRadius='12px'
                direction='column'
                pb='1em'
                fontFamily='poppins'
                fontStyle='bold'
                color='black'
              >
                <Text>Dizendo adeus aos pokemóns!</Text>
                <Image src={adeus} alt='Pikachu adeus' mb='-0.5em' />

                <RiseLoader color='#FF6262' />
              </Flex>
              <Flex align='center' justify='center' gap='0.6em'></Flex>
            </Flex>
          </ModalHeader>
        </ModalContent>
      </Modal>

      <Modal
        onClose={() => setShowSecondModalExcluir(false)}
        isOpen={showSecondModalExcluir}
        isCentered
        closeOnOverlayClick={false}
        closeOnEsc={false}
      >
        <ModalOverlay />
        <ModalContent>
          <Flex
            align='center'
            justify='center'
            direction='column'
            borderRadius='12px'
            w='451px'
            h='222px'
          >
            <Text
              fontWeight='900'
              fontSize='48px'
              fontFamily='poppins'
              fontStyle='bold'
            >
              Oh, no!
            </Text>
            <Flex fontWeight='700' fontSize='20px'>
              <Text fontFamily='poppins' fontStyle='bold'>
                Você não tem mais nenhum pokémon!
              </Text>
            </Flex>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  )
}
export default AlertExcluirAll
