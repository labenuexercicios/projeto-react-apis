import styled from 'styled-components';

export const Container = styled.div`
    background-color : #729F92;
    position: absolute;
    width: 440px;
    height: 210px;
    left: 0px;
    top: 0px ;
    border-radius: 12px;
`;

export const Capturar = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;

    width: 146px;
    height: 38px;

    background: #FFFFFF;
    border-radius: 8px;
`;
export const Detalhes = styled.button`
    width: 74px;
    height: 24px;

    font-family: Poppins ;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    text-decoration-line: underline;

    color: #FFFFFF;

    flex: none;
    order: 0;
    flex-grow: 0;
`;
export const Titulo = styled.h1`
    position: absolute;
    width: 196px;
    height: 39px;
    left: 23px;
    top: 40px;

    font-family: Inter ;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;

    color: #FFFFFF
    `;

export const Numero = styled.p`
    position: absolute;
    width: 30px;
    height: 19px;
    left: 23px;
    top: 25px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    color: #FFFFFF; 
`;

export const Glass = styled.p`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 5px 8px;
    gap: 17px;

    position: absolute;
    width: 91px;
    height: 31px;
    left: 129px;
    top: 89px;

    background: #70B873;
    border: 1px dashed rgba(255, 255, 255, 0.47);
    border-radius: 8px;
`;

export const Poison = styled.a`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 5px 8px;
    gap: 17px;

    position: absolute;
    width: 99px;
    height: 31px;
    left: 23px;
    top: 89px;

    background: #AD61AE;
    border: 1px dashed rgba(255, 255, 255, 0.47)
    
`;