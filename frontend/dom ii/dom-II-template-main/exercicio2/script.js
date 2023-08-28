
const $Form = document.querySelector("form")
$Form.addEventListener("click",toogleClass)

function escondeSenha(event) {
    event.preventDefault()
    const $password = document.getElementById('password')
    // $password.type = 'password'
    $password.setAttribute('type','password')
}



function toogleClass(){
    if ($Form.getAttribute('class')=='light'){
        $Form.setAttribute('class','dark')
    } else {
        $Form.setAttribute('class','light')
    }
}


