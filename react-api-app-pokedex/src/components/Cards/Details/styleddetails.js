import styled from "styled-components";

export const CardDetails = styled.div`
background-color: ${props=>props.color};
width: 1389.14px;
height: 663px;
margin: 0px 141px;
border-radius: 37.8857px;
`;

export const Topheader = styled.div`
    background-color: #FFFFFF;
`;

export const Goback = styled.h5`
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
margin: 14px;
text-decoration-line: underline;
background-color:#FFFFFF;
color: #1A1A1A;
`;

export const Topimg = styled.img`
position: absolute;
width: 307px;
height: 113px;
left: 566px;
top: 21px;
margin-right: 81px;
`;

export const Removebutton = styled.button`
display: none;
`;

export const DPokeball = styled.img`
width: 775px;
height: 648px;
margin: -643px 19px 5px 738px;
z-index: 0;
`;

export const DetailsContainer = styled.div`
    float: left;
    padding-top: 32px;
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    h1{
        font-family: 'Poppins';
        font-size: 48px;
        padding-left: 40px;
        font-weight: 700;
        color: white;
        margin-top: 169px;
        padding: 40px;
        background-color: #5E5E5E;
    }
`;

export const Pokeid = styled.div`
width: 30px;
height: 19px;
padding-top: 10px;
margin: 0px 840px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;

color: #FFFFFF;
`;

export const Pokename = styled.div`
width: 159px;
height: 39px;
left: 23px;
top: 40px;
padding-top: 5px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
color: #FFFFFF;
margin: 0px 840px;
`;

export const Imgcard = styled.img`
    width: 270px;
height: 270px;
float: left;
margin-left: 1105px;
margin-top: -290px;
background: url(image.png);
`;

export const Poketypes = styled.div`
float: right;
padding-right: 304px;
`;

export const Typescontainer = styled.div`
width: 95px;
display: flex;
height: 31px;
left: 183px;
top: 89px;
padding: 5px 8px;
background-color: ${props=>props.color};
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;
margin: 15px 5px 58px 8px;
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

export const Imgtypes = styled.img`
width: 17px;
height: 20px;
margin: 23px -42px 10px -104px;
`;

export const Img1 = styled.img`
position: absolute;
width: 282px;
height: 282px;
left: 44px;
top: 26px;
margin: 352px 0px 0px 149px;
background: url(image.png), #FFFFFF;
border: 2px solid #FFFFFF;
border-radius: 8px;
`;

export const Img2 = styled.img`
position: absolute;
width: 282px;
height: 282px;
left: 44px;
top: 355px;
margin: 354px 0px 0px 149px;
background: url(image.png), #FFFFFF;
border: 2px solid #FFFFFF;
border-radius: 8px;
`;

export const Pokestats = styled.div`
position: absolute;
width: 343px;
height: 617px;
left: 270px;
top: 120px;
margin: 259px;
background: #FFFFFF;
color: #1A1A1A;
font-family: 'Poppins';
font-style: normal;
font-size: 14px;
border-radius: 12px;
h2{
margin: 15px;
width: 238px;
height: 58px;
left: 771px;
top: 39px;
font-family: 'Poppins';
font-style: normal;
font-weight: bold;
font-size: 38px;
line-height: 58px;
}
p{
    margin-left: 5px;
    text-transform: capitalize;
}
span{
    font-weight: 800;
    margin: -16px 80px 2px 0px;
}
`;

export const BarStats = styled.div`
    border-radius: 8px;
    height: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    div{
        border: 1px solid ${props => props.stats < 50 ? 'rgb(250, 105, 38)' :props.stats < 99? 'rgb(245, 192, 101)':'#57f530'};
        width: ${props => (props.stats/100)*50}%;
        background-color: ${props => props.stats < 50 ? '#FF7B2E' :props.stats < 99? '#FFDD69':'#34f270'};
        border-radius: 8px;
        height: 100%;
        max-width: 100%;
        float: left;
        margin: -16px 5px 2px 120px;
        font-weight: bold;
    }
`;

export const MovesDetails = styled.h2`
position: absolute;
width: 292px;
height: 470px;
left: 725px;
top: 266px;
border-radius: 8px;
margin: 259px;
background: #FFFFFF;
color: #1A1A1A;
font-family: 'Poppins';
font-style: normal;
font-size: 14px;
border-radius: 12px;
h2{
margin: 15px;
width: 238px;
height: 58px;
left: 771px;
top: 39px;
font-family: 'Poppins';
font-style: normal;
font-weight: bold;
font-size: 38px;
line-height: 58px;
}
`;

export const PokeMoves = styled.div`
div{
    display: flex;
padding: 10px 0px 10px;
gap: 10px;
left: 4px;
top: 45px;
background: #ECECEC;
border: 1px dashed rgba(0, 0, 0, 0.14);
border-radius: 12px;
font-weight: bold;
text-transform: capitalize;
border: 1px dashed rgba(0, 0, 0, 0.14);
width: 132px;
height: 30px;
float: left;
margin: 16px 5px 2px 20px;
font-weight: bold;
justify-content: center;
justify-items: center;
}
`;