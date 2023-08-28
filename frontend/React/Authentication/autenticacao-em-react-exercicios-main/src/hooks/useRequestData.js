import { useEffect, useState } from 'react'
import { BASE_URL } from '../constants/baseURL'
import axios from 'axios'

export default function useRequestData(estadoInicial, path,config) {

    const [dados, setDados] = useState(estadoInicial)
    const [erro, setErro] = useState('')

    const receberDados = () =>{
        axios.get(`${BASE_URL}${path}`,config)
        .then((resposta) => {
            console.log(resposta)
            setDados(resposta.data)
        })
        .catch((erro) => {
            console.log(erro.response)
            setErro(erro.response)
        })
    }
    
    useEffect(() => {
        receberDados()
    }, [path])

    return [dados, receberDados, erro]
}
