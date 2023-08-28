/*
A função abaixo pergunta à pessoa suas três cores favoritas e imprime no console um array contendo essas três cores. 

Refatore a função para o Typescript.
*/

/* DESCOMENTE ESTA FUNÇÃO*/
function imprimeTresCoresFavoritas():void {
  
  const cor1:string = process.argv[2]
  const cor2:string = process.argv[3]
  const cor3:string = process.argv[4]


const mix:Array<string|number> = ["eu",10,"tu",10] 
  
  console.log([cor1, cor2, cor3])
}

imprimeTresCoresFavoritas()

    
    enum SCHEDULE_CLASSES {
    MANHA = "Manhã",
    TARDE = "Tarde",
    NOITE = "Noite"
    }

    // como usar? ( tipar )

    interface Student {
        name: string,
        year: string,
        shift: SCHEDULE_CLASSES
    }

    // criando arrrayde objetos tipo Student e utiliando o Enum
    const students:Student[] = [{name:"Sabtudo",year: "oitavo ano",shift:SCHEDULE_CLASSES.MANHA}]
    


 

