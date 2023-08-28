
// função para converter data para padrão BR 
// a função espera um object data válido
const databr=(date)=>{
    const day =  date.getDate()
    const month = date.getMonth()+1
    const year = date.getFullYear()
    return day+'/'+month+'/'+year    // retorna uma string dd/mm/aaaa
}


// função que retorna o dia da semana por extenso 
// a função recebe como parametro o número do dia da semana de
// forma normal: ex: domingo = 1, segunda = 2 e ........
const diaExtenso=(day)=>{    
    const days=["","Domingo","Segunda",
                "Terça","Quarta","Quinta",
                "Sexta","Sábado"]
    return (days[day])
}

// função que retorna o mês por extenso 
// a função recebe como parametrô o número do mês de
// forma normal: ex: janeiro  = 1, dezembro = 12
const mesExtenso=(mes)=>{    
    const meses=["",'Janeiro','Fevereiro','Março',"Abril",
                   'Maio','Junho',"Julho","Agosto",
                   "Setembro","Outubro","Novembro","Dezembro"]
    return (meses[mes])
}
// data é formada por ano / mes / dia


const niver = new Date();
console.log("date criada.",niver)
console.log('-------------------------')
console.log("dia......................",niver.getDate())
console.log("dia da Semana............",niver.getDay()+1)
console.log("ano......................",niver.getFullYear())
console.log("Retorna o mês............",niver.getMonth()+1)
console.log('-------------------------')
console.log("date Br..................",databr(niver))
console.log("dia da Semana p/extenso..",diaExtensso(niver.getDay()+1))
console.log("mês p/extensso...........",mesExtensso(niver.getMonth()+1))




