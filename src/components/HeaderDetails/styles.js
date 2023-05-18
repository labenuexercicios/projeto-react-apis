import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 1440px;
    height: 160px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;


.div-image{
    position: absolute;
    width: 307px;
    height: 113px;
}
`
export const Return = styled.div`
    width: 1000px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    text-decoration-line: underline;
    margin-left: 100px;
    cursor: pointer;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 60px;
    margin-left: 40px;
    padding: 4px 10px;
    background-color:#FF6262;
    color: white;
    border-radius: 8px;
    border: 1px;
    font-size: 16px;
    font-family: Poppins;
    font-weight: 400;
    cursor: pointer;
`