import styled from "styled-components";

export const Head = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 20vh;
    /* left: 0px;
    top: 0px; */

    background: #FFFFFF;
`;

export const PokedexButton = styled.button`
    display: relative;
    padding: 4px 10px;

    position: absolute;
    width: 210px;
    height: 36px; 
    left: 1000px;
    top: 30px;

    background-color: #33A4F5;
    border-radius: 8px;
`;

export const Image = styled.img`
    
    position: absolute;
    width: 100px;
    height: 200px;
    left: 600px;
    top: -50px;
    transform: rotate(-90deg);
`

export const LeftButton = styled.h3`
    
    position: relative;
    width: 210px;
    height: 36px; 
    left: 100px;
    top: 10px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700px;
    font-size: 24px;
    line-height: 36px;
    text-decoration-line: underline;
    color: #1a1a1a;
    `