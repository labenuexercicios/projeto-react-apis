import styled from "styled-components"

export const HomePageStyle = styled.div`
display:flex;
flex-direction:column;
min-height:100vh;
height: 100%;

.cor-da-pagina{
    background: #5E5E5E;

}
.margem-total{
    margin-left:40px;  
    margin-bottom:54px;
    margin-top: 60px;
}
h1{
margin-bottom:25px;
color:white;
font-family: 'Poppins', sem serifa;;
font-size: 48px;
font-weight: 700;

}
.pagina-dos-cards{
    display:flex;
    flex-wrap:wrap;
}
`
export default HomePageStyle