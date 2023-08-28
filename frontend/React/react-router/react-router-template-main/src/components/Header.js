import {StyledHeader, StyledButton} from "../style"
import { useNavigate } from 'react-router-dom'
import { goToHome, goToLogin, goToProfile } from "../routes/coordinator";

function Header() {
  
  const navigate = useNavigate()

  return (
    <StyledHeader>
      <StyledButton onClick={ ()=>goToHome(navigate)} >
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={ ()=> goToProfile(navigate)}>
        Ir para página de perfil        
      </StyledButton>
      <StyledButton onClick={ ()=> goToLogin(navigate)}>
        Efeturar login        
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
