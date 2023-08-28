
/*
    No projeto pede o seguinte com relação a busca de estudante:
    
    função buscarEstudante()

    4. Altere a função buscarEstudante para que a função localize partes do nome.
    Por exemplo: Se o usuário digitar Mar, a função deve retornar o primeiro aluno que comece com Mar (Maria, Mariana).
    Se nenhum aluno for localizado a função deve retornar a mensagem "Aluno não encontrado" no console.

    sendo assim, vamos atentar para alguns detalhes importântes:
    vou falar de duas formas de localizar um padrão dentro de uma string.

    1) a primeira includes()
    2) a segunda startsWith() "créditos para Regiane que nos deu essa dica!"

    mas o que cada uma faz?

    1) Includes localiza o texto em qualquer lugar do texto sem precisar determinar onde
    2) o startsWith, verifica se o texto está no começo* a princípio por padrão começa no índice 0.

    bora ver isso!!!!

*/

// VEJAMOS

const estudantes = [
    {
        estudante: "Chris Evans",   turma: "Hipátia",
        curso: "JavaScript",        valor: "900.00",
        nParcelas: 9,               desconto: false,
        vDesconto: 0,               parcelas: 100.00
    },
    {
        estudante: "Halle Berry ",  turma: "Burnell",
        curso: "APIsRest",          valor: "2000.00",
        nParcelas: 4,               desconto: false,
        vDesconto: 0,               parcelas: 500.00
    },
    {
        estudante: "Lashana Lynch", turma: "Zhenyi",
        curso: "HTML e CSS",        valor: "500.00",
        nParcelas: 1,               desconto: false,
        vDesconto: 0,               parcelas: 500.00
    },
]

function buscarNome(name) {

    let result = ""

    // busca utilizando includes - em toda extensão da string
    result = estudantes.find(e => e.estudante.toLowerCase().includes(name.toLowerCase()))
    console.log('resultado com includes() =', result)

    //busca utiizando startsWith - apenas no início da string
    result = estudantes.find(e => e.estudante.toLowerCase().startsWith(name.toLowerCase()))
    console.log('resultado com startsWith() = ', result)

}

buscarNome("Lashana")   // com o primeiro nome acha com os dois métodos
buscarNome("Lynch")     // com o segundo nome acha penas com o includes()
/* 
 
    então temos duas formas de fazer... pesquisa em todo o texto ou apenas no começo.
    qual é melhor? bom, cada caso é um caso a ser estudado, neste caso do projeto achei
    melhor o recurso que nossa amiga Regiane utilizou o startsWith().

 */
