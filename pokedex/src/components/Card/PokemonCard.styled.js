import styled from "styled-components";

export const PokemonCardContainer = styled.button`
    display: flex;
    

    width: 440px;
    height: 210px;

    margin: 1rem;
    padding: 1rem;

    font-family: Inter;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 39px;
    letter-spacing: 0em;
    text-align: left;

    border-radius: 12px;
    flex-wrap: wrap;
    overflow: auto;
    
.second {
    
    display:flex;
    flex-direction: column;
}
.third {
    display:flex;
    flex-direction: row ;
    justify-content: space-evenly;
    width: 100px;
    
}
.fourth {
    display: flex;
    justify-content: space-between;
    width: 100%;
    

.details {
    width: 74px;
    height: 24px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
/* identical to box height */

    text-decoration-line: underline;

    color: #FFFFFF;


/* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
}

    .details:hover {
        cursor: pointer;
    }
}
.typeColor{
    width: 100%;
}
.type{
    margin-right: 1rem;
}
.img{
   
    width: 193px;
    height: 193px;
    left: 274px;
    top: 294px;
    justify-content: flex-end;
    
}
.capturar{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;

    width: 146px;
    height: 38px;

    background: #FFFFFF;
    border-radius: 8px;

    flex: none;
    order: 1;
    flex-grow: 0;
}
.imagemPokemon{
    position: absolute;
    
}
.imagemFundo{
    position: absolute;
}
`

// .pokebolaFundo{
//     width: 210.73px;
//     height: 210.73px;
//     left: 294.37px;
//     top: -62px;
//     opacity: 0.17;
//     transform: rotate(30deg);
// }
    
// font-family: Inter;
// font-size: 32px;
// font-weight: 700;
// line-height: 39px;
// letter-spacing: 0em;
// text-align: left;