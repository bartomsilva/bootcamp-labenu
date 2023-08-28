
/* 

cadastro obj como os produtos
digitar o nome = prompt
digitar os produtos ( vou pesquisar no casdastro)
= nome do produto e a quantidade
incluir no carrinho o nome do produto e o valor e a quantidade
finalizar imprir o cupom

*/

const produtos = [
    {
        description: "Biscoito",
        un: "Pct",
        price: 2.00
    },
    {
        description: "Açúcar",
        un: "Pct 1kg",
        price: 15.00
    },
    {
        description: "Farinha",
        un: "Pct 1kg",
        price: 8.00
    },
    {
        description: "Óleo",
        un: "Lata 900ml",
        price: 28.00
    },   
]

////////////////////
// PESQUISA PRODUTO
///////////////////
const buscarProduto=(nomeDoProduto) => {
    const result = produtos.find(e => e.description.toUpperCase()===nomeDoProduto.toUpperCase())
    if (typeof result=="undefined") {
        console.log("Produto não encontrado!!!")
    }
    return result
}


//////////////////////
// IMPRESSÃO CUPOM  //
//////////////////////
function imprimirCupom(carrinho){
    let totalDasCompras=0
    if(carrinho.length===0) {
        console.log("Não tem dados a imprimir....")
        return
    }
    console.log(carrinho)
    console.log("\n\n-----------------------")
    console.log("   CUPOM DE VENDAS")
    console.log("-----------------------")
    console.log(`Cliente: ${carrinho[0].cliente}`)
    for(const i in carrinho){
        console.log(`Produto: ${carrinho[i].produto} Qdt: ${carrinho[i].qtd} Preço: ${carrinho[i].valor} Total: ${(carrinho[i].qtd*carrinho[i].valor)}`)
        totalDasCompras += carrinho[i].qtd*carrinho[i].valor
    }
    console.log("-----------------------")
    console.log("Total das Compras", totalDasCompras)
}

///////////////////////
// EXECUTANDO AS VENDAS
///////////////////////

let carrinho=[]
let nomeDoCliente=""
let nomeDoProduto=""
let qtdProduto=0
let precoProduto=0
let objProduto=""
let novoItem=""

while(true){
    nomeDoCliente = prompt("Nome do Cliente")
    if(nomeDoCliente==="" || typeof nomeDoCliente ==="object") break
    
    carrinho=[]  // limpar carrinho

    while(true){
        nomeDoProduto=prompt("Digite o Produto\n"+
        " Disponível: biscoito, óleo, açúcar e farinha")
        if(nomeDoProduto==="" || typeof nomeDoProduto ==="object") continue
      
        objProduto = buscarProduto(nomeDoProduto.trim())
        if(typeof objProduto == "undefined") continue

        while(true){
            qtdProduto = Number(prompt("Digite a quantidade"))
            if(qtdProduto > 0) break
            console.log("Quatidade inválida!!!")
        }
        // gravar no carrinho
        carrinho.push(
            {
                cliente: nomeDoCliente,
                produto: nomeDoProduto,
                qtd: qtdProduto,
                valor: objProduto.price
            }
        )
        console.log(carrinho)

        novoItem=confirm("Deseja incluir mais algum produto?")
        if(!novoItem) break
    }
    imprimirCupom(carrinho) 
}


