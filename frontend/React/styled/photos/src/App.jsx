import { useState } from 'react'
import './App.css'
import { Requireable } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

export default function App() {
  const [count, setCount] = useState(0)

  const buscaImagens = () => {
    const arrRetorno = []
    var nImagem = ''
    for (let ind = 1; ind <= 10; ind++) {
      nImagem = '../public/' + ind + '.jpg'
      arrRetorno.push(nImagem)
    }
    return arrRetorno

  }
  const arr = buscaImagens()
  console.log(arr)

  return (
    <>
      <div ic='container-photo'>
        {arr.map(e => <img src={e}></img>)}
      </div>

    </>
  )
}


