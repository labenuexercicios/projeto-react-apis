import styled from "styled-components";

export const InfoCard = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    h3{
        font-size: 16px;
        font-weight: 700;
        font-family: 'Inter', sans-serif;
        line-height: 19px;
        position: absolute;
        height: 19px;
        top: 25px;
        font-style: normal;
    }

    h2{
        position: absolute;
        width: 200px;
        height: 39px;
        top: 40px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
    }
`
export const ImageButton = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    img{
        position: absolute;
        bottom: 6vh;
        width: 193px;
        height: 193px;
    }
`

export const TypeCard = styled.div`
    display: flex;
    align-items: flex-start;
    position: absolute;
    top: 89px;
    gap: 16px;
`