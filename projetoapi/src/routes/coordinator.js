import { useNavigate } from "react-router-dom"



export const gotohomePage = (navigate) => {
    navigate("/")
}

export const gotopokedexPage = (navigate) => {
    navigate("/pokedex")
}

export const gotopokemonDetailPage = (navigate, id) => {
    navigate(`/detalhes/${id}`)
}
  