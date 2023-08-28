import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const getLogin = async (email, password) => {

  // let token = null
  try {
    const body = {
      "email": email,
      "password": password
    }

    const response = await axios.get(BASE_URL+'/login',body)
    console.log(response)
    // token = response

  } catch (error) {
    console.log(error)
  }

}

export const singUp = async (name,email) => {  
  try {
    const body = {
      "name":name,
      "email":email
    }
    await axios.post(BASE_URL+"/user/singup",body)
  } catch (error) {
    console.log(error)
  }
}

