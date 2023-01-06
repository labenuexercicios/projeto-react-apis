import styled from "styled-components";
import pokeBola from "../../imagens/pokeBola.png"

export const DetalhesStyle = styled.section`
display:flex;
flex-direction:row;
min-height: 100vh;
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
padding:24px;
background-color :#5D5D5D ;
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
background-color:${(props) => props.color};

}

.duas-imagens{
    display:flex;
    flex-direction: column;
    margin-left:42px;
    margin-right:34px;
    gap:32px;
  width:22%;   
}
.ivissauro-frente{
    background-color:white;
    width:20vw;
    height:42vh;
    border-radius:16px;
  
   
}
.centraliza-superior{
    width:20vw;
       height:42vh;
         display:flex;
        align-items:center;
        justify-content:center;
}

.ivissauro-tras{
    background-color:white;
    width:20vw;
    height:42vh;
    border-radius:16px;
  
}
.centaliza-inferior{
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    }
.grafico{
height: 613px;
width: 343px;
left: 360px;
border-radius: 12px;
background-color:white;
width:33%;


}
.componente-final{
margin-left:68px;
width:28%;
}
.bulbassauro{
    /* position:absolute;
    z-index:2; */
}
.pokebola{
    position:absolute;
    width:100vw;
    height:100vh;
    z-index:0;
}
.tags-coloridas{
  z-index:1;
  position:relative;
}
.parte-inferior{
position:absolute;
height: 63vh;
width: 22vw;
border-radius: 8px;
background-color:white;
padding-left: 18px;
display:flex;
flex-direction:column;
}

.bulbassauro{
height: 270px;
width: 270px;
left: 1109px;
top: 216px;
position:absolute;
}

.tags-coloridas{
    margin-top: 12px;
    margin-bottom: 38px;
    display:flex;
    gap:18px;
}

.margem{
    width:100%;
    >p{
font-family: 'Inter';
font-size: 24px;
font-weight: 800;
padding:18px;
}
}
.box-individual{
   display:flex;
   align-items:center;
   padding-bottom: 8px;
   flex-wrap: wrap;
   font-family: 'Inter';
   >span{
    padding-right: 4px;
   }
  }
.cor-de-fundo{
    width:50%;
    background-color: #CFCFCF;
    border-radius: 24px;
    padding:8px;
    border: dashed 1px gray;
    >span{
        padding-left: 4px;
        width:100%;
    }
}
.tags{
display:flex;
flex-direction: column;
gap:20px;
height: 37px;
border-radius: 12px;
padding: 10px;
border-radius: 12px;

}
.total{
    display:flex;
    >span{
        padding-left: 4px;
        font-weight: bold;
    }
}
`
export default DetalhesStyle 