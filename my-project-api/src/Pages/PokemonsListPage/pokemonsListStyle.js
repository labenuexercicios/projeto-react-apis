import styled from "styled-components";

export const Pai = styled.div`
        /* position: relative; */
        width: 1000px;
        height: 1000px;
        background-color: #5E5E5E;
        display: grid;
        grid-template-rows: 2fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 100px;
        row-gap: 50px;
        column-gap: 5px;
`;

export const Principal = styled.body`
    position: relative;
    max-width: 1440px;
    max-height: 2455px;
    background-color: black;
`;

export const All = styled.h1`
    width: 420px;
    height: 72px;
    top: 220px;
    left: 40px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;

    color: #FFFFFF;
`;
