import axios from "axios";
import useForms from "../../hooks/useForms"
import { useNavigate } from "react-router-dom";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { FormContainer, InputContainer } from "./styled";
import { BASE_URL} from "../../constants/baseURL"

function SignUpPage() {
  const navigate = useNavigate();
  const {form, onChange, resetForm } = useForms(
    {
      name: "",
      email: "",
      password: "" 
    })

    async function registerUser(e){
      e.preventDefault()
      const body =
      {
        name: form.name,
        email: form.email,
        password: form.password
      }
      try {        
        const response = await axios.post(BASE_URL+'/user/signup',body)
        const { token } = response.data
        localStorage.setItem("token",token)
        resetForm()
        goToFeed(navigate)  

      } catch (error) {
        console.log("Err",error)        
      }

    }


    return (
    <main>
      <h1>Cadastro</h1>
      <FormContainer onSubmit={registerUser}>
        <InputContainer>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            name='name'
            value={form.name}
            onChange={onChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            type='email'
            name='email'
            value={form.email}
            onChange={onChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            type='password'
            name='password'
            value={form.password}
            onChange={onChange}
            required
          />
        </InputContainer>

        <button>Cadastrar</button>
        <button onClick={() => goToLogin(navigate)}>Já sou cadastrado</button>
      </FormContainer>
    </main>
  );
}

export default SignUpPage;