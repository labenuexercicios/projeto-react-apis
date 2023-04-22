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
`

export const HomeButton = styled.button`
        background-color: #33A4F5;
        padding: 1.2rem 5.2rem;
        font-size: 1.5rem;
        font-weight: 700;
        :hover{
            background-color: #1093F3;
        }
`

export const DexButton = styled.button`
        left: 38vw;
        background-color: #FF6262;
        :hover{background-color: #FF3535;}
        padding: 1.2rem 3.5rem;
        font-size: 1rem;
        font-weight: 400;
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
`