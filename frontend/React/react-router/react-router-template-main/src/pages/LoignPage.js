import Header from "../components/Header";
import { MainContainer} from "../style"

function LoginPage() {
  return (
    <MainContainer>
      <Header />
      <h1>Faça seu login</h1>

      <div>
          <label>
              Seu Login:  
              <input type="text" name='name' placeHolder="digite seu email / cpf"/>
          </label>
          
          <br/>
          <br/>
          <label>
              Sua Senha:  
              <input type="password" name='name' placeholder="digite sua senha"/>
          </label>
      </div>
    </MainContainer>
  );
}

export default LoginPage;