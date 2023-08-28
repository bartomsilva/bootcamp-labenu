import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
        
    body {
        height: 100vh;
        width: 100%;  
    }

    body.fix { 
        position: fixed; top: 0; left: 0; 
    }
`