import { useNavigate } from "react-router-dom"

import { useContext } from "react"
import { GlobalContext } from "../Contexts/GlobalContext"


   export const goToDetailsPage = (navigate, pokemon) => {
        navigate(`/detailsPage/${pokemon.name}`)
    }

    export const goToMyPokedexPage = (navigate, idButton) => {
        navigate("myPokedex")
        console.log(idButton)
        console.log(navigate)
    }

    export const goToPokedexPage = (navigate) => {
        navigate("/")
    }