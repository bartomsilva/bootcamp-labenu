
/*  para ajudar nas ideias 
    essa função faz exatamento o que o nome diz:
    parcelamento de curso...
    regras:
    o DESCONTO é composto por:
        * pagamento em até 2 vezes 20%
        * se no carrinho tiver 2 cursos ganha mais 10%
        * se no carrinho tiver 3 cursos ganha mais 15%
 */

/* TIPO DA FUNÇÃO: NOMEADA 
   pode ser outro tipo  ex: arrow function
   leia, analise está função e comente.
*/
function parcelarCurso(nParcelas, carrinho) {    
    // número de cursos comprados
    const nCursos=carrinho.length

    // percDesconto é o percentual de desconto.
    // utilizando o ternário inicializo com 20% ou 0
    let percDesconto = nParcelas <= 2 ? 20 : 0

    // utilizando o ternário adiciono 15%, 10% ou 0  
    // seguindo a regra 3 cursos 15% / 2 cursos 20%
    nCursos===3 ? percDesconto +=15 : nCursos===2 ? percDesconto+=10 : 0

    // para somar o total pode ser feito utilizando o laço for / for in / for of e etc...
    // e tem o método reduce() commentado abaixo. 
    
    //let valorTotal=carrinho.reduce( (vTotal, vAtual) => vTotal += vAtual, 0).toFixed(2)
    
    /* 
        de forma resumida o que faz o método reduce? nesse caso ele percorre todo array carrinho
        e a cada iteração vai adicionado o valor ( vAtual ) a vTotal que é retornado pelo
        reduce após percorrer todo array, não precisa dar return isso é o comportamento padrão do reduce.            
    */ 
    /* 
        fazendo a soma do total mais simples com "for of" seria: como está abaixo       
    */
    let valorTotal=0
    for(valor of carrinho) valorTotal += valor    

    // separando desconto / valor líquido - já com descontos e duas decimais
    const valorDoDesconto = (valorTotal * (percDesconto/100) ).toFixed(2)
    const valorLiquido= (valorTotal - valorDoDesconto).toFixed(2)
    
    // valor de cada parcela fixado em duas casas decimais
    const valorDaParcela=(valorLiquido/nParcelas).toFixed(2)

    // impressão dos dados apenas para análise
    // dai você monta a frase pedida no enunciado
    
    console.log("----------------------------------------------------")
    console.log(`Valor Total.............R$: ${valorTotal}`)
    console.log(`Valor do Desconto.......R$: ${valorDoDesconto}`)
    console.log(`Valor Líquido...........R$: ${valorLiquido}`)
    console.log(`Número de Parcelas........: ${nParcelas}`)
    console.log(`Valor de cada Parcela.R$..: ${valorDaParcela}`)
    console.log(`Número de Cursos..........: ${nCursos}`)
    console.log(`Percentual de Desconto....: ${percDesconto}%`)
    console.log("----------------------------------------------------\n")
}

// sugestão de testes 
parcelarCurso(2, [200])
parcelarCurso(2, [200,200])
parcelarCurso(2, [200,200,200])
parcelarCurso(3, [200,200])
parcelarCurso(3, [200,200,200])




