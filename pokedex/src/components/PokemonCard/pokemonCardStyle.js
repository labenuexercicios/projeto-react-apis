import styled from 'styled-components'

export const ContainerPokemonCard = styled.div`


    h2{
        width: 151px;
        height: 39px;
        left: 23px;
        top: 40px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
        color: #FFFFFF;
    }

    p{
        width: 32px;
        height: 19px;
        left: 23px;
        top: 25px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
    }

    a{
        width: 74px;
        height: 24px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        text-decoration-line: underline;
        color: #FFFFFF;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    
    img{
        width: 230px;
        height: 230px;
        left: 1170px;
        top: 277px;
        margin-top: -6vh;
        
        
    }

    .type{
        display: flex;
        align-items: center;
        text-align: center;
        padding: 5px 8px;
        gap: 17px;


        width: 97px;
        height: 31px;
        left: 23px;
        top: 89px;

        background: hotpink;
        border: 1px dashed rgba(255, 255, 255, 0.47);
        border-radius: 8px;
    }

    .info{
        left: 17.58%;
        right: 17.54%;
        top: 0%;
        bottom: 0%;
        width: 14px;
        height: 21px;
        left: 4px;


    }

    
    
`

export const Card = styled.div`
    background-color: gray;
    width: 23vw;
    height: 23vh;
    display: flex;
    justify-content: center;
    border-radius: 0.6vw;
    padding: 0.6vw;

    .img {
        display: flex;
        flex-direction: column;
        

    
    }

    button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-self: center;
        align-items: center;
        padding: 4px 10px;
        width: 146px;
        height: 38px;
        background: #FFFFFF;
        border-radius: 8px;
        flex: none;
        order: 1;
        flex-grow: 0;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0F0F0F;
        flex: none;
        //order: 0;
        flex-grow: 0;
        border: none;

        
    }
`

