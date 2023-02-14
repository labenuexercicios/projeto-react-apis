import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
`
export const ContainerMain = styled.main`
    background-color: #5E5E5E;
    min-height: 80vh;
    display: flex;
    gap: 40px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 250px;
    @media (max-width: 743px){
        justify-content: center;

}
`;
