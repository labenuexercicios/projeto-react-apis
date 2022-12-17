import styled from "styled-components";

export const PokemonCardConteiner = styled.div`
display: flex;
flex-direction:row-reverse;
justify-content: space-between;
position: relative;
width: 400px;
height: 210px;
left: 0px;
top: 0px;
background-color:${(props) => props.color};
border-radius: 12px;
margin-bottom:40px;

.imgBulba{
position: absolute;
width: 193px;
height: 193px;
right:12px;
top: -52px;
z-index:1;
}
.bolaPoke{
position: absolute;
width: 250.73px;
height: 210.73px;
right: 0;
top: 0;
}
.ladoEsquerdo{
    display: flex;
    flex-direction:column;
    margin-left:24px;
    margin-top:24px;
    margin-bottom:20px;
    p{
        font-size:16px;
        color:white; 
}

h2{
    color:white;
    font-size:32px;
    font-weight:700;
}
}
.tipos{
    display: flex;
    gap:8px;       
}
.detalhes{
    margin-top:auto;
    font-weight:700;
    text-decoration:underline;

}
.ladoDireito{  
    Button{
    margin-top:158px;
    margin-bottom:13px; 
    margin-right:22px;   
    } 
   
}
`