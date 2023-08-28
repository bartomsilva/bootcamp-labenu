import { Garagem } from "./Componentes/Garagem/Garagem";

export default function App() {
  const nome = "Bart Silva";

  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <div className="App">
      <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
    </div>
  );
}