import { frota } from "./frota"  // importação dos dados
import { Frota } from "./frota"  // importação da Interface

function buscarCarrosPorMarca(frota:Frota[], marca?:string):Frota[] {
  if (marca === undefined) {
    return frota
  }

  return frota.filter(
    (carro) => {
      return carro.marca === marca
    }
  )
}


console.log( buscarCarrosPorMarca(frota,"Fiat") )
