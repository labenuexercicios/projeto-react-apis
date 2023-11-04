import styled from "styled-components";
import pokeballWaterMark from "../../assets/images/pokeball-mark.svg";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 3em;
    padding: 2.5em 2em 2em 4em;
    background-image: url(${pokeballWaterMark});
    background-repeat: no-repeat;
    background-size: 59em;
    background-position-x: 13em;
    background-position-y: -1em;

    @media (min-width: 320px) and (max-width: 600px) {
        padding: .6em 0;
        background-image: none;
        align-items: center;
        height: 200vh;
        width: 100vw;
    }
`

export const DetText= styled.h1`
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 2.8em;
    line-height: 1em;

    @media (min-width: 320px) and (max-width: 600px) {
        font-size: 1.8em;
        margin-top: .5em;
    }
`

export const CardContainer = styled.div`
    background-color: ${(props) => {
        switch(props.pokeTypeColor){
            case 'bug':
                return '#76A866' 
                break;
            case 'dark':
                return '#5C5365'
                break;
            case 'dragon':
                return '#004170' 
                break;
            case 'electric':
                return '#E2BF65'
                break;
            case 'fairy':
                return '#e1abdd' 
                break;
            case 'fighting':
                return '#C22E28'
                break;
            case 'fire':
                return '#EAAB7D' 
                break;
            case 'flying':
                return '#5e85a19c'
                break;
            case 'ghost':
                return '#3e4e819a'
                break;
            case 'grass':
                return '#729F92' 
                break;
            case 'ground':
                return '#6e3e25' 
                break;
            case 'ice':
                return '#559a90d6'
                break;
            case 'normal':
                return '#BF9762' 
                break;
            case 'poison':
                return '#A33EA1'
                break;
            case 'psychic':
                return '#d1575bef'
                break;
            case 'rock':
                return '#a5925cf0'
                break;
            case 'steel':
                return '#886f6fac'
                break;
            case 'water':
                return '#71C3FF' 
                break;
        };
    }};
    display: grid;
    grid-template-columns: 1fr 1fr .8fr 1fr;
    column-gap: 2.8em;
    align-items: stretch;
    padding: 1em;
    width: 90vw;
    height: 75vh;
    border-radius: 1.8em;
    background-image: url(${pokeballWaterMark});
    background-repeat: no-repeat;
    background-size: 43em;
    background-position-x: 44em;
    background-position-y: 1em;

    @media (min-width: 320px) and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        gap: 1em;
        height: auto;
        width: 19em;
        margin-top: -1.3em;
    }
` 

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2.5em;
    grid-column: 1/2;

    @media (min-width: 320px) and (max-width: 600px) {
        flex-direction: row;
        gap: .8em;
        order: 3;
    }
`

export const PokeImg = styled.img`
    background-color: #FFFFFF;;
    width: 230px;
    height: 230px;
    border-radius: .5em;

    @media (min-width: 320px) and (max-width: 600px) {
        width: 125px;
        height: 125px;
    }
`

export const StatsContainer = styled.div`
    background-color: #FFFFFF;
    width: 400px;
    border-radius: .5em;
    padding: 2em;
    grid-column: 2/3;

    @media (min-width: 320px) and (max-width: 600px) {
        width: 265px;
        order: 4;
    }
`

export const Title = styled.h2`
    color: #000000;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 1.3em;
    line-height: 1em;
    margin-bottom: 18px;

    @media (min-width: 320px) and (max-width: 600px) {
        font-size: 1em;
        line-height: .4em;
    }
`

export const StatsParams = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1em;
    border-top: 2px solid #f0f1f0;
`

export const StatsParamsTotal = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-top: 1px solid #f0f1f0;
    border-bottom: 1px solid #f0f1f0;
    gap: 1em;
`

export const StatsText = styled.p`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    text-align: right;
    font-size: .8em;
    line-height: 3em;
    width: 100px;
    color: #8c8787;

    @media (min-width: 320px) and (max-width: 600px) {
        line-height: 2.3em;
        width: 195px;
    }
`

export const StatsNumber = styled.p`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    text-align: right;
    font-size: .8em;
    font-weight: 400;
    line-height: 10px;
    color: #000000;

    @media (min-width: 320px) and (max-width: 600px) {
        line-height: 2.3em;
    }
`

export const TotalStatsBar = styled.div`
    width: 30em;
`

export const StatsBar = styled.button`
    width: ${(props)=>props.status <= 100? `${props.status}` : '100'}%;
    background-color: ${(props)=> props.status < 50 ? '#ff7b2e' : '#ffdd69'};
    border: 0;
    border-radius: .2em;
    height: 1em;
`

export const InfoContainer = styled.div`
    grid-column: 3/4;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (min-width: 320px) and (max-width: 600px) {
        order: 2;
        margin-top: -5em;
    }
`
export const PokeId = styled.h3`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: .9em;
    line-height: 1em;
    color: #FFFFFF;
`

export const PokeName = styled.h1`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 2.3em;
    line-height: 1em;
    color: #FFFFFF;
    margin: .2em 0 .6em 0;
`

export const PokeTypeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: .5em;
    scale: 1;
`
export const ImgBox = styled.div`
    height: 27em;
    width: 27em;
    grid-column: 4/5;
    position: relative;
    top: -8em;
    right: 1em;

    @media (min-width: 320px) and (max-width: 600px) {
        height: 20em;
        width: 20em;
        top: 1em;
        right: -.6em;
        order: 1;
    }
`
export const ProfileImg = styled.img`
    width: 70%;
    height: 70%;
`

export const MovesContainer = styled.div`
    background-color: #FFFFFF;
    border-radius: .5em;
    height: 345px;
    width: 255px;
    padding: 1.5em 0 0 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2.8em;

    @media (min-width: 320px) and (max-width: 600px) {
        height: 300px;
        width: 260px;
    }
`

export const Moves = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: .8em;
    line-height: 40px;
    color: #000000;
    background-color:#ECECEC;
    border: 1.5px dashed #dcdcdc;
    border-radius: .8em;
    margin-bottom: 1.4em;
    padding: 2px;
    min-width: fit-content;
    max-width: 40px;
    text-align: center;
`