import styled from "styled-components";

export const HomepageContainer = styled.main`
    display: flex;
    flex-direction: column;
    width:100%;
    height:100%;
 
    div{

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 5vh;
        width: 100%;
        margin-top:2%;
        /* display:grid;
        grid-template-columns:repeat(3, 1fr);
        grid-gap: 5vh;
        justify-items: center; */
    }
`