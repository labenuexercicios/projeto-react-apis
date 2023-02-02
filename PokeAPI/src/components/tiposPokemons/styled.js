import styled from "styled-components";

export const LiType = styled.li`
    font-size:14px;
    background-color: ${(props) => props.bgColor};
    width: auto;
    height: 35px;
    border-radius:4px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    width: 85px;
    padding: 5px;
    @media (max-width:743px) {
        
    }
`


export const BoxType = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: flex-start;
    width: 200px;
    @media (max-width:743px) {
        position: relative;
        left: -20px;
        width: 210px;
        gap: 10px;
        padding: 10px;
    }
`