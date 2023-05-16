import styled from "styled-components";
import pokebola from '../../assets/pokebolaFundoCinza.png'

export const ContainerDetails = styled.div`
    background-image: url(${pokebola}); 
    background-repeat: no-repeat;
    background-size: 78%; 
    background-color: #5E5E5E;
    background-position: 5vw 0;
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
    font-weight: 700;
    min-height: 100vh;
    gap: 7vh;
    padding-bottom: 5vh;

    h1{
        font-size: 48px;
        margin-left: 2vw;
        margin-top: 2vh;
        z-index: 1;
    }
`