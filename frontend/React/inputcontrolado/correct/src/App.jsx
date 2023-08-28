import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [estadoCivil, setEstadoCivil] = useState("");

  const mudarEstadoCivil = (event) => {
     setEstadoCivil(event.target.value);
  };

    return (
      <>
      <p>{estadoCivil}</p>
      <select value={estadoCivil} onChange={mudarEstadoCivil}>
        <option>Solteiro(a)</option>
        <option>Casado(a)</option>
        <option>Viuvó(a)</option>
        <option>Divorciado(a)</option>
      </select>
      </>
    )
}

export default App
