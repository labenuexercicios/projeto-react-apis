import {HeaderPokedexPage} from '../../components/Header/HeaderPokedexPage'

export const PokedexPage = () => {
    return(
        <div>
            <HeaderPokedexPage />
            <h1>Meus Pokémons</h1>
            <p>Aqui serão renderizados os Pokémons adicionados à Pokédex, ou seja, receberá os Cards do componente pokemonCard.</p>
        </div>  
    )
}