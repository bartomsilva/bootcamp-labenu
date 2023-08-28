import logo from '../../assets/logo.png'
import imgCarRed from '../../assets/carRed.png'
import imgCarGreen from '../../assets/carGreen.png'
import imgCarYellow from '../../assets/carYellow.png'
import imgCarPink from '../../assets/carPink.png'
import { Carro } from "../Carro/Carro";
import { HeaderGaragem, Footer } from "./styledGarage";
import { Button, Estacionamento, GaragemContainer } from "./styledGarage";



export function Garagem(props) {
  return (
    <GaragemContainer>
      <HeaderGaragem>
        <img src={logo}></img>
        <h1>Garagem de {props.nome}</h1>
        <Button onClick={props.mensagemAprentacao}>Mensagem</Button>
      </HeaderGaragem>

      <Estacionamento>
        <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex={"Sim"} img={imgCarRed} />
        <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2020} flex={"Não"} img={imgCarGreen} />
        <Carro adicionadoPor={props.nome} cor={"Amarelo"} ano={2009} flex={"Não"} img={imgCarYellow}/>
        <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} flex={"Sim"} img={imgCarPink}/>
      </Estacionamento>
      
      <Footer>
        <p>styled-components</p>
      </Footer>
    </GaragemContainer>
  );
}
