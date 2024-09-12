import styled from "styled-components";

export const Card = styled.div`
    width: 440px;
    height: 210px;
    margin: 200px 20px 53px 40px;
    border-radius: 12px;
    background-color: ${(props)=>props.color};
    font-family: 'Inter', sans-serif;
    color: #FFFFFF;
    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-template-columns: 220px 230px;


.number{
    margin-left: 23px;
    font-weight: 700;
    font-size: 16px;
}

.title-card{
    margin: -15px 258px 131px 23px;
}
`
export const DivColum = styled.div`
   display: flex; 
   flex-direction: column;
`
export const Types = styled.div`
    margin: -120px 5px 0px 22px;
    height: 50px;
    width: 50px;
`
export const Images = styled.div `
    margin-top: -40px;
`

export const Image = styled.img`
    width: 193px;
    height: 193px;
`
export const ImagePokebola = styled.img`
    position: absolute;
    width: 300px;
    height: 300px;
    opacity: 80%;
    margin: -20px -50px 0px -230px;
    transform: rotate(30deg);
`

export const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px 0px -15px 20px; 
    align-items: baseline;

`
export const Details = styled.h3`
    text-decoration-line: underline;
    font-size: 16px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    cursor: pointer;
`

export const Capture = styled.button`
    width: 146px;
    height: 38px;
    border-radius: 8px;
    padding: 4px 10px 4px 10px;
    cursor: pointer;
    background-color: #FFFFFF;
    border: none;
    margin-left: 215px;
`