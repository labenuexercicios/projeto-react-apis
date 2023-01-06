import styled from "styled-components";

export const CustomProgressBarContainer = styled.div `
    
    width: 150px;
    height: 25px;
    padding: 5px;
    background-color: #ccc;
    display: flex;


    ::before{
        content: "";
        width: ${props => props.progress}%;
        background-color: orange;
    }
`