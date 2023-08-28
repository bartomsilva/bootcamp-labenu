import { React, useState } from 'react'
import { MainContainer, Form, Input } from './styles.jsx'

function MainPage() {

  // função que efetua a atualização dos estado.
  const handleChanceForm = (e,setState) => {
    setState(e.currentTarget.value)
  }

  // criando para cada ítem do formulário um state
  const [name, setName] = useState('')
  const [age,  setAge]  = useState('')
  const [email,setEmail]= useState('')
  const [pwd,  setPwd]  = useState('')

  // reset do formulário  
  function resetForm(e) {
    e.preventDefault
    console.log(`Nome: ${name}`)
    console.log(`Idade: ${age}`)
    console.log(`E-mail: ${email}`)
    console.log(`Senha: não permitido`);
    [setName,setAge,setEmail,setPwd].forEach( e => e(''))

  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

return (
  <MainContainer>
    <h2>Formulário de inscrição</h2>
    <Form id='form' onSubmit={handleSubmit}>
      <label htmlFor='name'>
        Nome:
        <Input type='text' name='name' id='name' 
        value={name} onChange={(e)=>handleChanceForm(e,setName)}/>
      </label>
      <label htmlFor='age'>
        Idade:
        <Input type='text' name='age' id='age' 
        value={age} onChange={(e)=>handleChanceForm(e,setAge)}/>
      </label>
      <label htmlFor='email'>
        Email:
        <Input type='email' name='email' id='email' value={email} onChange={(e)=>handleChanceForm(e,setEmail)} 
        title="valid@email.com"
        placeholder="valid@mail.com"/>
      </label>
      <label htmlFor='pwd'>
        Senha:
        <Input type='password' name='pwd' id='pwd' value={pwd} onChange={(e)=>handleChanceForm(e,setPwd)}/>
      </label>
      <button type='submit' onClick={resetForm}>Enviar dados</button>
    </Form>    
  </MainContainer>
)
}

export default MainPage
