const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
     
 
    //let result = Object.keys(objeto).map(function (key) {        
    let result = Object.keys(objeto).map(function(element) {        
        return [objeto[element]]    
    }).join(" ") 

   // console.log(result)


    const object1 = {
        a: 'somestring',
        b: 42
      };
      const aaa=[]
      const yyy=Object.entries(object1)
      for (const [key, value] of Object.entries(object1)) {
        aaa.push(value)
      }
      //console.log(aaa);
      //console.log(yyy);

let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);
/* for (let entry of iterable) {
  console.log(entry);
} */
// [a, 1]
// [b, 2]
// [c, 3]
const array=[1,2,3,4,5]
for (let [key, value] of Object.entries(iterable)) {
  console.log(key,value)
}
      
    
    
    