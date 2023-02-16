import { Head, PokedexButton, Image, LeftButton } from "./HeaderStyle";
import {  useNavigate } from "react-router-dom"
import Logo from "../Images/Logo.png";
import { useState } from "react";
import { goToPokedexPage, goToListPage } from "../../router/Codinator";
// import { goToPokedexPage } from "../../router/Codinator";



export function Header(){
    const [tela, setTela] = useState(1)
    // const [button, setButton] = useState()

    const navigate = useNavigate();

    

    if(tela === 1) {
        return (
            <Head>
                <Image src={Logo}/>
                    <PokedexButton onClick={()=>{goToPokedexPage (navigate, setTela)}}>Pokedex</PokedexButton> 
            </Head>
            );
        }

    
            
        if(tela === 2) {
            return (
                <Head>
                    <Image src={Logo}/>
                    <LeftButton onClick={()=>{goToListPage (navigate, setTela)}}>Todos Pokémons </LeftButton>
                </Head>
            );
        }
    }

    //     if() {
    //     return ( 
    //             <Head>
    //                 <Image src={Logo}/>
    //                 <LeftButton onClick={()=>{goToListPage (navigate, setTela)}}>Todos Pokémons </LeftButton>
    //                 <button>Excluir da Pokedex</button>
    //             </Head>

    //         );
    //     }
    // }

    

    
    
    



    
    
    
    


    