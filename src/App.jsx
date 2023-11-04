import { AppContainer } from "./AppStyle"
import Router from "./Routes/Router"
import GlobalState from './Contexts/GlobalState'


function App() {   

  return (
    <AppContainer>
      <GlobalState>
        <Router/>
      </GlobalState>
    </AppContainer>
  )
}

export default App
