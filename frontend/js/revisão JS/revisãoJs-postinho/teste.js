const usuarios = [
    { nome: "Artur", imunizacao: "incompleta" },
    { nome: "Barbara", imunizacao: "incompleta" },
    { nome: "Carlos", imunizacao: "incompleta" }
]

nomeuser="Barara"
console.log(usuarios)
xx = usuarios.find( (element,index) => {
    if(element.nome==nomeuser) {
        usuarios[index].imunizacao="completa"
        return element
    }
} )
console.log(xx)