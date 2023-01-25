import styled from "styled-components";

export const ContainerDiv = styled.div`
height: 210px;
width: 440px;
left: 0px;
border-radius: 12px;
background: ${(props) => props.background};
justify-content: space-between;
padding-left: 15px;
margin-bottom: 50px;
`

export const ContainerName = styled.div`
    display: flex;
    flex-direction: column;
    width: 160px;
    height: 45%;
`

export const ContainerTypes = styled(ContainerName)`
    flex-direction: row;
    height: 20%;
    width: 200px;
    list-style: none;
    justify-content: flex-start;
    font-size: 17px;
    gap: 10px;
    align-items: center;
`

export const LiTipo = styled.li`
    background-color:${(props) => props.bgColor};
    height: 31px;
    width: 95px;
    left: 1099px;
    top: 2029px;
    border-radius: 8px;
    padding: 5px 8px 5px 8px;
    text-transform: capitalize;
    color: white;




`
export const ContainerButtons = styled(ContainerName)`
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
    height: 15%;
    padding: 13px;
    align-items:center;
    margin-top: 30px;
`


export const TxtId = styled.h1`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    margin-top: 15px;
    top: 0;


`

export const TxtName = styled(TxtId)`

font-size: 32px;
line-height: 39px;
text-transform:capitalize;
`


export const ButtonDetails = styled.button`
border: none;
background-color: transparent;
color: #FFFFFF;
text-decoration-line: underline;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
cursor: pointer;
`


export const ButtonCaptured = styled.button`
    width: 146px;
    height: 38px;
    right: 249px;
    padding: 4px, 10px, 4px, 10px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    background-color: ${(props) => props.bgColorButton};
    color:${(props) => props.colorLetter}

`
export const Image = styled.img`
    position: relative;
    width: 193px;
    height: 193px;
    left: 260px;
    top: -150px;
    z-index: 1;
`

export const StyledLi = styled.li`

`
