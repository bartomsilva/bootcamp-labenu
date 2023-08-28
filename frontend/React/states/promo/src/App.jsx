import { useState, useId } from 'react'
import './App.css'
import products from './Components/Data'
import * as s from './styledApp'
import { Cards } from './Components/Cards'

function App() {


  const [product, setProduct] = useState(products)

  function genPro(e){
    const nPro = +e.target.innerHTML
    const prevProduct = [...product]
    const statsPro = product[nPro].pro
    prevProduct[nPro].pro=!statsPro
    setProduct(prevProduct)
    console.log(e.target.innerHTML)
  }

  return (
    <>
      <dir>
        <s.Generic>
          {
            product.filter(p => !p.pro).map(p => 
              <Cards key={useId()} prod={p} ></Cards>
            )
          }
        </s.Generic>
        <s.Sold>
          {
            product.filter(p => p.pro).map(p => 
              <Cards key={useId()} prod={p} ></Cards>
            )
          }
        </s.Sold>
        <s.Control>

          {
            product.map( p => (
              <s.Button key={useId()} onClick={(e)=>genPro(e)} pro={p.pro}>{p.cod}</s.Button>
            )
            )

          }

        </s.Control>

      </dir>

    </>
  )
}

export default App
