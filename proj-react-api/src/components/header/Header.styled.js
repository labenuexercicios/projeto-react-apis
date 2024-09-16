import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0;
    /* justify-content: center; */
    height: 10rem;
    width: 1440px;
    background-color: white;
    /* border: 3px solid #4169e1; */

    
    button{
        justify-self:flex-end;
        
        /* align-self: center; */
        background-color: #33A4F5;
        width: 18rem;
        height: 4.6rem;
        color: white;
        border: none;
        align-items:center;
        border-radius: 0.5rem;
        margin-left: 1050px;
        cursor: pointer;
        font-size: 1.5rem;
        position: absolute;
        
        
        }
        button:hover{
            transition: 1s;
            
            background-color: #4169e1;
        }
        .btnDelete{
            background-color: #FF6262;
        }
    
    img{
        /* align-items: center; */
        position: absolute;
        width: 307px;
        height: 113px;
        left: 566px;
        top: 21px;
        /* background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(image.png); */
    }

    .deletePokedex{
        justify-self:flex-end;
        align-self: center;
        background-color: #CA2D17;
        width: 18rem;
        height: 4.6rem;
        color: white;
        border: none;
        align-items:center;
        border-radius: 0.5rem;
        margin-left: 1050px;
        cursor: pointer;
        font-size: 1.5rem;
        position: absolute;
        
        
         :hover{
            transition: 1s;
            
            background-color: #8F2D17;
        }
        }

    
`