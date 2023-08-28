const frutas = ["laranja", "limão", "uva"];

// exercício 1
const $liColection = document.getElementsByTagName('li')
frutas.forEach( (el,ind)=> {
     $liColection[ind].textContent = frutas[ind]
     let fruta= `fruta-${1}` 
     console.log(document.getElementById(fruta))

 })

// exercício 3
const addNewFruit=()=> {
    const $liColection = document.getElementsByTagName('li')
    const  $ultimo = $liColection[$liColection.length-1]
    if ($ultimo.innerHTML===''){
        $ultimo.innerHTML = document.getElementById("newFruit").value
    } else {
        const $ul = document.getElementById("lista-de-frutas")
        $newLi = document.createElement("li")
        $newLi.innerHTML = document.getElementById("newFruit").value
        $ul.appendChild($newLi)
    }      
}

