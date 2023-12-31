import { ChakraProvider } from '@chakra-ui/react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <Button onClick={()=>alert('Button Chakra ok!')}/>
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
