import styled from "styled-components"
import PokeBall from "../images/card/pokeball.png"
import PokeBallDetail from "../images/card/pokeballbig.png"

export const Header = styled.header`
width: 1440px;
height: 160px;
left: 0px;
top: 0px;

background: #FFFFFF;
`

export const Logo = styled.img`
position: relative;
display: flex;
align-self: center;
justify-self: center;
width: 307px;
height: 113px;
left: 566px;
top: 21px;
`

export const PokeCardsList = styled.div`
position: absolute;
margin-top: 320px;
margin-left: 32px;
width: 1440px;
display: flex;
display-direction: row;
justify-items: space-between;
flex-wrap: wrap;
gap: 32px;`

export const PageTitle = styled.header`
position: absolute;
width: 420px;
height: 72px;
left: 40px;
top: 220px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;

color: #FFFFFF;
`

export const PokeCardBackground = styled.div`
position: relative;
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 440px;
height: 210px;
border-radius: 12px;
background-image: url(${PokeBall})`

export const PokeCardImageBackground = styled.img`
position: relative;
top: 0px;
right: 0px;`

export const PokeCardId = styled.p`
position: relative;
width: 32px;
height: 19px;
top: 16px;
left: 32px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;`

export const PokeCardName = styled.p`
position: relative;
width: 116px;
height: 39px;
left: 32px;
top: 40px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
color: #FFFFFF;`

export const PokeCardType1 = styled.img`
position: relative;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

width: 99px;
height: 31px;
left: 23px;
top: 89px;`

export const PokeCardType2 = styled.div`
position: relative;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

position: absolute;
width: 91px;
height: 31px;
left: 129px;
top: 89px;

border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;`

export const PokeCardImage = styled.img`
display:flex;
justify-self: right;
align-self: top;
width: 193px;
height: 193px;
`

export const PokeDexButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;

position: absolute;
width: 287px;
height: 74px;
left: 1112px;
top: 41px;

background: #33A4F5;
border-radius: 8px;
`

export const PokeHomeButton = styled.button`
position: absolute;
width: 210px;
height: 36px;
left: 100px;
top: 62px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;

text-decoration-line: underline;

color: #1A1A1A;
`

export const PokeDetailsButton = styled.button`
width: 74px;
height: 24px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;

text-decoration-line: underline;

color: #FFFFFF;

flex: none;
order: 0;
flex-grow: 0;
`

export const PokeCatchButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;

width: 146px;
height: 38px;

background: #FFFFFF;
border-radius: 8px;

flex: none;
order: 1;
flex-grow: 0;
`

export const PokeReleaseButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;

width: 146px;
height: 38px;

background: #FF6262;
border-radius: 8px;

flex: none;
order: 1;
flex-grow: 0;
`

export const PokeDetailsBackground = styled.div`
position: absolute;
width: 1389.14px;
height: 663px;
margin-left: 32px;
margin-top: 320px;
background-image: url(${PokeBallDetail})
border-radius: 37.8857px;
`

export const PokeDetailsImage = styled.img`
position: absolute;
width: 270px;
height: 270px;
left: 1109px;
top: -80px;`

export const PokeDetailsSpriteFront = styled.img`
position: absolute;
width: 282px;
height: 282px;
left: 44px;
top: 26px;

background: #FFFFFF;
border: 2px solid #FFFFFF;
border-radius: 8px;`

export const PokeDetailsSpriteBack = styled.img`
position: absolute;
width: 282px;
height: 282px;
left: 44px;
top: 355px;

background: #FFFFFF;
border: 2px solid #FFFFFF;
border-radius: 8px;`

export const PokeDetailsStatsBackground = styled.div`
position: absolute;
width: 343px;
height: 613px;
left: 360px;
top: 24px;

background: #FFFFFF;
border-radius: 12px;`

export const PokeDetailsBaseStats = styled.div`
position: absolute;
width: 307px;
height: 257px;
left: 16px;
top: 43px;`


export const PokeDetailsBaseText = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 29px;

color: #000000;`

export const PokeDetailsId = styled.p`
position: absolute;
width: 30px;
height: 19px;
left: 774px;
top: 24px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;

color: #FFFFFF;`

export const PokeDetailsName = styled.p`
position: absolute;
width: 238px;
height: 58px;
left: 771px;
top: 39px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 58px;

color: #FFFFFF;`

export const PokeDetailsType1 = styled.img`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

position: absolute;
width: 99px;
height: 31px;
left: 774px;
top: 107px;

border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;`

export const PokeDetailsType2 = styled.img`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

position: absolute;
width: 91px;
height: 31px;
left: 891px;
top: 106px;

border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;`

export const PokeDetailsMovesBackground = styled.section`
position: absolute;
width: 292px;
height: 453px;
left: 771px;
top: 184px;

background: #FFFFFF;
border-radius: 8px;`

export const PokeDetailsMove1 = styled.p`
display: flex;
flex-direction: row;
align-items: center;
text-align: center;
flex-wrap: wrap;
position: absolute;
width: 102px;
height: 37px;
margin-left: 32px;
margin-top: 32px;
background: #ECECEC;
border: 1px dashed rgba(0, 0, 0, 0.14);
border-radius: 12px;`

export const PokeDetailsMove2 = styled.p`
display: flex;
flex-direction: row;
align-items: center;
text-align: center;
flex-wrap: wrap;
position: absolute;
width: 102px;
height: 37px;
margin-left: 32px;
margin-top: 85px;
background: #ECECEC;
border: 1px dashed rgba(0, 0, 0, 0.14);
border-radius: 12px;`

export const PokeDetailsMove3 = styled.p`
display: flex;
flex-direction: row;
align-items: center;
text-align: center;
flex-wrap: wrap;
position: absolute;
width: 102px;
height: 37px;
margin-left: 32px;
margin-top: 138px;
background: #ECECEC;
border: 1px dashed rgba(0, 0, 0, 0.14);
border-radius: 12px;`

export const PokeDetailsMove4 = styled.p`
display: flex;
flex-direction: row;
align-items: center;
flex-wrap: wrap;
position: absolute;
width: 102px;
height: 37px;
margin-left: 32px;
margin-top: 191px;
background: #ECECEC;
border: 1px dashed rgba(0, 0, 0, 0.14);
border-radius: 12px;`