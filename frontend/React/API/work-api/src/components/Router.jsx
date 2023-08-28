import { Routes, Route } from "react-router-dom";
import Labnusers from "../pages/Labenusers";
import Pokemons from "../pages/Pokemons";
import Home from "../pages/Home";
import GameOfThones from "../pages/GameOfThones";

export default function Router(){

    return(

        <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/labenusers' element={<Labnusers/>}/> 
            <Route path='/pokemons' element={<Pokemons/>}/>       
            <Route path='/gameofthones' element={<GameOfThones/>}/>
        </Routes>
    )
}