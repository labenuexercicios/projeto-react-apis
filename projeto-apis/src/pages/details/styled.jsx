import styled from "styled-components";

export const ContainerDetalhes = styled.div`
.move > div{
  display: flex;
  flex-direction: column;
}

`
export const H1 = styled.h1`
/* position: absolute; */
width: 220px;
height: 72px;
left: 40px;
top: 220px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
/* identical to box height */

`
export const ContainerInformaçoes = styled.div`
position: relative;
width: 100%;
height: 663px;
left: 0px;
top: 0px;
margin-top: 70px;
background: #729F92;
border-radius: 37.8857px;

.front{
  position: relative;
  width: 282px;
height: 282px;
left: 45px;
top: 40px;
display: flex;
justify-content: center;
background: url(image.png), #FFFFFF;
border: 2px solid #FFFFFF;
border-radius: 8px;
}
img{
  width: 300px;
height: 300px;

}
.back{
  position: relative;
  width: 282px;
height: 282px;
left: 44px;
top: 65px;
display: flex;
justify-content: center;
background: url(image.png), #FFFFFF;
border: 2px solid #FFFFFF;
border-radius: 8px;
}
.basestats{
  position: relative;
width: 343px;
height: 613px;
left: 400px;
top: -560px;

background: #FFFFFF;
border-radius: 12px;
.stats{
  position: relative;
width: 307px;
height: 257px;
left: 37px;
top: 43px;
font-size: 20px;
background: url(image.png);
}
}
.id{
  position: relative;
  width: 30px;
height: 19px;
left: 800px;
top: -1190px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 19px;
}
.Name{
  position: relative;
  width: 238px;
height: 58px;
left: 800px;
top: -1190px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 70px;
line-height: 58px;
/* identical to box height */
}

.imagenPrincipal{
  position: absolute;
width: 270px;
height: 270px;
left: 1550px;
top: -170px;

background: url(image.png);
}

.Moves{
  position: relative;
  width: 292px;
height: 453px;
left: 771px;
top: -1250px;
gap: 10px;
background: #FFFFFF;
border-radius: 8px;
}

.text{
  display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;

position: relative;
width: 102px;
height: 37px;
left: 30px;
top: 0px;
font-size:18px;
background: #ECECEC;
border: 1px dashed rgba(0, 0, 0, 0.14);
border-radius: 12px;
}
.tipo1{
  img{
    display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

position: relative;
width: 110px;
height: 41px;
left: 800px;
top: -1200px;
border-radius: 8px;
}
}
.tipo2{
  img{
    display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

position: relative;
width: 110px;
height: 41px;
left: 935px;
top: -1250px;
border-radius: 8px;
  }
}
`