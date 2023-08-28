import Garagem from './components/Garagem'
import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'

function App() {

  return (
    <>
      <Header />
      
      <main className='container'>
        <Garagem />
      </main>

      <Footer />

    </>
  )
}

export default App
