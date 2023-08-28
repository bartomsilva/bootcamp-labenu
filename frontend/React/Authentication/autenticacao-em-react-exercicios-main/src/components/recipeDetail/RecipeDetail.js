import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../constants/baseURL"
import { DetailsRecipe } from "../../pages/signUpPage/styled"

export function RecipeDetail({id, headers}) {

    const [details, setDetails] = useState()

    useEffect(() => {
        const recipeDetail = async () => {
            const response = await axios.get(`${BASE_URL}/recipe/${id}`, headers)
            const { createdAt, creatorName, description } = response.data
            setDetails({ createdAt, creatorName, description })
        }
        recipeDetail()
    }, [id])
    return (
        <>
            <div>
                <p>Criada por: {details?.creatorName}</p>
                <p>Data: {details?.createdAt}</p> 
                <DetailsRecipe>{details?.description}</DetailsRecipe>
            </div>
        </>
    )
}