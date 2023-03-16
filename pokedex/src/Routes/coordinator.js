import { useNavigate } from "react-router-dom"

   export const goToDetailsPage = (navigate, pokemon) => {
        navigate(`/detailsPage/${pokemon.name}`)
    }

    export const goToMyPokedexPage = (navigate) => {
        navigate("myPokedex")
        console.log(navigate)
    }

    export const goToPokedexPage = (navigate) => {
        navigate("/")
    }