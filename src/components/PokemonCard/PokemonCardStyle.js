import styled from "styled-components";

export const PokemonCardStyle = styled.div`


display: flex;
padding: 30px;
gap: 3px;
width: 440px;
height: 210px;
border-radius: 12px;
color: #FFFFFF;
background-color: #729F92;
background-repeat: no-repeat;



.infos-pokemon {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        h1{
            font-size: 32px;
            position: relative;
            top: -20px;
        }
        
        h2{
            font-size: 16px;
            position: relative;
            top: -10px;
        }

        .pokemon-type {
            
            display: flex;
            gap: 5px;
            position: relative;
            top: -33px;

            img{
                max-width: 88px;
                max-height: 32px;
            }

        }
    }

.img-button-pokemon {

        width: 220px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 12px;



        img {
            width: 183px;
            height: 183px;
            left: 236px;
            top: -53px;
            margin-left: 23px;
            
        }

        button{
            position: relative;
            top: 19px;
            left: 60px;
            width: 120px;
            height: 38px;
            padding: 4px 10px;
            border-radius: 8px;
            border-style: none;
            font-weight: bold;

        }
    }

`
