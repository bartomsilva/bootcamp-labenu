"use strict"

let usLetter = [] // cartãs do usuário
let pcLetter = [] // cartas do computador
let usPoints = 0  // pontos do usuário
let pcPoints = 0  // pontos do computador
let ncarta = 0    // número da carta ( sequencial )  

// adiciona eventos de click ao botões
document.querySelector("#b1").addEventListener("click",()=>startGame())
document.querySelector("#b3").addEventListener("click",()=>usNewLetter())
document.querySelector("#b4").addEventListener("click",()=>pcNewLetter())

// inicio do jogo
function startGame() {
 
    // remove as cores do escore
    document.querySelector('#scoreUser').classList.remove('red')
    document.querySelector('#scorePc').classList.remove('red')
    document.querySelector('#scoreUser').classList.remove('green')
    document.querySelector('#scorePc').classList.remove('green')
    document.querySelector('#scoreUser').classList.remove('yellow')
    document.querySelector('#scorePc').classList.remove('yellow')
    //element.classList.replace('', '')
    
    // apaga todas cartas do jogo anterior
    document.getElementById('user').remove()
    document.getElementById('pc').remove()

    // exibe mesa do usário limpa
    let objWin = document.querySelector('#container')
    let newDiv = document.createElement("div")
    newDiv.classList.add('mesa')
    newDiv.classList.add('flex')
    newDiv.setAttribute('id', 'user')
    objWin.appendChild(newDiv)
    
    // exibe mesa do computador limpa
    objWin = document.querySelector('#container')
    newDiv = document.createElement("div")
    newDiv.classList.add('mesa')
    newDiv.classList.add('flex')
    newDiv.setAttribute('id', 'pc')
    objWin.appendChild(newDiv)

    // texto inicial do score
    document.querySelector("#alert").innerHTML=`Pense com Cuidado na sua jogada!!!`
    document.querySelector("#scoreUser").innerHTML=``
    document.querySelector("#scorePc").innerHTML=``
    
    // habilita os botões
    enableButtons()

    // sorteia as cartas iniciais
    lettersIni() 
}

// função que habilita os botões
function enableButtons() {
    let element = document.querySelector('#b1')
    element.classList.toggle('none')
    element = document.querySelector('#b2')
    element.classList.toggle('none')
    element = document.querySelector('#b3')
    element.classList.toggle('none')
    element = document.querySelector('#b4')
    element.classList.toggle('none')
}

// função que sorteia e mostra as cartas iniciais
function lettersIni() {
    usLetter = ["", ""]
    pcLetter = ["", ""]
    usPoints = 0
    pcPoints = 0
    const iniPc = [""] // carta revelada do computador
    while (true) {

        // efetuando a compra das primeiras artas
        usLetter[0] = comprarCarta()
        usLetter[1] = comprarCarta()
        pcLetter[0] = comprarCarta()
        pcLetter[1] = comprarCarta()

             // soma dos pontos iniciais dos dois jogadores
        usPoints = usLetter[0].valor + usLetter[1].valor
        pcPoints = pcLetter[0].valor + pcLetter[1].valor

        // verifica se não foi pego por algum jogador um par de ases 
        if (usPoints < 21 && pcPoints < 21) break
    }

    // carta inicial do computador para pode revelar
    iniPc[0] = pcLetter[0] 

    // mostrar cartas
    showLetter("user", usLetter) // cartas do usuário
    showLetter("pc", iniPc)      // apenas a primeira do computador
}

// função que efetua a compra de cartas do usuário
function usNewLetter() {
    const newLetter = comprarCarta()
    const arrLetter = []
    arrLetter.push(newLetter)
    usLetter.push(newLetter)
    usPoints += arrLetter[0].valor 
    showLetter("user", arrLetter)
        if (usPoints >= 21) {
        pcNewLetter()
    }
    return arrLetter
}

// função que efetua a compra de cartas do computador
function pcNewLetter() {
    const secPc = []
    secPc.push(pcLetter[1])
    showLetter("pc", secPc)
    while (true) {
        if (usPoints > 21 || pcPoints >= usPoints || pcPoints >= 21) {
            break
        }
        const newLetter = comprarCarta()
        const arrLetter = []
        arrLetter.push(newLetter)
        pcLetter.push(newLetter)
        pcPoints += arrLetter[0].valor 
        showLetter("pc", arrLetter)
    }

    // comprar e exibir o resultado
    result()
}

// exibição das cartas dos dois jogadores
function showLetter(userType, arr) {
    let objWin = null

    for (const index in arr) {
        if (userType == "user") {
            objWin = document.querySelector("#user")
        } else {
            objWin = document.querySelector("#pc")
        }
        ncarta++
 
        // pega o nipe e o texto da carta
        let numLetter = null
        let naipeLetter = null
        let text = arr[index].texto
 
        if (text.length == 3) {
            numLetter = text[0]
            naipeLetter = text[1]
        } else { // 
            numLetter = text[0] + text[1]
            naipeLetter = text[2]
        }
 
        // cria o corpo da Carta
        let newdiv = document.createElement("div")
        newdiv.setAttribute('class', 'carta');
        newdiv.setAttribute('id', 'c' + ncarta);
        objWin.appendChild(newdiv)

        // seleciona a carta criada 
        objWin = document.querySelector("#c" + ncarta)
        // cria a parte de cima da carta
        newdiv = document.createElement("div")
        newdiv.setAttribute('class', 'icarta carta-top')
        newdiv.appendChild(createVisualValueLetter(naipeLetter))
        objWin.appendChild(newdiv)
        // cria a parte central da carta
        newdiv = document.createElement("div")
        newdiv.setAttribute('class', 'icarta carta-center')
        newdiv.appendChild(createVisualValueLetter(numLetter))
        objWin.appendChild(newdiv)
        // cria a parte de baixo da carta
        newdiv = document.createElement("div")
        newdiv.setAttribute('class', 'icarta carta-botton')
        newdiv.appendChild(createVisualValueLetter(naipeLetter))
        objWin.appendChild(newdiv)
    }
}
// função que cria a parte visual da carta ( naipes e valor )
function createVisualValueLetter(element) {
    let el = document.createElement("p")
    let text = document.createTextNode(element)
    el.appendChild(text)
    return el
}

// resultado do jogo
function result() {

    
    // VERIFICAÇÃO DO RESULTADO
    if (pcPoints === usPoints) {
        document.querySelector('#scoreUser').classList.toggle('yellow') 
        document.querySelector('#scorePc').classList.toggle('yellow')       
    } else if (usPoints > pcPoints) {
        if (usPoints > 21){
            document.querySelector('#scoreUser').classList.toggle('red') 
            document.querySelector('#scorePc').classList.toggle('green')
        } else {
            document.querySelector('#scoreUser').classList.toggle('green') 
            document.querySelector('#scorePc').classList.toggle('red')
        }          
    } else if (pcPoints > usPoints) {
        if (pcPoints > 21){
            document.querySelector('#scoreUser').classList.toggle('green') 
            document.querySelector('#scorePc').classList.toggle('red')
        } else {
            document.querySelector('#scoreUser').classList.toggle('red') 
            document.querySelector('#scorePc').classList.toggle('green')
        }  
    }
    
    // atualizando o score
    document.querySelector("#alert").innerHTML=`  <<< FIM DE JOGO >>>  `
    document.querySelector("#scoreUser").innerHTML=`o Usuário fez ${usPoints} pontos.   `
    document.querySelector("#scorePc").innerHTML=` o Computador fez ${pcPoints} pontos`
    
    enableButtons()

}
