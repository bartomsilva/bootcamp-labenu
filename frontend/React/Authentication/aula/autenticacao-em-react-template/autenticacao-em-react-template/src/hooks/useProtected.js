import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { irParaLogin } from "../routes/coordinator"

export default function useProtectedPage(){
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
        irParaLogin(navigate)
        }
    },[navigate])
}