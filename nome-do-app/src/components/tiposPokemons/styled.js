import styled from "styled-components";

export const LiType = styled.li`
    font-size:14px;
    background-color: ${(props) => props.bgColor};
    width: auto;
    height: 35px;
    border-radius:4px;
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`


export const BoxType = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: flex-start;
`