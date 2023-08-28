import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import SingUp from "../pages/singUp/SingUpPage";
import Header from "../components/header/Header";
import CharacterPage from "../pages/characterPage/CharacterPage";

export function Router() {
  return (
    <BrowserRouter>     
      <Header/> 
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/singup' element={<SingUp/>}/>
        <Route path='/characters' element={<CharacterPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}