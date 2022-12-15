import styled from 'styled-components'

const HeaderStyle = styled.div`
/* border: 4px solid yellow; */
color:white;
display:flex;
flex-wrap: wrap;
width:100%;
height:25vh;

.todo-header{
display:flex;
justify-content:center;
color:white;
width:100%;

}

.botão{
margin:42px 0px 45px 42px ; 
margin-left: 42px;
display: flex;
width:25%;
}
.botão-detalhes{
width:25%;
display:flex;
margin:42px 42px 45px 0px; 
/* justify-content: center;
align-items: center; */

;
}
.nome-pokemon{
    height:100%;
    width:100%;
    display:flex;
    justify-content:center;
    img{
        height:50%;
        width:70%;
    }
}
button{
height: 74px;
width: 287px;
left: 1112px;
top: 41px;
border-radius: 8px;
padding: 4px 10px 4px 10px;
animation-timing-function: ease-out;
background: #33A4F5;
display:flex;
align-items: center;
justify-content:center;
color:white;
border:none;

>h1{
height: 36px;
width: 106px;
font-family: Poppins;
font-size: 24px;
font-weight: 700;
margin: 18px 0px 18px 0px;
}
}

img{
    display:flex;
    margin: 26px 0px 22px 0px;
    margin-right: 0 auto;
    width:50%;
}
`

export default HeaderStyle