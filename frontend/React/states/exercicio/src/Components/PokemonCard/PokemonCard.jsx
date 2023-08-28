import { Card, PokemonName, PokemonType, EvolveButton } from './styles'

const PokemonCard = (props) => {

  const evolvePokeMon = (e) => {
    const prevState = [...props.pokeMon]
    const id = +e.target.id[2]
    prevState[id].evolved = prevState[id].evolved ? false : true
    props.setPokeMon(prevState)
  }
  
  let { name, type, evolved, weigth, color, image, id } = props.pokeMon[props.index]

  return (
    <Card color={color} evolved={evolved}>
      <img src={!evolved ? image[0] : image[1]} alt={`Pokemon`} />
      <PokemonName>{!evolved ? name[0] : name[1]}</PokemonName>
      <PokemonType>{!evolved ? type[0] : type[1]}</PokemonType>
      <p>{!evolved ? weigth[0] : weigth[1]}kg</p>
      <EvolveButton id={'pm' + id} onClick={(e) =>
          evolvePokeMon(e)} evolved={evolved}>
          {!evolved ? 'Evoluir!' : 'Evoluido!'}
      </EvolveButton>
    </Card>    
  )
}

export default PokemonCard