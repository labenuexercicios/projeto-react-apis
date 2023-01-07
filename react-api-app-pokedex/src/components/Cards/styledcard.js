import styled from "styled-components";

export const Cardcontainer = styled.div`
padding: 4px 10px;
background-color: ${props=>props.color};
border-radius: 8px;
flex: none;
order: 1;
flex-grow: 0;
width: 460px;
height: 210px;
left: 0px;
top: 90px;
border-radius: 12px;
display: inline-block;
margin: 53px 10px 33px 55px;
justify-content: space-between;
z-index: 0;
`;

export const Pokeball = styled.img`
position: absolute;
width: 220px;
height: 180px;
opacity: 0.8;
margin: -207px 36.87px 15.87px 234px;
z-index: 0;

`;

export const Cardimg = styled.img`
    width: 193px;
    height: 193px;
    margin: -205px 268px 105px;
    position: relative;
`;

export const Alltypes = styled.div`
width: 95px;
display: flex;
height: 31px;
left: 23px;
top: 89px;
padding: 5px 8px;
background-color: ${props=>props.color};
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;
margin: 12px 0px 15px 13px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #FFFFFF;
text-transform: capitalize;
float: left; 
align-items: center;
justify-content: center;
`;

export const Pokecontenttypes = styled.div`

`;

export const TypeImg = styled.img`
width: 17px;
height: 20px;
margin: 23px -38px 10px -104px;
`;

export const Pokenumber = styled.div`
width: 30px;
height: 19px;
left: 23px;
top: 25px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
margin: 5px 57px 6px 13px;
`;

export const Pokenames = styled.strong`
width: 159px;
height: 39px;
left: 23px;
top: 40px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
color: #FFFFFF;
margin: 0px 12px -111px;
`;

export const Detailsbutton = styled.div`
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
    margin-left: 12px;
    margin-top: -55px;
`;

export const Capturebutton = styled.div`
justify-content: center;
align-items: center;
padding: 4px 10px 0px 30px;
width: 98px;
height: 35px;
background: #FFFFFF;
border-radius: 8px;
flex: none;
order: 1;
margin: -47px 34px 7px 299px;
border: none;
flex-grow: 0;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #0F0F0F;
`;

export const ButtonRemovePokemon = styled.div`
justify-content: center;
align-items: center;
padding: 4px 10px 0px 30px;
width: 98px;
height: 35px;
background: #FF6262;
border-radius: 8px;
flex: none;
order: 1;
margin: -47px 24px 7px 299px;
border: none;
flex-grow: 0;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
`;