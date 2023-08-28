



// antigamente era bronca
// em outras liguagens que trabalhei
// tinha que se fazer tudo pra funcionar
// assim seria o algorítimo de ordenação
// para números
const mySort=(a)=>{
    for ( let item=0;item<a.length;item++){
        for (let subItem=item;subItem<a.length;subItem++){
            if (a[item]>a[subItem]){
                temp=a[subItem]
                a[subItem]=a[item]
                a[item]=temp
            }
        }       
    }
    return a
}


let exemple=[4,19,1,101,444,980,0,1,3,4,4,4,2]
console.log("antes",exemple)
exemple=mySort(exemple,"n")
console.log("depois",exemple)


