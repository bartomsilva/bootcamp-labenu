import { useEffect, useState } from "react"
import { BASE_URL } from "../../constants/constants"
import axios from "axios"

export default function CharacterPage(){

  const [characters,setCharacteres]=useState([])


  useEffect(()=>{
    (async()=>{
        try {
          const res = await axios.get(BASE_URL+'/character/all-characters')
          setCharacteres(res.data)
        } catch (error) {
          console.log(error)
        }
    })()
  },[])

  return(
    <>
      <h1>Lista de Caracteres</h1>
      <div className="container-char">
      {
        characters.map( char => 
          <div key={char.id} className="box-char">
            <p>{char.name}</p>
            <p>{char.species}</p>
            <img src={char.image} alt="" />
          </div>)
      }
      </div>
    </>
  )
}