import styled from "styled-components";

export const PokeCardStyle = styled.div`

display:flex;
height: 210px;
width: 440px;
margin-left:40px;
margin-bottom: 56px;
border-radius: 12px;
background-color:${(props) => props.color};
color:white;
position:relative;

.lado-esquerdo{
    display:flex;
    flex-direction:column;
    margin-left: 24px;
    margin-top:24px;
    font-family: 'Inter';
    
}
.lado-esquerdo-superior{
    >h1{
font-size: 32px;
font-weight: 700;
margin-top:16px;
margin-bottom:12px;
    }
    >span{
font-family: Inter;
font-size: 16px;
font-weight: 700;

    }   
} 
    
.lado-esquerdo-inferior{
    display:flex;
    flex-direction: column;
    min-height:auto;
}
.tipo{
    display:flex;
    
}

.detalhes{
    padding-top:20px;
    text-decoration:underline;
    margin-top:auto;
    margin-bottom: 12px;
    cursor:pointer;
    }
   
 
.lado-direito{
    display:flex;
    flex-direction:column;
    left:64px;
    margin-left:auto;
  }

.ivissaur{
position: absolute;
width: 193px;
height: 193px;
right:12px;
top: -52px;
z-index:1;
}
.pokebola{
z-index:0;
position: absolute;
right:-36px;
top: -52px;
}
.logica-botao{
    margin-top: 155px;
    margin-left: 26px;
}
button{
background-color: white;
color:black;
position:absolute;
z-index:1;
height: 38px;
width: 146px;
border-radius: 8px; 
margin-bottom:12px; 
padding: 4px 10px 4px 10px;
margin-top:auto;
margin-right:22px; 
border:none;
cursor:pointer;

}
`

export default PokeCardStyle
