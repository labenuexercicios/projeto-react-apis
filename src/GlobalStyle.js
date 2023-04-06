import {createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1{
        cursor: default;
        font-family: 'Poppins';
        font-size: 48px;
        padding-left: 40px;
        font-weight: 500;
        color: #483838;
    }

    button{
        box-shadow: 0px 0px 2px #904F16;
        font-family:'Poppins';
        font-weight: 500;
        border-radius: 8px;
    }

    button:hover{
        cursor: pointer;
    }
    `