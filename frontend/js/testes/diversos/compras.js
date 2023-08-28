
/////////////////////////////

const moedaBrasil=(valor,cifrao)=>{
    if (cifrao)
     return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    //sem R$
    return valor.toLocaleString('pt-br', {minimumFractionDigits: 2});
}

//objeto carrinho
const carrinho = {
    nome: "bart",
    formaDePagamento: "cartão",
    endereco: "rua do futuro, 66 Recife-PE"  
    
}

// array de objetos adicionado ao objeto carrinho
carrinho.compras = [
    {
        nomeDoProduto: "TV 50polegagas",
        precoDoProduto: 6000.00,
        quantidade: 1
    },
    {
        nomeDoProduto: "Ventilador 40cm",
        precoDoProduto: 260.00,
        quantidade: 3
    },
    {
        nomeDoProduto: "Sofá gigante",
        precoDoProduto: 2060.00,
        quantidade: 1
    }
]


// adicionando ao objeto uma função para retornar o total das compras
carrinho.totalCompras = function(){
    let totalCompras=0
    for (let count=0; count < this.compras.length; count ++) {
        totalCompras+= this.compras[count].precoDoProduto*this.compras[count].quantidade
    }
    return totalCompras
}

console.log("quantidade de compras..:",carrinho.compras.length)
console.log("total das Compras......:",moedaBrasil(carrinho.totalCompras(),true))

// criando o carrinho presente
const carrinhoPresente = {...carrinho}
// modificando as propriedades Nome e Forma de Pagamento
// poderia ser feito na hora cópia do novo objeto
carrinhoPresente.nome="Francy"
carrinhoPresente.formaDePagamento="Cartão Presente"

console.log("\ndados no objeto Carrinho Presente\n")
// imprimindo o nome do novo carinho e forma de pagamento
console.log("Nome..............:",carrinhoPresente.nome)
console.log("Forma de Pagamento:",carrinhoPresente.formaDePagamento)


