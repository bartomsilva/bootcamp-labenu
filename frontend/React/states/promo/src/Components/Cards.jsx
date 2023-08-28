import { useId } from "react"
import { CardPro } from "./cardsStyled"


export function Cards(props){
    const {name,val,img,cod,pro}=props.prod

    function myFunction(event) { 
/*         console.log("currentTarget element",event.currentTarget.nodeName); 
        console.log("target element",event.target.nodeName);  
        console.log('------------')
        // pega o pai container
        console.log(event.target.parentElement)
        // pega o container do container atual
        console.log(event.currentTarget.parentElement)
        console.log('------------') */
        const xxx=event
        console.log("event",xxx)
        console.log("event filhos",xxx.currentTarget.children)
        console.log("event primiro filho",xxx.currentTarget.children[0].children[0])
        console.log("event primero filho do primeiro filho",xxx.currentTarget.children[0].children[0].innerHTML)

      }
  
    return (
        <CardPro pro={pro} onClick={(event)=>myFunction(event)}>
            <div>
               <h1>{cod}-{name}</h1>
               <p>Valor: R$ {val}</p>
            </div>
            <div className='figure'>
           </div>
        </CardPro>
    )
}

    