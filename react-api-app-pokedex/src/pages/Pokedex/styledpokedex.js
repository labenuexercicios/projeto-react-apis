import styled from "styled-components";

export const MainContainer = styled.div`
    
    padding-top: 32px;
    
    min-height: 128vh;
    background-color: #FFFFFF;
    h1{
        font-family: 'Poppins';
        font-size: 48px;
        padding-left: 40px;
        font-weight: 700;
        color: white;
        margin: 169px 0px 0px 0px;
        padding: 40px;
        background-color: #5E5E5E;    }
`

export const DisplayCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    padding-top: 32px;
`

export const Backhome = styled.h5`
position: absolute;
width: 210px;
height: 36px;
left: 100px;
top: 62px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
margin: 14px;
text-decoration-line: underline;
background-color:#FFFFFF;
color: #1A1A1A;
`
export const HeaderContainer = styled.div`
background-color:#FFFFFF;
width: 100vh;
`