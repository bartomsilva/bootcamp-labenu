import axios from "axios";
import { useEffect, useState } from "react";


function dataPokemon(url) {

}

async function getNextPage(count, nextPage, allPokemons) {
    await axios.get(nextPage, {})
        .then(response => {
            nextPage = response.data.next
            const data = response.data.results
            allPokemons.push([count, data])
        })
        .catch(error => {
            console.log("deu erro 2", error.response)
        })
}

async function getInfoPoke(url) {
    await axios.get(url, {})
        .then(response => {
            // console.log(response)
            console.log("------------------------------------------------")
            return (response)

        })
        .catch(error => {
            console.log("deu erro", error.response)
        })

}

export default function Pokemons() {
    const [pokemons, setPokemons] = useState([])
    const [detailPokemon, setDetailPokemon] = useState([])
    const [start, setStart] = useState(false)

    useEffect(() => {

        axios.get('https://pokeapi.co/api/v2/pokemon/', {})
            .then(resp => {
                (async () => {
                    let count = 1
                    let allPokemons = []
                    let nextPage = resp.data.next
                    let numberOfPokemons = resp.data.count
                    let numPages = numberOfPokemons / 20
                    allPokemons.push([count, resp.data.results])
                    if (numPages % 2 != 0) {
                        numPages = Math.ceil(numPages) + 1
                    }

                    let _offset = 20
                    let _nextOffset = 40

                    console.log("Número total de Pokemons:", numberOfPokemons)
                    console.log("Número total de Páginas:", numPages)

                    while (count <= numPages) {
                        // console.log("pag:",count,'-',nextPage)
                        count++
                        await getNextPage(count, nextPage, allPokemons)
                        nextPage = nextPage.replace(_offset, _nextOffset)
                        _offset = _nextOffset
                        _nextOffset += 20
                    }

                    await setPokemons(allPokemons)
                })()

            }).catch(error => {
                console.log("deu erro 1", error.response)
            })

    }, [])

    console.log(pokemons)
    return (
        <div className="pokemons">
            {
                pokemons.length ? pokemons[1].map((pok, idx) =>
                    <div key={idx}>
                        {/* <img src={pokemon.image} alt="" /> */}
                        {
                        console.log(pok[0][1])
                        // pok?.map((poke, idx) => {
                        //     (async()=>{
                        //         console.log(",,,,,,,,,,,",poke)
                        //         const data_ = await getInfoPoke(poke.url)
                        //         console.log("##########",data_)
                        //     })()                         
                        // }
                        // )
                     
                        }

                    </div>
                ) : (
                    // <button onClick={() => setStart(true)}>Start</button>
                    <p>aguarde.................</p>
                )
            }
        </div>
    )


}

