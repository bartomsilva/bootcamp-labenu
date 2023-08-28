import Router from "./routes/Router"
import { GlobalState } from "./global/GlobalState"
import { GlobalContext } from './global/GlobalContext'

function App() {
    
  return (
    <GlobalContext.Provider value = {GlobalState()}>
      <Router/>
    </GlobalContext.Provider>
  )
}

export default App
