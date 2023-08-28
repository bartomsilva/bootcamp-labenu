// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const btnText = 'Bart Silva'
  function olaMundo() {
    alert('Olá, mundo!')
  }
  return (
    <>
      <button className='meu-nome' onClick={olaMundo}>Clique em mim {btnText}</button>
    </>


  )
}

export default App
