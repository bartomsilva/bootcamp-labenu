import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export function useProtectedPage() {

    const navigate = useNavigate()
    useEffect(() => {
        const isAutheticated = localStorage.getItem("labedditToken") !== null
        if (!isAutheticated){
            irParaLogin(navigate)
        }        
    })
}

