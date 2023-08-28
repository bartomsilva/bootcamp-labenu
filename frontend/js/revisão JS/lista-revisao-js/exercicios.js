// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length

}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    // sem usar reverse() 
    const newArray = []
    for (let index = array.length - 1; index >= 0; index--) {
        newArray.push(array[index])
    }
    array = newArray
    return array
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    // sem usar o sort()
    let valAux = 0
    for (let a in array) {
        for (let b in array) {
            if (array[a] < array[b]) {
                valAux = array[b]
                array[b] = array[a]
                array[a] = valAux
            }
        }
    }
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    //sem usar o filter()
    const newArray = []
    for (const value of array) {
        if (value % 2 === 0) newArray.push(value)
    }
    return newArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    // FILTER E MAP 
    const newArray = array.filter(e => e % 2 === 0).map(e => e ** 2)
    return newArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max(...array)

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const obj = {}
    if (num1 > num2) {
        obj.maiorNumero = num1
        obj.maiorDivisivelPorMenor = num1 % num2 === 0
        obj.diferenca = num1 - num2
    } else {
        obj.maiorNumero = num2
        obj.maiorDivisivelPorMenor = num2 % num1 === 0
        obj.diferenca = num2 - num1
    }
    return obj
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let result = []
    cont = 0
    while (result.length < n) {
        if (cont % 2 === 0) result.push(cont)
        cont++
    }
    return result
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let result = ""
    if (ladoA == ladoB && ladoA == ladoC) {
        result = "Equilátero"
    } else if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC) {
        result = "Escaleno"
    } else {
        result = "Isósceles"
    }
    return result
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const newArray = []
    array = array.sort((a, b) => a - b)
    newArray.push(array[array.length - 2])
    newArray.push(array[1])
    return newArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let atores = filme.atores.toString().replaceAll(",", ", ")
    let result = "Venha assistir ao filme " + filme.nome + ", de " + filme.ano + ", dirigido por " +
        filme.diretor + " e estrelado por " + atores + "."
    return result
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    novaPessoa = { ...pessoa, nome: "ANÔNIMO" }
    return (novaPessoa)
}


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter(e => e.altura > 1.5 &&
        (e.idade > 14 && e.idade < 60))
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter(e => !(e.altura > 1.5 &&
        (e.idade > 14 && e.idade < 60)))
}


// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.forEach(obj => {
        obj.saldoTotal -= obj.compras.reduce( (acc, vAtual)  => acc +vAtual , 0 )
        obj.compras = []     
    })
    return contas 
} 


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const newConsultas = [...consultas]
    newConsultas.sort((a, b) => a.nome > b.nome ? 1 : a.nome < b.nome ? -1 : 0)
    return newConsultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    const consulta = [...consultas]
    consulta.sort(function (a, b) {
        a = a.dataDaConsulta.substring(6, 10) + a.dataDaConsulta.substring(3, 5) + a.dataDaConsulta.substring(0, 2)
        b = b.dataDaConsulta.substring(6, 10) + b.dataDaConsulta.substring(3, 5) + b.dataDaConsulta.substring(0, 2)
        if (a > b) {
            return 1 // a é maior 
        } else {
            return -1  // a é menor
        }
    })
    return consulta
}


