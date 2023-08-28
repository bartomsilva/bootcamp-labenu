import styled  from 'styled-components'

export const HeaderPage= styled.header`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #000;
    color: #fff;
    margin-bottom: 10px;
    button{
        height: 40px;
        border: none;
        border-radius: 12px;
        padding: 0 10px;
        cursor: pointer;
        :active{
            transform: scale(0.9);
            transition-duration: 300ms;
        }
    }
`