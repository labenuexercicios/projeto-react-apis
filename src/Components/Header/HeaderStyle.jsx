import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 8em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    background-color: #FFFFFF;
    padding: 0 1em 0em 0em;

    @media (min-width: 320px) and (max-width: 600px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1em;
        height: auto;
        padding: .5em 0;
    }
`

export const Image = styled.img`
    width: 280px;
    justify-self: center;
    grid-column: 2/3;
    
    @media (min-width: 320px) and (max-width: 600px){
        max-width: 250px;
        order: 1;
    }
`

export const NavLink = styled.a`
    grid-column: 1/2;
    margin-left: 3em;
    font-family: 'Poppins', sans-serif;
    color: #1A1A1A;
    font-style: normal;
    font-weight: 700;
    font-size: 1.1em;
    line-height: .9em;
    text-decoration: underline;
    display: flex;
    flex-direction: row;
    align-items: center;

    &:hover{
        cursor: pointer;
    };
    &:active{
        text-decoration: none;
    };

    @media (min-width: 320px) and (max-width: 600px) {
        font-size: .95em;
        max-width: 250px;
        margin: 0;
        order: 3;
    }
`

export const NavLinkPoke = styled.a`
    grid-column: 1/2;
    margin-left: 6em;
    font-family: 'Poppins', sans-serif;
    color: #1A1A1A;
    font-style: normal;
    font-weight: 700;
    font-size: 1.1em;
    line-height: .9em;
    text-decoration: underline;
    display: flex;
    flex-direction: row;
    align-items: center;

    &:hover{
        cursor: pointer;
    };
    &:active{
        text-decoration: none;
    };

    @media (min-width: 320px) and (max-width: 600px) {
        font-size: .95em;
        max-width: 250px;
        margin-left: 2.8em;
        order: 3;
    }
`

export const ArrowIcon = styled.img`
    height: 20px;

    @media (min-width: 320px) and (max-width: 600px) {
        max-width: 18px;
    }
`

export const LinksContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: .3em;
`

export const Button = styled.button`
    height: 60px;
    width: 200px;
    background-color: #33A4F5;
    margin-left: 10em;
    font-family: 'Poppins', sans-serif;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 700;
    font-size: 1.2em;
    line-height: .9em;
    border: #FFFFFF 1px;
    border-radius: .3em;
    grid-column: 3/4;

    &:hover{
        cursor: pointer;
    };
    &:active{
        text-decoration: none;
    };

    @media (min-width: 320px) and (max-width: 600px){
        max-width: 110px;
        max-height: 35px; 
        margin:0;
        order: 2;
    }
`

export const DeleteButton = styled.button`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.2em;
    color: #FFFFFF;
    margin-left: 10em;
    line-height: .9em;
    height: 60px;
    width: 200px;
    border-radius: .3em;
    background-color: #FF6262;
    border: 1px solid #FF6262;
    grid-column: 3/4;

        &:hover{
            cursor: pointer;
        };
        &:active{
            text-decoration: underline;
        };

    @media (max-width: 768px) {
        font-size: 1em;
        width: 120px;
        height: 50px;
        margin-left: 0;
        order: 2;
    }
`