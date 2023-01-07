import styled from "styled-components";

export const HeaderContainer = styled.header`
    
    width:100%;
    background-color: white;
   
    :root {
        --main-height:20px;
        

    }

    .navegar-home{
       
        /* display:flex;
        justify-content:space-between;
        align-items: center;
        padding:20px;
        background-color:white;
        border-width: 50px;
        height: 20vh;
        padding-right:15px;
        padding-left:150px;
        font-family: 'Poppins', sans-serif; */

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding-left:30px;
        height: 25vh;
        font-family: 'Poppins', sans-serif;  
    }

        .link{
            display: flex;
            justify-content: center;
        }

    
    *, *::before, ::after {
    border-color: white;
    
}
   .button-todos-pokemons{
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    text-decoration: underline;
   }
   

    .logo {
        display:flex;
        justify-content:center;
        align-items: center;
        background-color:white;
        /* margin-left:525px; */
        /* position: absolute; */
        /* padding:20px; */
        /* border-width: 50px; */
        /* height: 20vh; */
    }

    .img-logo:hover{
        cursor: pointer;
    }

    .button-excluir{
        width: 300px;
        background-color: red;
    }
`