import styled from "styled-components"


export const Container = styled.div`
height: 663px;
width: 1389.14px;
background-color: #729F92;
margin-top: 30px;
margin-bottom: 30px;
border-radius: 8px;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 20px;
@media (max-width:743px){
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 15px;
    width: 400px;
    height: auto;
}
`

export const ContainerImagens = styled.div`
height: 600px;
width: 310px;
margin-left: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
z-index: 1;
@media (max-width:743px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 150px;
    padding-right: 10px;
    order: 1;

}
`

export const ContainerBaseStats = styled.div`
height: 580px;
width: 25%;
background-color: #FFFFFF;
align-items: center;
justify-content: center;
border-radius: 8px;
padding: 10px;
@media (max-width:743px){
    width: 100%;
    order: 4;

}
`

export const DivImagem = styled.div`
background-color: #FFFFFF;
height: 282px;
width: 282px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 8px;
z-index: 1;
 @media (max-width:743px){
   height: 150px;
   width: 150px;
}
`

export const ListaStats = styled.ul`
    list-style: none;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: right;
    padding-left: 20px;
`

export const ContainerImgAndMoves = styled.div`
display: flex;
flex-direction: column;
height: 400px;
width: 400px;
padding: 10px;
border-radius: 8px;
padding: 10px;
position: relative;
left: -450px;
top: 100px;
  @media (max-width:743px){
    align-items: center;
    padding: 0;
    height: auto;
    margin-top: 25px;
}

`

export const NameContainer = styled.div`
    height: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @media (max-width:743px){
        order: 0;
}

`





export const BoxMoves = styled.div`
    height: 400px;
    width: 100%;
    background-color: #FFFFFF;
    list-style: none;
    border-radius: 8px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    position: relative;
    left: 250px;
    @media (max-width:743px){
     order: 2;
    left: 450px;
    top: -100px;
    width: 90%;
     
}

`


export const ImgPoke = styled.img`
    z-index: 10;
    position: absolute;
    top: 200px;
    left: 1150px;
    height: 330px;
    width: 330px;
     @media(max-width:743px){
    position: absolute;
    height: auto;
    width: 400px;
        left: -5px;
        top: 1000px;
    }
`

export const LiMoves = styled.li`
    height: 37px;
    width: 300px;
    left: 814px;
    top: 656px;
    padding: 10px;
`

export const NameTxt = styled.h1`
    font-family: inter;
    size: 60px;
    color: white;
    text-transform: capitalize;
    z-index: 1;

`


export const ContainerName = styled.div`
    position: relative;
    top: -250px;
    left: 15px;
     @media(max-width:743px){
        position: relative;
        top: 0px;
    }
    
`

export const ContainerProgressBar = styled.div`
    height: 24px;
    width: 150px;
    display: flex;
    align-items: center;
`

export const ContainerTr = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`

export const ProgressBar = styled.div`
    height: 10px;
    width: ${(props) => props.width}%;
    background-color: #fca61d;
`

export const NameTh = styled.p` 
    width: 150px;
`

export const ListMoves = styled.li`
    background-color: #00000024;
    padding: 15px;
    border-radius: 8px;
    width: 120px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-transform: capitalize;
`

export const BackgroundContainer = styled.img`
    position: relative;
    left: 780px;
    top:150px;
`
export const ListaTipos = styled.ul`
    display: flex;
    list-style: none;
    gap: 15px;
    z-index: 1;

`

export const BackgroundImagem = styled.img`
position: relative;
left: -470px;
 @media(max-width:743px){
    height: auto;
    width: 470px;
        left: -35px;
    }

`