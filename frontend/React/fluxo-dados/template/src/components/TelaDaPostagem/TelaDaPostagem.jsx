import React from 'react'
import {ContainerPostagem, Image, Description} from './styles'

const TelaDaPostagem = (props) => {

  const {
    title,
    image,
    post
  }= props
  return (
    <ContainerPostagem>
            <h1>{title}</h1>
            <Image src={image}/>
            <Description>{post}</Description>
    </ContainerPostagem>
  )
}

export default TelaDaPostagem