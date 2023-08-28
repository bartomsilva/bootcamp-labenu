import React from 'react'
import { FormPost, Input, TextArea } from './styled'
import useForms from '../../hooks/useForms'
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'
import useRequestData from '../../hooks/useRequestData'
import useProtectedPage from '../../hooks/useProtected'

export default function CriarPost() {
  useProtectedPage()

  const token = localStorage.getItem("token")

  const headers = {
    headers:{
      Authorization:token 
    }
  }

  const {form, onChange, limparCampos } = useForms({title:"",body:""})
  
  useRequestData()

  const enviarPost = (e) => {
    e.preventDefault()
    console.log("entrou")
    console.log(form)

    axios.post(`${BASE_URL}/posts`,form,headers)
    .then((res)=>{
      console.log(res.data)
      limparCampos()
      window.location.reload()
    })
    .catch((err)=>{
      console.log(err)
    })
    

  }

  const [] = useRequestData([], '/posts', headers)

  return (
    <FormPost onSubmit={enviarPost}>
      <label htmlFor='tituloPost'>Título:</label>
      <Input placeholder='digite um título para o seu post'
        value = {form.title}
        name = "title"
        onChange ={onChange}
      />
      <label htmlFor='textoPost'>Texto:</label>
      <TextArea placeholder='crie um post!' 
        value={form.body}
        name='body'
        onChange={onChange}
      />
      <button>Enviar</button>
    </FormPost>
  )
}
