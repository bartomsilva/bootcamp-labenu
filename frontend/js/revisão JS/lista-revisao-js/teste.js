contas.forEach(obj => {
    const total = obj.compras.reduce( (acc, vAtual)  => acc +vAtual , 0 )
    obj.saldoTotal -= total
    obj.compras = []     
})
return contas     
