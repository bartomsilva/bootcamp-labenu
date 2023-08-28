import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
    }

    html{
        font-size: calc(62.5%*2);
    }

     body{
        font-family: 'Inter';
        font-style: normal;
    }

   
`