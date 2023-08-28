
function addItem() {
    const $container = document.querySelector(".container")
    const $newObj = document.createElement("div")
    const html =
    `
        <div class='item' id='item' onclick='removeItem(event)'>  
        </div>
    `
    $container.innerHTML += html
}

function removeItem(event) {
    event.target.remove()
    
}