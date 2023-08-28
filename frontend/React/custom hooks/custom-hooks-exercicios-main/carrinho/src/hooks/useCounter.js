import { useState } from "react";

export function useCounter(config) {
    /* 
        para utilizar o useCounter, você pode opcionalmente
        informar valores personalizados, são eles:
        
        initial: valor incial - default ( 0 ) 
        min: valor mínimo - default ( -Infinity )
        max: valor máximo - default ( Infinity )
        jump: valor do incremento ou decremento - default ( 1 )

        restrições de uso...
        a) o valor inicial não pode ser menor do que o valor mínimo
        b) o valor inicial não pode ser maior que do que o valor máximo
        c) o valor mínimo não pode ser maior do que o valor máximo
        d) os valores mínimo é máximo não podem ser iguais
        e) o valor do incremento e decremento não pode ser inferior a 1

        em todos os casos será enviado no console uma mensagem de erro, 
        e retornado o no console texto do erro.

    */

    let { initial, min, max, jump } = config

    // inicialização dos valores padrão
    initial = initial ? initial : 0
    min = min ? min : min !== 0 ? -Infinity : min
    max = max ? max : max !== 0 ? Infinity : max
    jump = jump ? jump : 1

    // criando o estado ( contador )
    const [counter, setCounter] = useState(initial)

    const error =(erro)=> {
        console.log(erro)
        return 0
    }


    // verificação de consitência dos dados informados.
    const checkData =()=> {        
        if (initial < min) return (error("o valor inicial não pode ser menor que o mínimo "))
        if (initial > max) return (error("o valor inicial não pode ser maior que o máximo"))
        if (min > max) return (error("o valor mínimo não pode ser maior que o máximo"))
        if (min === max) return (error("o valor mínimo e o maior não podem ser iguais"))
        if (jump < 1) return (error("o valor de incremento e decremento inválido"))
    }
    checkData()

    // Métodos 
    const reset =()=> {
        setCounter(initial)
    }

    const plus =()=> {
        if (counter + jump <= max)
            setCounter(prevState => prevState + jump)
    }

    const minus =()=> {
        if (counter - jump >= min)
            setCounter(prevState => prevState - jump)
    }
   

    return { counter, reset, minus, plus }

}