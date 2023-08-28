let numClicks=0

const counterClick=()=>{
    numClicks++
    document.getElementById('clicks').textContent = numClicks
    console.log(numClicks)
}