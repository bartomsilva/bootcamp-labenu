import styled from "styled-components";

export const Card = styled.div`
  background-color: ${(props) => props.color};
  border: 1px solid black;
  margin: 16px;
  max-width: 17rem;
  text-align: center;
  border-radius: 10px;
  box-shadow: 10px 10px 30px #bdbdbd;
  animation: border 12s linear infinite;  

  img{
    width: 230px;
    height: 230px;
    padding: 20px;
    animation: ${(props)=>!props.evolved?`noevolved`:`evolved`} 
               ${(props)=>!props.evolved?`3s`:`2.5s`} linear infinite;  }
      
    @keyframes noevolved {
        0%   {transform:rotate(0deg);}
        25%  {transform:rotate(20deg);}
        50%  {transform:rotate(-20);}
        100% {transform:rotate(0deg);}
      }
    
      @keyframes evolved {
        0%   {transform:scale(1);}
        25%  {transform:scale(1.1);}
        50%  {transform:scale(1.2);}
        75%  {transform:scale(1.1);}
        100% {transform:scale(1)}
      }
    
      @keyframes border {
        0%   {border: 2px solid #fff;}
        25%  {border: 2px solid #ff0303;;}
        50%  {border: 2px solid #2bff00;;}
        75%  {border: 2px solid #f8e801;;}
        100% {border: 2px solid #ffffff;}
      }

    
`

export const PokemonName = styled.h2`
    border-top: 2px solid black;
    padding: 0.5rem 0;
`

export const PokemonType = styled.p`
    font-weight: bold;
    text-transform: capitalize;
    padding: 0.5rem 0;
`
export const EvolveButton = styled.button`
    padding: 0.5rem;
    margin: 16px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    box-shadow: 0 6px 30px -10px #000000;
   
`