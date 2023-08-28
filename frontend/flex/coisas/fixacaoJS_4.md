
```Javascript

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let nCount=0
  for(const number of arrayDeNumeros)
    nCount+= number===numeroEscolhido?1:0
  if (nCount===0){
    return "Número não encontrado"
  } 
  return `O número ${numeroEscolhido} aparece ${nCount}x`
}

```` 