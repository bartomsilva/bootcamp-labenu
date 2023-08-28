// let nacionalidade //= adicione o prompt aqui
//const nacionalidade = prompt("Escreva aqui sua nacionalidade")


const checkNacionalidade = (nacioNalidade) => {
    
    // converte tudo para minusculas 
    nacioNalidade = nacioNalidade.toLowerCase()
    
    if ( nacioNalidade === "brasileira") {
        console.log(nacioNalidade)
    } else if ( nacioNalidade === "argentina") {
        console.log(nacioNalidade)
    } else if ( nacioNalidade === "uruguaia") {
        console.log(nacioNalidade)
    } else if ( nacioNalidade === "chilena") {
        console.log(nacioNalidade)
    } else if ( nacioNalidade === "colombiana") {
        console.log(nacioNalidade)
    } else {
        console.log("nacionalidade não encontrada")
    } 
}

//checkNacionalidade(nacionalidade)

const checkNacionalidade2=(nacionaLidade)=>{
    const nValidas="brasileira.argentina.uruguaia.chilena.colombiana"
    if (nValidas.includes(nacionaLidade.toLowerCase())){
        console.log("nacionalidade,",nacionaLidade," ok")
    } else {
        console.log("nacionalidade",nacionaLidade,"não permitida")
    }
}
checkNacionalidade2("mexixana")
