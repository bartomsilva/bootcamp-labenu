export default function Carro(props) {

  console.log(props)
  
  return (
    <div className="car">
      <div>
        <h2>{props.car.carName}</h2>
        <ul>
          <li>Cor: {props.car.carColor}</li>
          <li>Ano: {props.car.carYear}</li>
          <li>Flex: {props.car.carFlex ? 'Sim' : 'Não'}</li>
        </ul>
      </div>
      <div className="car-img-container">
        <img src={props.car.carPhoto}/>
      </div>
    </div>
  );
}


