import { CartoesPokemon } from "../CartaoPokemon/CartaoPokemon"
import { Div, CartaoPokemon } from "./style"
import { useContext } from "react"
import { irParaPaginaPokedex } from "../../Rotas/coordinator"
import { useLocation, useNavigate } from "react-router-dom";
import headerimg from "../../icones/headerimg.svg"
import { GlobalContext } from "../Context/context"


export const PaginaPrincipalPokedex = () => {
    const context = useContext(GlobalContext)
    const { pokelist, addToPokedex, pokedex } = context

    const location = useLocation();

    // hook para redirecionar
    const navigate = useNavigate();

    const filteredPokelist = () =>
        pokelist.filter(
            (pokemonInList) =>
                !pokedex.find(
                    (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
                )
        );


    return (
        <CartaoPokemon >
            <div className="pokemonheader">
                <img src={headerimg} />
                <button className="botao" onClick={() => irParaPaginaPokedex(navigate)}><h2>Pokédex</h2></button>
            </div>

            <Div >

                <h1 className='classeh1'>  Todos Pokémons</h1>
                {filteredPokelist().map((pokemon) => (
                    <CartoesPokemon key={pokemon.url}
                        pokemonurl={pokemon.url} addToPokedex={addToPokedex} />
                ))}
            </Div>
        </CartaoPokemon>

    )

}