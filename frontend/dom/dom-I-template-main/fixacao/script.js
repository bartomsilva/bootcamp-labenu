



document.getElementById('texto').addEventListener("keyup",printChar)


function printChar(){
    console.log(document.getElementById('texto').value)
}

function replaceValue(){
    document.getElementById('paragrafo').textContent = 
    document.getElementById("texto").value
}