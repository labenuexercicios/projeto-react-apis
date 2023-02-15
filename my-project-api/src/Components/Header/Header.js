import { Head, PokedexButton, Image, LeftButton } from "./HeaderStyle";
import {  useNavigate } from "react-router-dom"
import Logo from "../Images/Logo.png";
import { useState } from "react";
import { goToPokedexPage } from "../../router/Codinator";



export function Header(){
    const [tela, setTela] = useState(1)
    // const [button, setButton] = useState()
    
    
    const navigate = useNavigate();

    function saveFunction () {
        goToPokedexPage(navigate);
        changeTela(2);
    }
        // setButton(saveFunction);
        
    
    
    
    


    const changeTela = (tela) => setTela(tela);


    if(tela === 1) {
        return (
            <Head>
                <Image src={Logo}/>
                    <PokedexButton onClick={saveFunction}>Pokedex</PokedexButton> 
            </Head>
            );
        }
    
            
        if(tela === 2){
            return (
                <Head>
                    <Image src={Logo}/>
                    <LeftButton onClick={saveFunction}>Todos Pokémons </LeftButton>
                </Head>
            );
        }
    

        if(tela === 3){
        return ( 
                <Head>
                    <Image src={Logo}/>
                    <LeftButton onClick={saveFunction}>Todos Pokémons </LeftButton>
                    <button onClick={()=>{}}>Excluir da Pokedex</button>
                </Head>

            );
        }
    }

    

    
    
    



    
    
    
    


    