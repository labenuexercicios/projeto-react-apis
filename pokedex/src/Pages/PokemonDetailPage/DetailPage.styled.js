import styled from "styled-components";

export const Main = styled.div`
background: #5e5e5e;
width: 1870px;
min-height: 85vh;
`
export const Selection = styled.div`
font-family: 'Poppins';
font-weight: 700;
font-style: normal;
padding-top: 30px;
font-size: 50px;
padding-left: 40px;
background-color: #5e5e5e;
color: white;
`
export const Container = styled.div`
position: absolute;
width: 1800px;
left: 3em;
top: 18em;
height: 660px;
border-radius: 38px;
background-color: ${(props) => props.color};
.img-front{
    position: absolute;
    width: 320px;
    height: 300px;
    left: 60px;
    top: 19px;
    background: #FFFFFF;
    border: 2px solid #FFFFFF;
    border-radius: 8px;
}
.img-back{
    position: absolute;
    width: 320px;
    height: 300px;
    left: 60px;
    top: 342px;
    background: #FFFFFF;
    border: 2px solid #FFFFFF;
    border-radius: 8px;
}
`
export const Stats = styled.div`
position: absolute;
width: 365px;
height: 627px;
left: 480px;
top: 19px;
background: #FFFFFF;
border-radius: 12px;
.base-stats{
 font-size: 30px;
 right: 250px;
 padding: 30px;
 font-weight: 900;
 font-family: 'Inter';
}
.organization{
    display: flex;
    flex-direction: row;
    gap: 20px;
    .stats-names{
        width: 130px ;
        padding: 5px;
        margin-left: 5px;
    }
    .stats-value{
        padding: 5px;
        width: 50px;
    }
    .progress {
        padding: 10px;
    }
}
.total-value{
    display: flex;
    gap: 101px;
    margin-left: 10px;
}
`
export const Moves = styled.div`
.informations-id{
position: absolute;
width: 30px;
height: 19px;
left: 1004px;
top: 24px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
}
.informations-name{
position: absolute;
width: 238px;
height: 58px;
left: 1004px;
top: 39px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 58px;
color: #FFFFFF;
}
.informations-type{
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;
position: absolute;
width: 99px;
height: 31px;
left: 998px;
top: 107px;
}
.background{
    position: absolute;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 292px;
    height: 440px;
    left: 1004px;
    top: 184px;
    background: #FFF;
    border-radius: 8px; 
    padding: 10px;
    gap: 10px;
    .group{
        display: flex;
        width: 120px;
        margin-left: 10px;
        padding: 10px;
        border-radius: 12px;
        background: #ECECEC;
        border: 1px dashed rgba(0, 0, 0, 0.14);
    }
}
.text{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: 'Inter';
    font-style: normal;
    color: #000000;
    font-weight: 800;
    font-size: 28px;
    margin-left: 10px;
    padding: 2px;
}
`
export const Image = styled.div`
`
export const Pokemon = styled.img`
  width: 350px;
  height: 350px;
  position: absolute;
  top: -130px;
  right: 0;
  z-index: 2;
`
export const Pokebola = styled.img`
position: absolute;
left: 1000px;
width: 900px;
bottom: -120px;
`