
import { CarroContainer } from './styles'
import { Botao } from '../publicStyled'
export function Carro({ auto, changeCar }) {
  const { model, year, color, flex, addBy, cor } = auto


  return (
    <>
      <CarroContainer color={cor}>
        <h2>{model}</h2>
        <ul>
          <li>Cor: {color}</li>
          <li>Ano: {year}</li>
          <li>Flex: {flex ? 'Sim' : 'Não'}</li>
          <li>Adicionado: {addBy}</li>
        </ul>
      </CarroContainer>
      <Botao onClick={changeCar}>Mudar Carro</Botao>
    </>
  )
}
