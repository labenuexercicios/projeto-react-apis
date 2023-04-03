import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HeaderContainer } from "./HeaderStyle"; 

function Header() {
  const location = useLocation();

  return (
    <HeaderContainer>
      <div>
        {location.pathname !== "/" && <Link className= "list-link" to="/">❮ <u>Todos os Pokémons</u></Link>}
      </div>
      <div className= "logo">
        <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" alt="Logo Pokémon" width={150} height={50}/>
      </div>
      <div className = "header-button">
        {location.pathname === "/" && <Link className = "pokedex-link" to="/pokedex">Pokédex</Link>}
      </div>
    </HeaderContainer>
  );
}

export default Header;
