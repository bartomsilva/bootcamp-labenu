import Exercicio from "./Componentes/Exercicio";
import Instrucoes from "./Componentes/Instrucoes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Instrucoes />
      <Exercicio />
    </div>
  );
}
