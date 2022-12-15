import styled from "styled-components";
import pokeBola from "../../imagens/pokeBola.png"

export const DetalhesStyle = styled.section`
display:flex;
flex-direction:row;
background-color:#5c5365;
/* min-height:100vh; */
min-height: 100vh;
/* min-width: 100vw;  */
width:100%;

h1{

color:white;
font-family: 'Poppins', sem serifa;
font-size: 48px;
font-weight: 700;
margin-left: 40px;
margin-top:60px;
margin-bottom:60px;
}
.inicio{
    >h2{
font-family: Inter;
font-size: 48px;
font-weight: 700;
color:white
}
    >p{
        font-family: Inter;
font-size: 16px;
font-weight: 700;
color:white;

    }

}
.margem-total{
min-height: 100vh;
min-width: 100vw;  
}
.super-card{
display:flex;
flex-wrap:wrap;
width:90%;
left: 25px;
top: 348px;
border-radius: 0px;
background: #729F92;
padding-top:24px;
padding-bottom: 24px;
margin-left: 26px;
margin-bottom: 163px;
border-radius:36px;

}

.duas-imagens{
    display:flex;
    flex-direction: column;
    margin-left:42px;
    margin-right:34px;
    gap:38px;
    max-width:20%;
    img{
        width: 100%;
        height: 100%;
    }
}

.ivissauro-tras{
    margin-bottom:28px;
}
.grafico{
height: 613px;
width: 343px;
left: 360px;
border-radius: 12px;
background-color:white;
width:30%;
 img{
margin:18px 18px 0px 18px; 
height: 40%;
width: 70%;

left: 378px;
top: 43px;

 }

}
.componente-final{
margin-left:68px;
background-image: url('../../imagens/pokeBola.png');
background-repeat: no-repeat;
width:20%;
}
.inicio{
    h1{

    }

}
.margem{
    margin-top: 18px;
    margin-bottom: 18px;
}
.parte-inferior{
height: 453px;
width: 292px;
left: 771px;
top: 184px;
border-radius: 8px;
background-color:white;
margin-bottom:26px;

}
.bulbassauro{
height: 270px;
width: 270px;
left: 1109px;
top: 216px;
border-radius: 0px;
position:absolute;
}

.tags-coloridas{
    margin-top: 12px;
    margin-bottom: 38px;
    display:flex;
    gap:18px;
}
.parte-inferior{
    display:flex;
    flex-direction:column;

}

.margem{
    margin-top: 18px;
    margin-left: 18px;
    >p{
font-family: Inter;
font-size: 24px;
font-weight: 800;
}
}
.tags{
display:flex;
flex-direction: column;
gap:20px;
height: 37px;
border-radius: 12px;
padding: 10px;
height: 37px;
width: 114px;
border-radius: 12px;
padding: 10px;


}
`
export default DetalhesStyle 