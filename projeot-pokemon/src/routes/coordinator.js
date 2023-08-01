import axios from "axios"

export const goToHomepage = (navigate) => {
    navigate("/")
}

export const goToPokemonDetailPage = (navigate) => {
    navigate(`/details/:${nome}`)
}

export const goToPokemonListPage = (navigate) => {
    navigate("/list")
}