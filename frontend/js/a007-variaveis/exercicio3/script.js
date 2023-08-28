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
anoAdmissao = Number(prompt("Informa o ano de admissão?:"))

// impressão dos tipos das variáveis
console.log("--------tipos das variáves-----")
console.log("nomeCompleto....:", typeof(nomeCompleto))
console.log("dataNascimento..:", typeof(dataNascimento))
console.log("endereco........:", typeof(endereco))
console.log("cpf.............:", typeof(cpf))
console.log("escolaridade....:", typeof(escolaridade))
console.log("possuiCnh.......:", typeof(possuiCnh))
console.log("numeroFilhos....:", typeof(numeroFilhos))
console.log("cargoAtual......:", typeof(cargoAtual))
console.log("salario.........:", typeof(salario))
console.log("comissao........:", typeof(comissao))
console.log("anoAdmissao.....:", typeof(anoAdmissao))
console.log("-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x")

// impressão da ficha do funcionário
console.log("--------Ficha do Funcionário----")
console.log("Nome Completo.....:", nomeCompleto)
console.log("Data de Nascimento:", dataNascimento)
console.log("Endereço.o........:", endereco)
console.log("CPF...............:", cpf)
console.log("Escolaridade......:", escolaridade)
console.log("Possui CNH........:", possuiCnh)
console.log("Número de Filhos..:", numeroFilhos)
console.log("Cargo Atual.......:", cargoAtual)
console.log("Salário...........:", salario)
console.log("Comissão..........:", comissao,"%")
console.log("Ano de Admissão...:", anoAdmissao)
console.log("-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x")
