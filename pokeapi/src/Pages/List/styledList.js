import styled from "styled-components";

export const Containerlist =styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background:#5E5E5E;
   /*  padding: 50px 0px; */
    width: 100vw;

`

export const Displaynone = styled.div`
    display: none;
`
export const TitlePag = styled.div`
  background-color:  #5E5E5E;
  font-size: 20px;
  color: white;
  padding: 20px;
`
export const ContainerMsg = styled.div`
    position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 451px;
height: 222px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(255, 255, 255); 
  z-index: 9999;
  border-radius: 15px;

`