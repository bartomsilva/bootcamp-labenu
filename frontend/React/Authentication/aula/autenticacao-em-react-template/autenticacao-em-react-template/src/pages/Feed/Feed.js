import React, { useEffect } from 'react'
import CardPost from '../../components/CardPost/CardPost'
import CriarPost from '../../components/CriarPost/CriarPost'
import useRequestData from '../../hooks/useRequestData'
import { FeedContainer } from './styled'
import { useNavigate } from 'react-router-dom'
import { irParaLogin } from '../../routes/coordinator'
import useProtectedPage from '../../hooks/useProtected'


export default function Feed() {
  useProtectedPage()

  //Constante que pegará o token do localstorag
  const token =localStorage.getItem('token')
  const headers ={
    headers:{
      Authorization: token
    }
  }

  //Protege a página de feed para entrar quando tem token 
  /*const navigate = useNavigate()
  useEffect(()=>{
    if(!token){
      irParaLogin(navigate)
    }
  },[])*/



  const [posts] = useRequestData([], '/posts',headers)


  return (
    <FeedContainer>
      <h1>Feed</h1>
      <section>
        <h3>Novo post</h3>
        <CriarPost />
      </section>
      {
        posts.map((post) => {
          return <CardPost key={post.id} post={post} />
        })
      }
    </FeedContainer>
  )
}
