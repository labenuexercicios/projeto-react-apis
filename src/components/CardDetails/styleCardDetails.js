import styled from "styled-components";
import fundocard from "../../assets/back.svg"

// main details styled
export const MainDetails = styled.div`
border-radius: 38px;
//get color types
background-color: ${props => props.colorCard};
display: flex;
justify-content: space-evenly;
align-items: center;
width: 1389px;
height: 663px;
background-image: #DDDDDD;
background-size: 65% auto;
background-repeat: no-repeat;
background-position: top right;  
`
// card image pokemon front/verse styled
export const DetailsPokemon = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;

div{
display: flex;
justify-content: center;     
border-radius: 15px;
background-color: white;
}

img{
width: 300px;
} 
`

// bar stats styled
export const BarStatsDetails = styled.div`
border-radius: 15px;
font-family: 'Poppins';
width: 300px;
height: 600px;
background-color: white;
margin-left: 10px;
padding: 20px;


p{
display: flex;
text-align: right;
justify-content: space-between;
font-size: 12px;
        
span{
width: 40px;
text-align: end;
}

span:last-child{
width: 150px;
text-align: center;
}
}
`

// card moves styled
export const CardMoves = styled.p`
display: flex;
justify-content: center;
align-items: center;
background-color: #ECECEC;
font-size: 14px;
border-radius: 12px;
border: 1px gray dashed;
margin-bottom: 40px;
width: auto;
height: 37px;
`

// name details styled
export const NameDetails = styled.div` 
margin-left: 40px;
font-family: 'Poppins';

img{
width: 200px;
height: 20px;
margin-left: 10px;
margin-bottom: 20px;
}

h3{
color: white;
font-size: 16px;
font-weight: bold;  
}

div:last-child{
border-radius: 12px;
background-color: white;
padding: 20px;
height: 453px;
width: 292px;
}
`
// image pokemon in details page
export const ImgDetails = styled.div`

img{
width: 300px;
margin-left: 30px;
margin-bottom: 620px;
}
`

//bar stats colors
export const BarStatsColors = styled.span`
border-radius: 8px;
height: 10px;

div{
border: 1px solid ${props => props.stats < 50 ? 'red' :props.stats < 99? 'orange':'#729F92'};
width: ${props => (props.stats/100)*100}%;
background-color: ${props => props.stats < 50 ? '#FF7B2E' :props.stats < 99? '#FFDD69':'#B5E61D'};
border-radius: 8px;
height: 100%;
}
`