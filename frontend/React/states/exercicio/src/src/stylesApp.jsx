import styled from "styled-components"

export const FlexContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  background: url(https://uploaddeimagens.com.br/images/004/330/082/original/backGround.png?1675555510);
  background-size: cover;
  background-repeat: no-repeat;
  h1{
    margin: 1.5rem 0;
    padding: 0.5rem 1rem;
    font-size: 2.5rem;
    border-radius: 20% 0 20% 0;
    animation:  colorTitle 30s  linear infinite;  
    border: 1px solid rgba(0,0,0,0.3);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    background-color: #7155eb;

    @keyframes colorTitle {
        0% {
            color: rgb(0, 0, 0);
            border-radius: 20% 0 20% 0 ;
            }
        20% {
           color: red;
            }
        35% {
            color: green;
            }
        55% {
            color: yellow;
            border-radius: 0 20% 0 20% ;

            }
        65% {
            color: #fd9115;
            }
        80% {
            color: #eb14ff;
            }
        100% {
            color: #000000;
            border-radius: 20% 0 20% 0 ;

            }
     } 
}
`

export const ContainerMon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

`


