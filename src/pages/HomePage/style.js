import styled from "styled-components";


export const CardsContainer = styled.main`
    background-color: #5E5E5E;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(15, 200px);
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 56px;
    
.title{
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 48px;
    color: #FFFFFF;
    margin: 60px 0px 0px 40px;
    position: absolute;
    width: 500px;
    height: 72px;
}
`