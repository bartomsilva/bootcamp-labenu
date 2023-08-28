import { BASE_URL } from "../../constants/baseURL"
import { Header } from "../../components/Header/Header"

export function CreateRecipe(){

  const token = localStorage.getItem('token')
  const HEADERS = {
    headers: {
      Authorization: token
    }
  }

  return(
    <>
    <Header/>
    <h1>Nova Receita</h1>
    
    </>

    )
}