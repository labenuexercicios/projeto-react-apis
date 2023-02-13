import styled from "styled-components";

export const Head = styled.header`
    /* position: absolute; */
    width: 100vh;
    height: 130px;
    left: 0px;
    top: 0px;

    background: #FFFFFF;
`;

export const PokedexButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;

    position: absolute;
    width: 287px;
    height: 74px;
    left: 1112px;
    top: 41px;

    background-color: #33A4F5;
    border-radius: 8px;
`;

export const Image = styled.img`
    position: absolute;
    width: 200px;
    height: 100px;
    left: 566px;
    top: 21px;
    transform: rotate(-90deg);
`