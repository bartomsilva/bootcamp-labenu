// função que testa se é um número
function eNumber(numero) {
    // booleanos cai logo fora
    if (typeof numero === "boolean") {
      return false
    }    
    const minhaVar = Number(numero)
    // NaN significa: Não é Número
    // para testar multiplico por 0 
    if (minhaVar * 0 != 0) {
      return false
    } else {
      return true
    }
  }

