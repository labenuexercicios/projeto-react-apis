import { Head, PokedexButton, Image } from "./HeaderStyle";
import {  useNavigate } from "react-router-dom"
import Logo from "../Images/Logo.png";
// import { PokemonDetailPage } from "../../Pages/PokemonDetailPage/PokemonDetailPage";
// import { getFormSubmissionInfo } from "react-router-dom/dist/dom";
// import { PokemonsListPage } from "../../Pages/PokemonsListPage/PokemonsListPage";
// import { PokedexPage } from "../../Pages/PokedexPage/PokedexPage";
// import { useState } from "react";
// import { PokemonDetailPage } from "../../Pages/PokemonDetailPage/PokemonDetailPage";



export function Header(){
    // const [header, setReader] = useState('1')
    // const changeHeader = (header) => {
    //     setReader(header)};

    const navigate = useNavigate('pokemondetailpage');
    
    const goToListPage = () => {
        navigate('/lista');
    };
    
    // const renderHeader = () => {
    //     switch(header) {
    //         case 'pokemondetailpage':
    //             return<Head>
    //             <Image src={Logo}/>
    //             <PokedexButton onClick={()=>{changeHeader}}>Pokedex</PokedexButton>
    //         </Head>
    //         case 'pokedexpage' :
    //             return<Head>
    //             <Image src={Logo}/>
    //             <PokedexButton onClick={()=>{changeHeader}}>Pokedex</PokedexButton>
    //         </Head>
    //         case 'pokemonlistpage':
    //             return<Head>
    //             <Image src={Logo}/>
    //             <PokedexButton onClick={changeHeader}>Pokedex</PokedexButton>
    //         </Head>
    //     }
    // };

    // if(header === 1){
    //     return( <Head>
    //                 <Image src={Logo}/>
    //                 <PokedexButton onClick={()=>changeHeader(1)}>Pokedex</PokedexButton>
    //             </Head>
    //     )
    // }if(header === 2){
            
        
    //     return(<Head>
    //                     <Image src={Logo}/>
    //                      <PokedexButton onClick={()=>changeHeader(2)}>Pokedex</PokedexButton>
    //                </Head>
            
    //     )
    // }};


    return(
        
        <Head>
            <Image src={Logo}/>
            <PokedexButton onClick={goToListPage}>Pokedex</PokedexButton>
        </Head>
    )
    };
    
    
    
    


    // const renderPage = () => {
    //     switch(changeHeader){
    //         case 'detailpage':
    //             return 
    //                     <Head>
    //                             <Image src={Logo}/>
    //                            <PokedexButton onClick={goToListPage}>Pokedex</PokedexButton>
    //                     </Head>
    //         case 'pokedexpage':
    //             return
    //                         <Head>
    //                                 <Image src={Logo}/>
    //                                 <PokedexButton onClick={goToListPage}>Pokedex</PokedexButton>
    //                         </Head>
    //         case 'listpage':
    //             return 
    //                         <Head>
    //                                 <Image src={Logo}/>
    //                                 <PokedexButton onClick={goToListPage}>Pokedex</PokedexButton>
    //                         </Head>
    //                         }
    //                         return(
    //                             <Head>
    //                                     <Image src={Logo}/>
    //                                    <PokedexButton onClick={goToListPage}>Pokedex</PokedexButton>
    //                             </Head>
    //                         )
    //             ;
    //                     };


                        
                    