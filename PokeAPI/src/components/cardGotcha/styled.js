import styled from "styled-components";

export const Container = styled.div`
z-index: 10;
/* background-color:  rgba(0, 0, 0, 0.1); */
backdrop-filter: blur(10px);
height:100vh;
width: 100%;
position: fixed;
top: 0px;
display: flex;
align-items: center;
justify-content: center;
gap: 25px;
@media (max-width:674px) {
    height: 3500vw;
}

`

export const Card = styled.div`
width: 30vw;
height: 30vh;
border-radius: 12px;
background-color: #ffffff;
position: fixed;
top: 150px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media(max-width:572px){
    height: 50vh;
    width: 80vw;
    }
`