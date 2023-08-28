import { BrowserRouter, Routes, Route } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage"
import HomePage from '../pages/HomePage'
import LoginPage from "../pages/LoignPage"
import ProfilePage from '../pages/ProfilePage'

export default function Router(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/profile/:name' element={<ProfilePage/>}/>
                <Route path='*' element={<ErrorPage/>} />
            </Routes>
        
        </BrowserRouter>




    )


} 