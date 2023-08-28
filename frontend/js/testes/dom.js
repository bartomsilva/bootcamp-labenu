
let newdiv = document.createElement("div")
newdiv.setAttribute('class', 'Dom');

let p = document.createElement("p")
let text = document.createTextNode("Simobra Ozemela")
p.appendChild(text)
let br=document.createElement( "br")
p.appendChild(br)

text = document.createTextNode("Simobra Ozemela 2")
p.appendChild(text)

newdiv.appendChild(p)
document.querySelector("body").appendChild(newdiv)

