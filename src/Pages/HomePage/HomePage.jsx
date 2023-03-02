import { Card } from "../../components/Card/Card"
import { Header,Main } from "./style"

import axios from "axios"
import { useEffect, useState } from "react"

export const HomePage = () => {
    const [pokeList, setPokeList] = useState([])

    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = () => {
        let endpoints = []
        for (let i = 1; i <= 50; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        axios.all(endpoints.map((endpoint) =>
            axios
                .get(endpoint)))
            .then((res) => { setPokeList(res) })
            .catch((err) => { console.log(err) })
    }

    return (
        <div>
            <Header>
                <h1><img width="200px" src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" alt=""/></h1>
                <button>Pokedex</button>
            </Header>
            <Main>
                {pokeList.map((pokemon) => {
                    return (
                        <Card key={pokemon.data.name} name={pokemon.data.name} image={pokemon.data.sprites.front_default} type={pokemon.data.types} id={pokemon.data.id} />
                    )
                })}
            </Main>
        </div>
    )
}
