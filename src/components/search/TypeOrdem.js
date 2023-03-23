import { useContext } from 'react'
import { SearchContext } from '../../contexts/SearchContext'
import {
  Select,
  Icon,
  Tooltip,
  Button,
  Center,
  useColorMode
} from '@chakra-ui/react'
import { RxReset } from 'react-icons/rx'
import mousePointerOK from '../../../src/assets/mousePointerOK.png'
import mouseGrab from '../../../src/assets/mouseGrab.png'

const TypeOrdem = ({ pokemons }) => {
  const {
    typeFilter,
    setTypeFilter,
    order,
    setOrder,
    resetTypesSort,
    setCurrentPage
  } = useContext(SearchContext)

  const types = [...new Set(pokemons.map(poke => poke.types))]
  const typeNames = [
    ...new Set(types.flatMap(type => type.map(obj => obj.type.name)))
  ]
  typeNames.sort()

  const handleTypeFilter = e => {
    setTypeFilter(e.target.value)
    setCurrentPage(1)
  }
  const { colorMode } = useColorMode()

  return (
    <Center
      display='flex'
      gap='1em'
      align='center'
      mb={{ base: '0.5em' }}
      direction={{
        base: 'column',
        smm: 'row'
      }}
    >
      <Select
        variant='filled'
        _focus={{
          bg: colorMode === 'light' ? 'light.white' : 'dark.background',
          boxShadow: '0 0 0 2px #1DA1F2',
          border: 'none'
        }}
        color='blue.300'
        w='11.5em'
        name='tipo'
        id='tipo'
        value={typeFilter}
        onChange={handleTypeFilter}
      >
        <option value=''>Selecione um tipo</option>
        {typeNames.map(type => {
          const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1)

          return (
            <option
              key={type}
              value={type}
              style={{ textTransform: 'capitalize' }}
            >
              {capitalizedType}
            </option>
          )
        })}
      </Select>

      <Center>
        <Select
          variant='filled'
          placeholder='Ordenar'
          _focus={{
            bg: colorMode === 'light' ? 'light.white' : 'dark.background',
            boxShadow: '0 0 0 2px #1DA1F2',
            border: 'none'
          }}
          color='blue.300'
          w='8.8em'
          value={order}
          onChange={e => setOrder(e.target.value)}
          mr={{
            base: '0em',
            smm: '1em'
          }}
        >
          <option value='crescente'>Crescente</option>
          <option value='decrescente'>Decrescente</option>
        </Select>
        <Tooltip
          hasArrow
          bg='#1DA1F2'
          label='Resetar filtros!'
          placement='bottom-end'
        >
          <Button
            color='white'
            bg='none'
            _hover={{ bg: 'none', opacity: 1 }}
            opacity={0.3}
            onClick={resetTypesSort}
            ml={{
              base: '0em',
              smm: '-1em'
            }}
          >
            <Icon
              as={RxReset}
              boxSize='1.6em'
              cursor={`url(${mousePointerOK}), auto`}
              _active={{ cursor: `url(${mouseGrab}), auto` }}
            />
          </Button>
        </Tooltip>
      </Center>
    </Center>
  )
}
export default TypeOrdem
