import styled from 'styled-components'

export const PokedexStyle = styled.div`
display:flex;
flex-direction:column;
background-color:#5c5365;
min-height:100vh;
height: 100%;

.margin-total{
margin-left:40px;  
margin-bottom:54px;
margin-top: 60px;
}
.cards{
    display:flex;
    gap:20px;

}
h1{
color:white;
font-family: 'Poppins', sem serifa;;
font-size: 48px;
font-weight: 700;
}
`
export default PokedexStyle