import { Router } from './routes/Router'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './styles/theme'
import PokemonProvider from './contexts/PokemonContext'
import SearchProvider from './contexts/SearchContext'
import ColorProvider from './contexts/ColorContext'
import TypeReturnProvider from './contexts/TypeReturnContext'
import FaviconProvider from './contexts/FaviconContext'
import PokedexProvider from './contexts/PokedexContext'
import AnimateProvider from './contexts/AnimateCoxtext'

function App () {
  return (
    <ChakraProvider theme={theme}>
      <AnimateProvider>
        <PokedexProvider>
          <FaviconProvider>
            <ColorProvider>
              <TypeReturnProvider>
                <SearchProvider>
                  <PokemonProvider>
                    <Router />
                  </PokemonProvider>
                </SearchProvider>
              </TypeReturnProvider>
            </ColorProvider>
          </FaviconProvider>
        </PokedexProvider>
      </AnimateProvider>
    </ChakraProvider>
  )
}
export default App
