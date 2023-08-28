import { useNavigate } from "react-router-dom"


export default function Home(){

    const navigate = useNavigate()

    return(
        <>
            <button onClick={()=>navigate("labenusers")}>Labenusers</button>
            <button onClick={()=>navigate("pokemons")}>Pokemons</button>        
            <button onClick={()=>navigate("gameofthones")}>Game of Thones</button>       
        </>
    )
}