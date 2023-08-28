import useRequestData from "../../hooks/useRequestData";
import { CotainerRecipes, Recipe, Title } from "../signUpPage/styled";
import { RecipeDetail } from '../../components/recipeDetail/RecipeDetail'
import { Header } from "../../components/Header/Header";
// import { useEffect } from "react";
// import { goToLogin } from "../routes/coordinator";
// import { useNavigate } from 'react-router-dom'

function FeedPage() {

  const token = localStorage.getItem('token')
  const HEADERS = {
    headers: {
      Authorization: token
    }
  }
  const [recipes] = useRequestData([], '/recipe/all', HEADERS);

  return (
    <>
    <Header/>
      <CotainerRecipes>
        {!recipes && <h1>Carregando dados.....</h1>}
        {recipes.map((recipe, index) =>
          <Recipe key={index}>
            <Title>{recipe.title.toUpperCase()}</Title>
            <img src={recipe.imageUrl} alt="imagem da receita" />
            <RecipeDetail id={recipe.id} headers={HEADERS} />
          </Recipe>
        )}
      </CotainerRecipes>
    </>
  );
}

export default FeedPage;