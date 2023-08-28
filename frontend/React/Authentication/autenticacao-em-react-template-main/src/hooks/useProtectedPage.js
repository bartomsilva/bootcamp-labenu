import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { irParaLogin } from '../Routes/coordinator'
export function useProtectedPage() {

    const navigate = useNavigate()
    useEffect(() => {
        const isAutheticated = localStorage.getItem("labedditToken") !== null
        if (!isAutheticated){
            irParaLogin(navigate)
        }        
    })
}

