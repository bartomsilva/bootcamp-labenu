import './App.css';
import { useCounter } from './hooks/useCounter';

function App() {
  const coffee = useCounter({ initial: 10, jump: 1 })
  return (
    <>
      <header>
        <h1>Meu Carrinho</h1>
        <hr/>
      </header>      
      <main className='LoveIt'>
        <h1>Codando com ...</h1>
        <img className='Coffee' src="/cafezinho.png" alt="" />

        <div className="JustBox">
          <h2>cafezinhos: {coffee.counter}</h2>
          <div className='Controls'>
            <button className='Btn Minus' onClick={coffee.minus}></button>
            <button className='Btn Reset' onClick={coffee.reset}></button>
            <button className='Btn Plus' onClick={coffee.plus}></button>
          </div>
          <hr />
        </div>
      </main>
    </>
  );
}

export default App;
