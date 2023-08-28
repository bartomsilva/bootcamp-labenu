import styled from "styled-components"

export const ContainerCarro = styled.section`
    width: 200px;
    min-height: fit-content;
    padding: 20px 10px 20px 35px;
    margin-bottom: 30px;
    border: 1px solid  #16160c;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #FF9937;
    border-radius: 5px;
    :hover{
        border: 2px solid rgba(255, 255, 255, 0.8);
        transform: scale3d(1.2, 1.2, 1.2);
        transition-duration: 200ms;
        cursor: pointer;                   
    }
        
    h2,img,li{
        transform: skew(-30deg);
    }   

    h2{
        font-size: 15px;
        line-height: 18px;
        color: #000000;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    ul{
        display: flex;
        flex-direction: column;
    }

    img {
        width: 132px;
        height: 87px;
    }

`
