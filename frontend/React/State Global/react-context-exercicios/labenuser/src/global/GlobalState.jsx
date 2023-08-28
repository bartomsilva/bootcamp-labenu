import axios from "axios";
import { useState, useEffect } from "react";
import { HEADERS } from "../constants/Constants";
import { BASE_URL } from '../constants/Constants'

export function GlobalState(){

  const [ users, setUsers ] = useState([])

  async function requestData(url) {
    try {
      const response = await axios.get(url,HEADERS)
     
      const { data } = response

      const updateDataUsers = await Promise.all(
        data.map(async (user) => {
          const { email } = await getUserInfo(user.id)
          return {
            id: user.id,
            name: user.name,
            email,
            select: false
          }
        })
      )             
      setUsers(updateDataUsers)

    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(()=>{
    // load all users
    requestData(`${BASE_URL}/users`)  
  },[])

  const getUserInfo = async (userId)=> {
    // load info detail
    const response = await axios.get(`${BASE_URL}/users/${userId}`, HEADERS)
    const { email } = response.data
    return {
      email
    }

  }

  return {
    users,    
    setUsers,
    requestData  
  }
}