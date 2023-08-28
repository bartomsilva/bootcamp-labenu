import styled from 'styled-components'

export const Header = styled.header`

border: 6px double black;
    width: 65vw;
    display: flex;
    align-items: center;
    padding: 22px 22px;
    margin: 16px;
    min-width: fit-content;

    input{
        height: 20px;
        width: 250px;
        border-radius: 12px;
        margin-right: 10px;
        padding-inline: 10px;
    }
    button{
        display: inline-block;
        border: none;
        height: 30px;
        border-radius: 12px;
        padding: 5px 18px;
        margin-right: 15px;
        font-weight: 600;
        cursor: pointer;
        :active{
            transform: scale(0.9);
            transition-duration: 200ms;
        }
    }

`