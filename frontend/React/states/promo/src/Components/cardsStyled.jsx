import styled from "styled-components";

export const CardPro = styled.div`
   
    border: 1px solid black;
    width: 200px;
    height: 150px;
    border-radius: 0.25rem;
    background-color: #fff;
    padding-top: 2rem;

    
    div:nth-child(2) {
        margin-top: 50px;
        margin-left: 180px;

        width: 1rem;
        height: 1rem;
        background-color: ${(props)=>props.pro?'#53ff87':'#fcff43'};
    } 

`