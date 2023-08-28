
function checaCaps(event){
    console.log(event)
    console.log(event.key)
    if (event.key==='Shift'){
        document.querySelector('p').innerHTML="ATENÇÃO: SEGURANDO SHIFT."
    }      
   
}

function checaCapsFree(event){
    if (event.key==='Shift'){
        document.querySelector('p').innerHTML=""
    }

}
