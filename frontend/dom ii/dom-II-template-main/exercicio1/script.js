
const $ul = document.getElementById('lista')
const newLi0 = document.createElement('li')
const newLi5 = document.createElement('li')
newLi0.textContent = 'Item 0'
newLi5.textContent = 'Item 5'

$ul.insertAdjacentElement('afterbegin',newLi0)
$ul.insertAdjacentElement('beforeend',newLi5)



