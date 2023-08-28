import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from '../components/Header.js/Header'
import DetalhesPost from '../pages/DetalhesPost/DetalhesPost'
import Feed from '../pages/Feed/Feed'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import { useProtectedPage } from '../hooks/useProtectedPage'

export default function Router() {

    function PrivateRoute({children, redirectTo}){
        const isAutheticated = localStorage.getItem("labedditToken") !==null;
        return(
            isAutheticated ? children : <Navigate to={redirectTo}/>
        )
    }
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Signup />} />
                <Route path="/feeed" element={<PrivateRoute redirectTo='/login'>
                    <Feed/>
                </PrivateRoute>} />
                <Route path="/post/:id" element={<DetalhesPost />} />
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
        </BrowserRouter>
    )
}
