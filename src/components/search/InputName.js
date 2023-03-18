import { useContext } from 'react'
import { SearchContext } from '../../contexts/SearchContext'
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Button,
  Tooltip,
  useColorMode
} from '@chakra-ui/react'
import { SearchIcon, SmallCloseIcon } from '@chakra-ui/icons'
import mousePointerOK from '../../../src/assets/mousePointerOK.png'
import mouseGrab from '../../../src/assets/mouseGrab.png'

const InputName = () => {
  const { nameSearch, setNameSearch, resetFilterByName, setCurrentPage } =
    useContext(SearchContext)

  const handleNameSearch = e => {
    setNameSearch(e.target.value)
    setCurrentPage(1)
  }
  const { colorMode } = useColorMode()

  return (
    <InputGroup w='15em'>
      <InputLeftElement
        children={<SearchIcon color='blue.300' opacity={0.7} />}
      />
      <Input
        placeholder='Pokemon...'
        _placeholder={{ opacity: 0.5, color: 'blue.300' }}
        type='text'
        size='md'
        focusBorderColor='blue.400'
        _focus={{
          bg: colorMode === 'light' ? 'light.white' : 'dark.background'
        }}
        onChange={handleNameSearch}
        value={nameSearch}
        color='blue.400'
        fontWeight={600}
        border='none'
        bg={colorMode === 'light' ? 'light.white' : 'dark.button'}
      />
      <InputRightElement        
        children={
          <Tooltip
            hasArrow
            bg='#1DA1F2'
            label='Resetar nome!'
            placement='bottom-start'
          >
            <Button
              color='#1DA1F2'
              bg='none'
              _hover={{ bg: 'none', opacity: 1 }}
              opacity={0.3}
              onClick={resetFilterByName}
              ml='-1em'
            >
              <SmallCloseIcon
                boxSize={6}
                cursor={`url(${mousePointerOK}), auto`}
                _active={{ cursor: `url(${mouseGrab}), auto` }}
              />
            </Button>
          </Tooltip>
        }
      />
    </InputGroup>
  )
}
export default InputName
