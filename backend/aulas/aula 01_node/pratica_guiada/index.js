import { countries } from './countries.js'

let country_ = process.argv[2];
let countryAcronym = process.argv[3];
const countryAction = process.argv[4];


if (!country_) {
  console.log("informe o nome do pais")

} else if (countryAction!=="add") {
  
  const resultFind = countries.filter((country) => country.name.toLowerCase().startsWith(country_.toLowerCase()))

  if (resultFind.length > 0) {
    console.log(resultFind)
  } else {
    console.log(`não encontrei nenhuma ocorrencia de ${country_}`)
  }
} else {
  
    country_ = process.argv[5];
    countryAcronym = process.argv[6];

    if(countryAcronym && country_){
      countries.push({
        "name":country_,
        "code":countryAcronym
      })      
      console.log(`o pais ${country_}/${countryAcronym} com sucesso!`)
      countries.sort( function(countryA,countryB) {
        if( countryA.name > countryB.name){
          return 1
        }
        if( countryA.name < countryB.name){
          return -1
        }
        return 0       
      })
      console.log(countries)
    } else {
      console.log("informe o nome do pais, sigla add")
    }
}


