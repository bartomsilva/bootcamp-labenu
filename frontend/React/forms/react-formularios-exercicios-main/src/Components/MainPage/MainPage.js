import React from 'react'
import { MainContainer, Form, Input } from './styles'
import { useForm } from '../../hooks/useForm'

function MainPage() {

  const [form, onChange, resetForm] = 
  useForm( { nameCourse: "", modules: "", technologies: "", responsible: "" } )

  const sendFormCourse =(e)=>  {

    e.preventDefault()

    console.log(`Nome do Curso: ${form.nameCourse}`)
    console.log(`Módulos: ${form.modules}`)
    console.log(`Tecnologias: ${form.technologies}`)
    console.log(`Responsável: ${form.responsible}`)
    resetForm()
    alert("castro efetuado com sucesso!")
  }
     
 
  return (
    <MainContainer className="animate__animated animate__fadeIn" >
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={sendFormCourse}>
        <label htmlFor="nameCourse">Nome do Curso:</label>
        <Input
          id="nameCourse" 
          name = "nameCourse"
          value = {form.nameCourse}
          onChange={onChange}
          minLength="5"
          pattern="^[a-zA-Zà-úÀ-Ú\s]{5,}$"
          title='o nome do curso deve ter no mínimo 5 caracteres!'
          required
        />

        <label htmlFor="modules">Número de Módulos: </label>
        <Input
          id="modules"
          name='modules'
          value={form.modules}
          onChange={onChange}
          type='number'
          min="2"
          title='é necessário no mínimo 2 módulos'
          required
        />

        <label htmlFor="technologies">Tecnologias abordadas: </label>
        <Input
          id="technologies"
          name='technologies'
          value={form.technologies}
          onChange={onChange}
          required
        />

        <label htmlFor="responsible">Responsável: </label>
        <Input
          id="responsible"
          name='responsible'
          value={form.responsible}
          onChange={onChange}
          title='é necessário no mínimo 2 caracteres'
          minLength='2'
          required
        />
        <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
