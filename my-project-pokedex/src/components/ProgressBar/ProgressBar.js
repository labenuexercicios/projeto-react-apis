import React from "react";
import styled from "styled-components";

const ProgressBar = (props) => {


    // const context = useContext(GlobalContext)
    const {completed} = props   

    const bgColor = completed < 50 ? "#FF7C2D" : completed < 80 ? "#FFDD69" : "green"
 

    const ContainerProgress = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        justify-items: flex-start;
        justify-self: flex-start;
        align-items: center;
        position: relative;
    `

    const FillerStyles = styled.div`
        position: absolute;
        height: 10px;
        min-width: 0;
        max-width: 100%;
        width: ${completed}%;
        background-color: ${bgColor};
        opacity:0.75;
        border-radius: 3px;
        text-align: 'right';
      `
      
      return (
        <ContainerProgress>
          <FillerStyles/>
        </ContainerProgress>
      );
    };

export default ProgressBar;