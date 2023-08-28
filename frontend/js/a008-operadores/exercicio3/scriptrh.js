/* declaração de todas variáveis
   optei por utilizar let, pois caso haja necessidade de implementar
   outras rotinas como alteração posso utlizar as mesmas variáveis.
*/

let nomeCompleto = null 
let dataNascimento = null 
let endereco = null  
let cpf = null  
let escolaridade = null  
let possuiCnh = null  
let numeroFilhos = 0  
let cargoAtual = null  
let salario = 0  
let comissao = 0 
let anoAdmissao = 0 

// rotina de inclusão de dados 
nomeCompleto = prompt("Nome Completo:")
dataNascimento = prompt("Data de Nascimento dd/mm/aaaa:")
endereco = prompt("Endereço:")
cpf = prompt("CPF:")
escolaridade = prompt("Escolaridade:")
possuiCnh = prompt("Possui CNH ?")
numeroFilhos = Number(prompt("Número de filhos:"))
cargoAtual = prompt("Cargo Atual:")
salario = Number(prompt("Salário:"))
comissao = Number(prompt("Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero:"))
anoAdmissao = Number(prompt("Ano de admissão?:"))

// impressão da ficha do funcionário
console.log("--------Ficha do Funcionário----")
console.log("Nome Completo: "+nomeCompleto+", Data de Nascimento:"+dataNascimento)
console.log("Endereço: "+endereco)
console.log("CPF: "+cpf+", Escolaridade:"+escolaridade+", Possui CNH:"+possuiCnh)
console.log("Número de Filhos: "+numeroFilhos+", Cargo Atual: "+cargoAtual)
console.log("Salário: "+salario+" , Comissão: "+comissao+"%")
console.log("Ano de Admissão: "+anoAdmissao)
console.log("-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x")

//exercício 3 = aula de operadores

const auxCreche = 45.60
const perInss = 5 //5%
const comissaoVendas = comissao  //10%
const vendaJan= 5784.50 // janeiro
const vendaFev= 3418.41 // fevereiro
const vendaMar= 4124.10 // março
const vendaAbr= 1874.00 // abril
const vendaMai= 7000.00 // maio
const vendaJun= 9450.00 // junho
let valorInss = 0
let valorComissao=0
let valorAuxCreche=0
let mediaSalarial=0
let proventos = 0
let descontos = 0

// poderia utilizar array / loop
// mas seguindo a programação ai vai.
//janeiro 
valorComissao = (vendaJan*comissaoVendas)/100
valorAuxCreche = auxCreche*numeroFilhos   // adiciona o aux. creche
proventos = salario + valorComissao + valorAuxCreche
valorInss = proventos * perInss / 100 // calculo do inss
descontos = valorInss  // caso queira por na moeda nossa.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
mediaSalarial += proventos - descontos // soma o valor total recebido 
console.log("---Janeiro --------------------------")
console.log("Salario Base....:",salario)
console.log("Total de Vendas.:",vendaJan)
console.log("Comissão........:",valorComissao)
console.log("Auxilio Creche..:",valorAuxCreche)
console.log("Total Proventos.:",proventos)
console.log("valor do INSS...:",valorInss)
console.log("Total Descontos.:",descontos)
console.log("Líquido Recebido:",proventos-descontos)
//fevereiro 
valorComissao = (vendaFev*comissaoVendas)/100
valorAuxCreche = auxCreche*numeroFilhos   // adiciona o aux. creche
proventos = salario + valorAuxCreche + valorComissao
valorInss = proventos * perInss / 100 // calculo do inss
descontos = valorInss
mediaSalarial += proventos - descontos // soma o valor total recebido 
console.log("---Fevereiro--------------------------")
console.log("Salario Base....:",salario)
console.log("Total de Vendas.:",vendaFev)
console.log("Comissão........:",valorComissao)
console.log("Auxilio Creche..:",valorAuxCreche)
console.log("Total Proventos.:",proventos)
console.log("valor do INSS...:",valorInss)
console.log("Total Descontos.:",descontos)
console.log("Líquido Recebido:",proventos-descontos)
//Março 
valorComissao = (vendaMar*comissaoVendas)/100
valorAuxCreche = auxCreche*numeroFilhos   // adiciona o aux. creche
proventos = salario + valorAuxCreche + valorComissao
valorInss = proventos * perInss / 100 // calculo do inss
descontos = valorInss
mediaSalarial += proventos - descontos // soma o valor total recebido 
console.log("---Março --------------------------")
console.log("Salario Base....:",salario)
console.log("Total de Vendas.:",vendaMar)
console.log("Comissão........:",valorComissao)
console.log("Auxilio Creche..:",valorAuxCreche)
console.log("Total Proventos.:",proventos)
console.log("valor do INSS...:",valorInss)
console.log("Total Descontos.:",descontos)
console.log("Líquido Recebido:",proventos-descontos)
//Abril 
valorComissao = (vendaAbr*comissaoVendas)/100
valorAuxCreche = auxCreche*numeroFilhos   // adiciona o aux. creche
proventos = salario + valorAuxCreche + valorComissao
valorInss = proventos * perInss / 100 // calculo do inss
descontos = valorInss
mediaSalarial += proventos - descontos // soma o valor total recebido 
console.log("---Abril --------------------------")
console.log("Salario Base....:",salario)
console.log("Total de Vendas.:",vendaAbr)
console.log("Comissão........:",valorComissao)
console.log("Auxilio Creche..:",valorAuxCreche)
console.log("Total Proventos.:",proventos)
console.log("valor do INSS...:",valorInss)
console.log("Total Descontos.:",descontos)
console.log("Líquido Recebido:",proventos-descontos)
//Maio 
valorComissao = (vendaMai*comissaoVendas)/100
valorAuxCreche = auxCreche*numeroFilhos   // adiciona o aux. creche
proventos = salario + valorAuxCreche + valorComissao
valorInss = proventos * perInss / 100 // calculo do inss
descontos = valorInss
mediaSalarial += proventos - descontos // soma o valor total recebido 
console.log("---Maio --------------------------")
console.log("Salario Base....:",salario)
console.log("Total de Vendas.:",vendaMai)
console.log("Comissão........:",valorComissao)
console.log("Auxilio Creche..:",valorAuxCreche)
console.log("Total Proventos.:",proventos)
console.log("valor do INSS...:",valorInss)
console.log("Total Descontos.:",descontos)
console.log("Líquido Recebido:",proventos-descontos)
//Junho  
valorComissao = (vendaJun*comissaoVendas)/100
valorAuxCreche = auxCreche*numeroFilhos   // adiciona o aux. creche
proventos = salario + valorAuxCreche + valorComissao
valorInss = proventos * perInss / 100 // calculo do inss
descontos = valorInss
mediaSalarial += proventos - descontos // soma o valor total recebido 
console.log("---Junho --------------------------")
console.log("Salario Base....:",salario)
console.log("Total de Vendas.:",vendaJun)
console.log("Comissão........:",valorComissao)
console.log("Auxilio Creche..:",valorAuxCreche)
console.log("Total Proventos.:",proventos)
console.log("valor do INSS...:",valorInss)
console.log("Total Descontos.:",descontos)
console.log("Líquido Recebido:",proventos-descontos)


console.log("------------------------------------")
console.log("Total Recebido de Janeiro e Junho:",mediaSalarial)
console.log("Média Salario de Janeiro a Junho.:",mediaSalarial/6)




