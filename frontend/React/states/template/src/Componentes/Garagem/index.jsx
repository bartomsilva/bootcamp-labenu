import { useState } from 'react'
import { Carro } from '../Carro'
import { Estacionamento, GaragemContainer } from './styles'
import { Botao } from '../publicStyled'

export function Garagem({ name, setName }) {

  const cars = [
    {
      model: "Fusca",
      color: "Azul",
      year: 1974,
      flex: false,
      addBy: 'labenu',
      cor: 'blue'
    },
    {
      model: 'Ferrari Omologata ',
      year: 2020,
      color: 'Vermelho',
      flex: false,
      addBy: 'Ozemela',
      cor: 'red'
    },
    {
      model: 'Icona Vulcano Titanium',
      year: 2015,
      color: 'Prata',
      flex: false,
      addBy: 'Bart',
      cor: 'grey'
    },
    {
      model: 'Renault Kwid ',
      year: 2023,
      color: 'Azul',
      flex: true,
      addBy: 'Labenu',
      cor: 'blue'
    }
  ]

  const [nome, setNome] = useState('barto')



  const [auto, setAuto] = useState(cars[0])
  const [nAuto, setnAuto] = useState(0)

  function changeName() {

    if (name == 'da Labenu') {
      setName('de Bart')
    } else {
      setName('da Labenu')
    }
  }

  function changeCar() {
    let ncar
    if (nAuto == 3) {
      ncar = 0
      setnAuto(0)
    } else {
      ncar = nAuto + 1
      setnAuto(nAuto + 1)
    }
    setAuto(cars[ncar])
  }

  return (
    <GaragemContainer>
      <h1>{nome}</h1>
      <h1>Garagem {name}</h1>
      <Estacionamento>
        <Botao onClick={changeName}>Mudar nome</Botao>
        <Carro
          auto={auto}
          changeCar={changeCar}
        />
      </Estacionamento>
    </GaragemContainer>

  )
}
