let numero=0
while(false){
    
    numero=prompt(`Digite um número entre ( 0 e 9999 )
                    para finalizar digite 00`)
    
    if(numero=="00") break

    console.log( `${numero} por extenso é ${nS(numero)}`)
}

function nExtenso(){
    const numero=Number(document.querySelector("#numero").value)
    if (!eNumber(numero) || numero < 0  ){
        document.querySelector("#resposta").innerHTML=`o valor informado = ${numero} não é aceito!`
        return
    }
    const numeroExtensso=nS(numero)    
    console.log(`o número ${numero} é ${numeroExtensso}`)
    document.querySelector("#resposta").innerHTML=numeroExtensso
}

function resetResult()  {
    document.querySelector("#resposta").innerHTML=""
}
    

// apenas numeros inteiros de zero a 999
function nS(numero){
    
    const unidadeD1=["zero","um","dois","três","quatro","cinco","seis","sete","oito","nove",
    "","onze","doze","treze","quatorze","quinze","dezeseis","dezesete","dezoito","dezenove"]

    const dezena=["","dez","vinte","trinta","quarenta","cinquenta","sessenta",
                   "setenta","oitenta","noventa"]
    
    const centena=["cento","cem","duzentos","trezentos","quatrocentos","quinhentos",
                   "seiscentos","setecentos","oitocentos","novecentos"]
    
                   
    // para futuro
    const mil=["","mil"] 
    const milhao=["","milhão","milhões"] // future
    const bilhao=["","bilhão","bilhões"] // future
    const trilhao=["","trilhão","trilhões"] // future

    numero = String(numero)
    const tamanho= numero.length
           
    if (tamanho==1) return Unidade(numero)
    if (tamanho==2) return Dezena(numero)
    if (tamanho==3) return Centena(numero)
    if (tamanho==4) return Milhar(numero)
    if (tamanho>4)  return " acima de 9.999 está em desenvolvimento"
    

    ////////////////////
    // trata da UNIDADES
    ////////////////////
    // [0]       
    function Unidade(numero) {
        return (unidadeD1[Number(numero)])
    }

    ////////////////////
    // trata das DEZENAS
    ////////////////////
    // [0][1]
    function Dezena(numero) {             
        // 11, 12,13, 14 até 19
        if (numero[0]=="1" && numero[1]!="0"){
            return unidadeD1[numero]        
        }
        /// 10 -20 - 30 - 40 até 90 fechadas
        if (numero[1]=="0") {
            return (dezena[numero.slice(0,1)])
        } 
        // 21 a 99
           return (dezena[numero.slice(0,1)] + ' e '+ Unidade(numero.slice(1)) )
    }

    ////////////////////
    // trata as CENTENAS
    ////////////////////
    // [0][1][2]   
    function Centena(numero){
        // 100 .... 900
        if (numero[1]=="0" && numero[2]=="0"){
            if (numero[0]=="1") {
                return centena[1]
            } else {
                return centena[numero[0]]
            }
        }
        // 110...999
        if (numero[1]!="0") {
            if (numero[0]=="1"){
                return centena[0]+" e "+Dezena(numero.slice(1))
            } else {
                return centena[numero[0]]+ " e "+Dezena(numero.slice(1))
            }
        } else {
            if (numero[0]=="1"){
                return centena[0]+" e "+Unidade(numero.slice(2))
            } else {
                return centena[numero[0]]+" e "+Unidade(numero.slice(2))
            }
        }
        //101..109
        return centena[0]+" e "+Unidade(numero.slice(2)) 
    }

    ////////////////////
    // trata os MILHARES com 4 dígitos
    ////////////////////
    // [0][1][2][3]
    function Milhar(numero){   
        // o primeiro número
        let result = Unidade(numero[0]) 
        // remove a palavra um caso venha
        result = result.replace("um","")
        // 1000...2000...9000 fechados
        if (numero[1]+numero[2]+numero[3]=="000") {
            if (numero[0]=="1") {
                return mil[1] 
            } else {
                return ( result+" "+mil[1])
            }
        }
        // 1100 1200....9999           
        if (numero[1]!="0"){
            return (result +" "+mil[1]+" "+Centena(numero.slice(1))).trim()
        }
        //1001 - 1099
        if (numero[2]!="0"){
            return (result+" "+mil[1]+" e "+Dezena(numero.slice(2))).trim()
        } else {
            return (result +" "+mil[1]+" e "+Unidade(numero.slice(3))).trim()
        }       
    }
}

