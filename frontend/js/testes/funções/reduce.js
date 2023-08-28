

const arr = ["cadeira", "mesa", "sofá", "cadeira", "ventidor", "livro", "tv", "mesa"]
const numeros = [2240, 3360, 4500, 3360, 2240, 4500]

function resumeArray(arr) {
    return arr.sort().reduce((obj, current) => {
        if (obj.length=== 0 || obj[obj.length - 1] !== current) {
            obj.push(current)
        }
        return obj
    }, [])
}

console.log(resumeArray(arr))

const people=[{ nome: "jose"}]
console.log(people[0].nome)
console.log(people[0].idade=19)
console.log(people)

