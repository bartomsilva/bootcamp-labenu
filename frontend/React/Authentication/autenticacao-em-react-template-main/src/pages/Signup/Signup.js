import axios from 'axios'
import React, { useState } from 'react'
import useForms from '../../hooks/useForms'
import { ContainerForm, ContainerSignup, Input } from './styled'
import { BASE_URL } from '../../constants/BASE_URL'
import { irParaFeed } from '../../Routes/coordinator'
import { useNavigate } from 'react-router-dom'


export default function Signup() {
    const { form, onChange } = useForms({ email: "", senha: "", nomeUsuario: "", confirmaSenha: "" })
    const [isLoading, setIsLoading] = useState()
    const navigate = useNavigate()


    const enviarCadastro = (e) => {
        e.preventDefault()
        //* EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou
        // não é necessário caso use o pattern para a mesma funcionalidade
        if (form.senha === form.confirmaSenha) {
            const dadosUsuario = {
                username: form.nomeUsuario,
                email: form.email,
                password: form.senha
            }
            const signUp = async () => {
                setIsLoading(true)
                try {
                    const PATH = BASE_URL + '/users/signup'
                    const response = await axios.post(PATH, dadosUsuario)
                    console.log(response)
                    const { token } = response.data
                    localStorage.setItem("labedditToken", JSON.stringify(token))
                    setIsLoading(false)
                    irParaFeed(navigate)
                } catch (error) {
                    console.log(error)
                }
            }
            console.log(dadosUsuario)
            signUp()
        } else {
            alert("Digite a mesma senha nos campos 'senha' e 'confirmação de senha'")
        }
    }

    return (
        <ContainerSignup>
            <ContainerForm onSubmit={enviarCadastro}>
                <label htmlFor='nome'>Nome de usuario:</label>
                <Input
                    id='nome'
                    name='nomeUsuario'
                    pattern='[a-zA-Zà-úÀ-Ú\s]{3,}'
                    title='Nome de usuário deve ter no mínimo 3 caracteres. Podendo conter letras, acentos e espaço'
                    value={form.nomeUsuario}
                    onChange={onChange}
                    placeholder="username"
                    required
                />
                <label htmlFor='email'>Email:</label>
                <Input
                    id='email'
                    name='email'
                    type={"email"}
                    value={form.email}
                    onChange={onChange}
                    placeholder="nome@email.com"
                    required
                />
                <label htmlFor='senha'>Senha:</label>
                <Input
                    id='senha'
                    name='senha'
                    type="password"
                    minLength={8}
                    value={form.senha}
                    onChange={onChange}
                    placeholder="Crie sua senha"
                    required
                />
                <label htmlFor='confirma-senha'>Confirmação de senha:</label>
                <Input
                    id='confirma-senha'
                    name='confirmaSenha'
                    type={"password"}
                    value={form.confirmaSenha}
                    onChange={onChange}
                    placeholder="Confirme a senha"
                    // verifica se a senha é a mesma nos dois campos
                    pattern={`${form.senha}`}
                    title="confirme a senha digitada"
                    required
                />
                <button>Cadastrar</button>
            </ContainerForm>
        </ContainerSignup>
    )
}
