import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Card from './Components/Card';
import { products } from './Data/Data'

function App() {

  return (
    <ChakraProvider>
      {
        products.map( (product) => 
        <Card key={product.id} product={product}/>        
        )                 
      }
    </ChakraProvider>
  );
}

export default App;
