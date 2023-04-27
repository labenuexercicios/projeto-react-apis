import styled from "styled-components";

export const HeaderStyle = styled.header`
    
    display: flex;
    align-items: center;
    justify-content: center;
    height: 16vh;
    width: 100vw;
    
    button{
        position: relative;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        left: 37vw;
        font-family: "Poppins", Arial, Helvetica, sans-serif;
    }

    img{
        width: 18%;
        padding-bottom: .8vh;
        position: absolute;
        left: 40vw;
    }

    @media only screen and (min-width : 320px) and (max-width : 480px) {
        height: 10vh;
        img{
            width: 40%;
            left: 23vw;
        }
        #dex-logo{
            left: 26vw;
        }
        button{left: 33vw;}
    }
`

export const HomeButton = styled.button`
        background-color: #33A4F5;
        padding: 1.2rem 5.2rem;
        font-size: 1.5rem;
        font-weight: 700;
        :hover{
            background-color: #1093F3;
        }
        @media only screen and (min-width : 320px) and (max-width : 480px) {
            padding: .5rem 1rem;
            font-size: 1rem;
        }
`

export const DexButton = styled.button`
        left: 38vw;
        background-color: #FF6262;
        :hover{background-color: #FF3535;}
        padding: 1.2rem 3.5rem;
        font-size: 1rem;
        font-weight: 400;
        @media only screen and (min-width : 320px) and (max-width : 480px) {
            font-size: 14px;
            width: 28vw;
            padding: .5rem .5rem;
    }
`

export const BackButton = styled.span`
        display: flex;
        align-items: center;
        gap: .5vw;
        font-family: "Poppins", Arial, Helvetica, sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        position: absolute;
        left: 6vw;
        cursor: pointer;
        :hover{
            text-decoration: underline;
        }
        @media only screen and (min-width : 320px) and (max-width : 480px) {
            font-size: .8rem;
            left: 3vw;
            width: 20vw;
        }
`