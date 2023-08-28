import { useId } from 'react';
import Garagem from "./Componentes/Garagem";
import "./App.css";
import { nameUsers } from "./Componentes/Data";
import { carG } from "./Componentes/Data";

export default function App() {
  const apresentaGaragem = (name) => {
    alert(`Boas vindas à garagem de ${name}`)
  }

  return (
    <div id='garage' >
      {
        carG.map((cars, index) =>
          <Garagem nameUser={nameUsers[index]} apresentaGaragem={apresentaGaragem} cars={cars} key={useId()} />
        )
      }
    </div>
  );
}

