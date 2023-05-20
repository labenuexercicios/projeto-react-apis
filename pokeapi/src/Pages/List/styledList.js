import styled from "styled-components";

export const Containerlist =styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: #DDDDDD;
   /*  padding: 50px 0px; */
    width: 100vw;

`

export const Displaynone = styled.div`
    display: none;
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