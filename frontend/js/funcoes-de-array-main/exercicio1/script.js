const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// converte todos valores do objeto para Caixa Alta
// all elements ( UPPERCASE )
const returnUpperCaseText = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === "string")
            obj[key] = obj[key].toUpperCase()
    }
    return obj
}

// retorna os valores em uma única linha
// returns the values ​​in a single line 
const returnTextOneLine = (obj) => {
    let result = ""    
    for (let key in obj)
        result += obj[key] + " "

    return result.trim()
}

// recebe um objeto e uma função de callback e imprime o retorno
// receive an object and a callback function and print the return
function testCallBack(obj, fCallBack) {
    const result = fCallBack(obj)
    console.log(result)
}

console.log("---- Texto em Caixa Alta ----")
testCallBack(objeto, returnUpperCaseText)

console.log("\n---- Texto Corrido ----")
testCallBack(objeto, returnTextOneLine)



/* const objCaixaAlta = (obj) => {
    const novoObj = {};
  
    for (let [key, value] of Object.entries(obj)) {
      novoObj[key] = value.toUpperCase();
    }
  
    return novoObj;
  };

  console.log("----",objCaixaAlta(objeto)) */


  