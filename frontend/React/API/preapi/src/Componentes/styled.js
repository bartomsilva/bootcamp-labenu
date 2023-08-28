import styled from "styled-components";

export const ContainerCharacters = styled.div`
   p{
       padding: 0;
       margin: 10px 0;
   }
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    padding: 10px 20px;
`
export const BoxCharacters = styled.div`
    width: 150px;
    height: 200px;
    padding: 5px;
    img{
        width: 150px;
        height: 120px;
        object-fit: scale-down ;     
    }
    border: 2px solid rgba(0,0,0,0.3);
    border-radius: 50% 0 20% 0;
    overflow: hidden;
    cursor: pointer;
`