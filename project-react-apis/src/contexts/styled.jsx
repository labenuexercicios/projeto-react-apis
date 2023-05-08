import styled from "styled-components";

export const MessageBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 10vh 12vh;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    z-index: 9999;

    @media screen and (max-device-width : 480px) {
        height: 20vh;
        width: 50vh;
        padding: 2rem;
        position: absolute;
        top: 50%;
        left: 50%;
    }
`

export const Text = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center; 

    @media screen and (max-device-width : 480px) {

    }
`

export const BigText1 = styled.h1`
    margin: 0 0 2vh 9vh;
    
    @media screen and (max-device-width : 480px) {
        font-size: 2rem;
        margin: 0 auto;
        margin-bottom: 2vh;
    }
`

export const BigText2 = styled.h1`
    margin: 0 0 3vh 11vh;
    @media screen and (max-device-width : 480px) {
        font-size: 2rem;
        margin: 0 auto;
        margin-bottom: 2vh;
    }
`

export const H3 = styled.h3`
    @media screen and (max-device-width : 480px) {
        font-size: 1rem;
        margin: 0 auto;
    }
`