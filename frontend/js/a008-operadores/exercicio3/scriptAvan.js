

///////////////////////////////////////////
//exercício 3 = aula de operadores 2ª Parte
///////////////////////////////////////////

// porque aqui vai const ? - ( não vão sofrer modificações)
const salario = 2000   // fixo para facilitar - salariofixo
const numeroFilhos = 2 // fixo para facilitar - numero de filhos 
const auxCreche = 45.60  // este valor está estabelecido no exercício
const perInss = 5        // 5% este percentual está estabelecido no exercício
const comissaoVendas = 10 
// aqui vai os valoes das vendas fixos - mas na real viria de um banco de bados
const vendaMensal = [5784.50, 3418.41, 4124.10, 1874.00, 7000.00, 9450.00]
// tabela para imprimir o nome dos meses
const mesesExtensso= ["Janeiro","Fevereiro","Março","Abril","Maio","Junho"]                        

//variáveis - descontos e proventos
// porque aqui vai let ? todas variáveis aqui vão precisa sofre modificações
let valorInss=0        // vai guardar o valor do inss
let valorComissao=0    // vai guardar o valor da comissão calculada de acordo com o percentual
let valorAuxCreche=0   // vai guardar o valor do auxilio creche x quantidade de filhos 
let mediaSalarial=0    // vai guardar a soma do que foi recebido em cada mês e posteriormente calcular a média aritimética
let proventos=0        // vai guardar o total de proventos ( tudo que foi recebido )
let descontos=0        // vai guardar o todal de descontos ( nesse caso aqui só tem desconto de inss)

// converte para moeda Real
const moedaReal=(valor)=>{
    //return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    return valor.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2});
} // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString

//janeiro a junho - calculos e impressão mês a mês
// utilizado loop (for) e array ( venda mensal e os meses por extensso )
for (let nMes=0;nMes<vendaMensal.length;nMes++){ 
    // calculos
    valorComissao = (vendaMensal[nMes]*comissaoVendas)/100  // calculo da comissão
    valorAuxCreche = auxCreche*numeroFilhos                 // calculo do aux. creche
    proventos = salario + valorComissao    // proventos é soma de tudo que é recebido
    valorInss = proventos * perInss / 100                   // calculo do inss
    proventos += valorAuxCreche
    descontos = valorInss                                   // descontos nesse caso só tem o inss
    mediaSalarial += proventos - descontos                  // soma o valor total recebido para calcular a média 
    //impressão
    console.log(`mês de ${mesesExtensso[nMes]}`)
    console.log("Salario Base......:",moedaReal(salario))
    console.log("Total de Vendas...:",moedaReal(vendaMensal[nMes]))
    console.log("Comissão..........:",moedaReal(valorComissao))
    console.log("Auxilio Creche....:",moedaReal(valorAuxCreche))
    console.log("Salario+Aux Creche:",moedaReal(valorAuxCreche+salario))
    console.log("Total de Proventos:",moedaReal(proventos))
    console.log("valor do INSS.....:",moedaReal(valorInss))
    console.log("Total Descontos...:",moedaReal(descontos))
    console.log("Líquido Recebido..:",moedaReal(proventos-descontos))
    console.log("----------------------------------")
}
console.log("=======================================")
console.log("Total Recebido de Janeiro e Junho:",moedaReal(mediaSalarial))
console.log("Média Salario de Janeiro a Junho.:",moedaReal(mediaSalarial/6))




