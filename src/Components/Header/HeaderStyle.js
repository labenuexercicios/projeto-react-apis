import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 10rem;
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  `

export const Image = styled.img`
    position: absolute;
    width: 307px;
    height: 115px;
    margin-right: 5vw;
    top:25px;

    @media (max-width: 1296px) {
      width: 250px;
      height: 70px;
      top: 40px;
      right: 40vw;
}

    @media (max-width: 725px) {
      width: 200px;
      height: 70px;
      top: 40px;
      right: 40vw;
}
    @media (max-width: 548px) {
      width: 140px;
      height: 50px;
      top: 50px;
      right: 50vw;
}
    @media (max-width: 415px) {
      width: 110px;
      height: 50px;
      top: 50px;
      right: 50vw;
}
`
export const Button = styled.button`
 border-radius: 10px;
 border: none;
 background: transparent;
 margin-left: 70vw;
 top: 41px;
 cursor: pointer;

 @media (max-width: 1296px) {

      right: 40vw;
      img {
        width: 200px;
      }
}

@media (max-width: 725px) {
      top: 50px;
      right: 50vw;

      img {
        width: 150px;
      }
}
@media (max-width: 548px) {
      top: 50px;
      margin-right: 10vw;

      img {
        width: 130px;
      }
}
@media (max-width: 415px) {
      top: 50px;
      margin-right: 30vw;

      img {
        width: 110px;
      }
}
 `
export const Button2 = styled.div `
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
cursor: pointer;
`
export const Button3 = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
padding: 4px 10px;
position: absolute;
width: 240px;
height: 55px;
left: 1512px;
top: 41px;
color: white;
background: #33A4F5;
border-radius: 8px;
cursor: pointer;
`



