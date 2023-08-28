const { reset } = require("nodemon")

function printValues() {
    const $name = document.getElementById("nome").value
    const $adress = document.getElementById("endereco").value
    const $email = document.getElementById("email").value

    console.log($name)
    console.log($adress)
    console.log($email)

    document.getElementById("nome").value = ''
    document.getElementById("endereco").value = ''
    document.getElementById("email").value = ''

}





