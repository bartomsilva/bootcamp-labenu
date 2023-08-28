import { HeaderPage } from "./styled";
import { logout } from "../../constants/functions";
import { useNavigate } from "react-router-dom";
import { goNewRecipe, goToFeed } from "../../routes/coordinator";

export function Header() {

    const navigate = useNavigate()

    return (
        <HeaderPage>
            <h1>Receitas Incríveis!!!</h1>
            <div>
                <button onClick={() => goNewRecipe(navigate) }>Criar Receitas</button>
                <button onClick={() => goToFeed(navigate)}>Listar Receitas</button>
                <button onClick={() => logout(navigate)}>Sair / Logout</button>
            </div>
        </HeaderPage>
    )
}