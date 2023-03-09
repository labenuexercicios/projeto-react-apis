import styled from "styled-components";



export const DetailContainer = styled(({className, children}) => {
  return <main className={className}>{children}</main>
})(() => `
position: relative;
flex: 1;
height: 100vh;
display: flex;
flex-direction: column;
background-color: #5E5E5E ;

.PokedexDetail {
  position: absolute;
  top: 37%;
  left: 45%;
  transform: translate(-50%, -50%);
  width: 1100px;
  height: 700px;
  }
`)


export const Title = styled(({className, children}) => {
  return <main className={className}>{children}</main>
})(() => `
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
margin: 0 0 48px 249px;
transform: translateY(30px);
color: #fff;
`)