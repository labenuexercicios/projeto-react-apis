import styled from 'styled-components';

export const Pai = styled.div`
        /* position: relative;
        width: 100%;
        height: 100%;
        background-color: #5E5E5E;
        display: grid;
        grid-template-rows: 2fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 100px;
    row-gap: 20px;
    column-gap: 5px; */
`;


export const Container = styled.div`
    
    
    position: relative;
    width: 440px;
    height: 210px;
    left: 0px;
    top: 0px;
    background: green;
    border-radius: 12px;
    
`;

export const Capturar = styled.button`
    
    position: absolute;
    top: 150px;
    left: 280px;
    width: 146px;
    height: 38px;
    border-radius: 8px;

    

    
    

`;
export const Detalhes = styled.button`
    position: absolute;
    top: 150px;
    left: 0px;
    width: 146px;
    height: 38px;
    


    

    font-family: 'Poppins' ;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    text-decoration-line: underline;

    color: black;
    background-color: green;

    
`;
export const Titulo = styled.h1`
    position: absolute;
    width: 159px;
    height: 39px;
    left: 23px;
    top: 0px;

    font-family: 'Inter' ;
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
    top: -5px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF; 
`;



export const Glass = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 5px 8px;
    gap: 17px;
    
    position: absolute;
    width: 91px;
    height: 31px;
    left: 150px;
    top: 60px;

    background-color: #70B873;
    border: 1px dashed rgba(255, 255, 255, 0.47);
    border-radius: 8px;

    

`; 

export const Poison = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 5px 8px;
    gap: 17px;
    position: absolute;
    width: 99px;
    height: 31px;
    left: 23px;
    top: 60px;
    background: #AD61AE;
    border: 1px dashed rgba(255, 255, 255, 0.47);
    border-radius: 8px;
    `;

export const Pokemon = styled.img`
    position: relative;
    width: 20vw;
    height: 20vh;
    left: 210px;
    top: 0px;
`;
    

    

