import React from 'react'
import { FormPost, Input, TextArea } from './styled'
import useForm from '../../hooks/useForms'
import { BASE_URL } from '../../constants/BASE_URL'
import axios from 'axios'

export default function CriarPost() {

  const headers = {
    headers: {
        Authorization: JSON.parse(localStorage.getItem("labedditToken"))
    }
  }
  const {form, onChange, limparCampos} = useForm({
    title: "", body:""
  })

  const enviarPost = async (e) => {
    e.preventDefault();
    try {
      const PATH = BASE_URL + '/posts'
      const response = await axios.post(PATH, form, headers)
      console.log(response)
  } catch (error) {
      console.log(error)
  }

  }

  return (
    <FormPost onSubmit={enviarPost}>
      <label htmlFor='tituloPost'>Título:</label>
      <Input placeholder='digite um título para o seu post'
      name='title' value={form.title} onChange={onChange} />
      <label htmlFor='textoPost'>Texto:</label>
      <TextArea placeholder='crie um post!' 
      name='body' value={form.body} onChange={onChange} />
      <button>Enviar</button>
    </FormPost>
  )
}
