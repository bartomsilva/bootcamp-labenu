
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    //  Sua lógica aqui

    return `No comparador de iqualdade ${a}===${b} é ${a === b}`

}
console.log(checarIgualdade(2, 2));

// c-)Faça uma função chamada "verificaSeEMaior"

function verificaSeEMaior(a, b) {

    return `Na verificação de Maior ${a}>${b} é ${a > b}`

}
console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------
/* 
- Exercício 3 - Condicional - **Cadastro de usuário**
    
    Escreva uma função que receba do usuário **nomeDoUsario**,
     **anoDeNascimento**, **senhaDoUsuario** e **nacionalidade** e
      ****guarde essas informações dentro de um array `usuarios`. 
      Porém só poderão se cadastrar:    
    - Usuários maiores de 18 anos
    - A senha deve ter no mínimo 6 caracteres
    - E que a nacionalidade seja brasileira.
*/
const cadastro = (nameUser, yearBirth, passWord, nationality) => {
    const usuario = []
    //  Sua lógica aqui
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    if (nationality.toLowerCase() != "brasileira") {
        console.log("Negado, apenas brasileiros podem se cadastrar!!!")
        return false
    }
    if (currentYear - yearBirth <= 18) {
        console.log("Negado, o usúario precisa ser maior de 18 anos!!!")
        return false
    }
    if (passWord.length < 6) {
        console.log("Negado, a senha precisar ter no mínimo 6 caracteres!!!")
        return false
    }
    const newUser = {
        name: nameUser,
        yearBirth: yearBirth,
        password: passWord,
        nationality: nationality
    }
    usuario.push(newUser)
    return newUser

}
cadastro("Bart Silva", 1967, "123456", "brasileira")
cadastro("Bart Silva", 1967, "12345", "brasileira")
cadastro("Bart Silva", 1967, "123456", "itliana")
cadastro("Bart Silva", 2020, "123456", "brasileira")


// Exercício 4-----------------------------------------------------------------------------------------------
/* - Exercício 4- Condicional - **Login do usuário**
    
    Escreva uma função que peça uma senha para o usuário e verifique se está é 
    a mesma senha cadastrada por ele.  Dentro da função defina uma senha válida 
     Ex: const senha=”labenu”
    
    - Caso a senha seja válida imprima no console a mensagem (Usuário Logado)
    - Caso a senha seja inválida imprima no console (Senha Inválida)
*/
const login = (passWord) => {
    const login = "labenu"
    const secret = "123456"
    //  Sua lógica aqui
    if (passWord === secret) {
        console.log("Usuário Logado")
        return true
    } else {
        console.log("Senha Inválida")
        return false
    }

}

login("123456");
login("123465");

// Exercício 5----------------------------------------------------------------------------------------------------
/* 
Escreva uma função que receba do usuário seu nome,
 e o nome da vacina que tomou.
  E retorne a mensagens a seguir dependendo da vacina tomada.   

  `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`

Sabendo que as vacinas tem tempos diferentes  para a aplicação da segunda dose crie uma única variável 
‘tempo” que mude seu valor dependendo da vacina informada pelo usuário, faça o mesmo com “data”.

- Coronavac = 28 dias
- Astrazenica = 90 dias
- Pfizer = 90 dias

let tempo = ""
let data = ""


⚠️Atenção: A data pode estar escrita neste formato "01/08/2021" ( o mais simples possível) neste momento do curso.
*/
//// by bart
const dataBr = (date) => {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    // retorna uma string dd/mm/aaaa
    //return day + '/' + month + '/' + year
    return date.toLocaleDateString("pt-br")
}

const primeiraDose = (name, vaccine) => {

    //  Sua lógica aqui
    const vaccines = [
        { name: "coronavac", time: 28 },
        { name: "astrazenica", time: 90 },
        { name: "pfizer", time: 90 }
    ]

    const result = vaccines.find(e => e.name === vaccine.toLowerCase())
    if (typeof result == "undefined") {
        return `Vacina ${vaccine} não encontrada!!!`
    }

    const timeVacine = result.time
    const dateNextDose = new Date()
    dateNextDose.setDate(dateNextDose.getDate() + timeVacine)
    

    return `Olá ${name}! A próxima dose da ${vaccine} é daqui a ${timeVacine} dias. Compareça no posto na data ${dataBr(dateNextDose)}.`

}

console.log(primeiraDose("bart", "covidvac"))
console.log(primeiraDose("bart", "astrazenica"))
console.log(primeiraDose("bart", "coronavac"))


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------
/* 
- Exercício 6 - Loop+Condicional - **Segunda dose**    
    Escreva uma função para validar a segunda dose de um usuário, 
    que receba o nomeDoUsuário e mude o valor da propriedade `imunização` 
    para **“completa”** para isso vamos te fornecer uma lista de usuários.
*/
const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui
    if (!nomeDoUsuario || typeof nomeDoUsuario != "string" || !nomeDoUsuario.trim()) {
        return console.log("Nome inválido!!!")
    }
    const result = usuarios.find( (element,index) => {
        if(element.nome==nomeDoUsuario) {
            usuarios[index].imunizacao="completa"
            return element
        }
    } )
    if(typeof result ==="undefined") return `Usúario não encontrado!!!`
    return `Parabéns ${nomeDoUsuario} sua imunização está completa!!!`

}
console.log(segundaDose("Barbara"));
console.log(segundaDose("Bart"));

// Exercício 7 --------------------------------------------------------------------------------------
/* 
- Exercício 7 -  Loop+Condicional - **Aviso aos atrasados**
    
    As pessoas que tomaram a primeira dose da vacina, não voltaram no postinho para a segunda dose e 
    temos que enviar uma mensagem para elas no app.
    Escreva uma função que **leia a lista de usuários** e **verifique** 
    se a imunização está completa ou não e caso não esteja completa,  **imprima no console** 
    uma mensagem avisando que ele deve voltar ao posto para tomar a segunda dose.

    `Olá ${n.nome}! Sua imunização está ${n.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`
*/
const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    //  Sua lógica aqui
    usuarios.forEach( obj => {
        if(obj.imunizacao==="incompleta") 
            console.log( `Olá ${obj.nome}! Sua imunização está ${obj.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
    } )
}
avisoAosAtrasados()


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroR = () => {
    //  Sua lógica aqui
}
console.log(cadastroR());

const loginR = () => {
    //  Sua lógica aqui
}
console.log(loginR());

const primeiraDoseR = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseR())

const segundaDoseR = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseR("ALGUM NOME AQUI"));

const avisoAosAtrasadosR = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosR());












