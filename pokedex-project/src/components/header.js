import { useNavigate } from "react-router-dom";
import { goHome, goToDetails, goToPokedex } from "../routes/cordinator";

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <button
        onClick={() => {
          goToPokedex(navigate, "pokedex");
        }}
      >
        ir para pokedex
      </button>
      <button
        onClick={() => {
          goToDetails(navigate, "details");
        }}
      >
        ir para detalhes
      </button>
      <button
        onClick={() => {
          goHome(navigate);
        }}
      >
        ir para home
      </button>
    </header>
  );
}

export default Header;
