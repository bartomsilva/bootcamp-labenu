import styled from "styled-components"

export const ContainerMusicas = styled.article`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');
    font-family: 'Raleway', sans-serif;    
    border: 6px double black;
    width: 65vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 0;
    margin: 16px;
    min-width: fit-content;
`
export const Musica = styled.section`
    display: flex;
    align-items: center;
    gap: 8px;
    box-sizing: border-box;
    flex-wrap:wrap;
`
export const ContainerInputs = styled.div`
    width: 100% ;
    display: flex;
    margin-top: 16px;
    justify-content: center;
`
export const InputMusica = styled.input`
    width: 15vw;
`

export const Botao = styled.button`
    width: 10vw;
    `
export const TitlePlaylist = styled.button`
    width: fit-content;
    border: none;
    border-radius: 12px;
    padding: 0 42px;
    margin-bottom: 15px;
    text-align: left;
    :hover{
        cursor: pointer;
    }
    background-image: url('./delete.svg');
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: center;
    background-size: 30px;
   
    `

