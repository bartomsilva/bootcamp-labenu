import { useState } from 'react'
import { Garagem } from './Componentes/Garagem'

export default function App() {

  const [name,setName]=useState('Labenu')
  
  return (
    <div className="App">
      <Garagem name={name} setName={setName} />
    </div>
  )
}
