import { Container } from './container'
import { ContextProvider } from './context/contextProvider'

function App() {
  return (
    <ContextProvider>
        <Container />
    </ContextProvider>
  )
}

export default App