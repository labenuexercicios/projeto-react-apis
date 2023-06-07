import { useLocation, useNavigate } from "react-router-dom";
import { goToHomePage, goToPokedexPage } from "../../Routes/Coordinator";
import pokemonLogo from "../../Assets/pokemonLogo.svg"
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <img className="navbarLogoHome" src={pokemonLogo} alt="pokemonLogo" />
            <div className="navbarGifHome"></div>
            <button className="buttonNavbarPokedex" onClick={() => goToPokedexPage(navigate)}>
              POKEDEX
            </button>
          </>
        );
      case "/pokedex":
        return (
          <>
            <button className="buttonNavbarHome" onClick={() => goToHomePage(navigate)}>
              <div>Wild Pokemon</div>
            </button>
            <img className="navbarLogo" src={pokemonLogo} alt="pokemonLogo" />
            <div className="navbarGif"></div>
            <div className="gifPokedex"></div>
          </>
        );
      default:
        return (
          <>
            <button className="buttonNavbarHome" onClick={() => goToHomePage(navigate)}>
              <div>Wild Pokemon</div>
            </button>
            <img className="navbarLogo" src={pokemonLogo} alt="pokemonLogo" />
            <button className="buttonNavbarPokedex" onClick={() => goToPokedexPage(navigate)}>
              <div>POKEDEX</div>
            </button>
          </>
        );
    }
  };

  return <div className="containerNavBar">{renderHeader()}</div>;
}

export default Navbar;
