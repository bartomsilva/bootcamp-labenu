function insereItem(event){
    const $input = document.querySelector('#meu-input').value
    if (!$input) return

    const $ul=document.querySelector('#lista')
    const $newLi = document.createElement('li')
    $newLi.innerHTML = $input
    $ul.appendChild($newLi)
    $input.value=''
}