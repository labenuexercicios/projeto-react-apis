import { useNavigate } from 'react-router-dom';
import { getPokedexImg } from "../../Utils/PokedexImg";
import { getPokedexDefense } from "../../Utils/PokedexDefense";
import "./PokedexCard.css";

function PokedexCard(props) {
    const { catchList, currentPokemon } = props;

    function padId(id = 0) {
        return id.toString().padStart(3, '0');
    }

    const navigate = useNavigate();

    const isPokemonCaught = catchList.some(pokemon => pokemon === currentPokemon.name);

    function getPokemonIdByName(name) {
        return currentPokemon.name
    }

    function goToDetailsPage(pokemonName) {
        const pokemonId = getPokemonIdByName(currentPokemon.name);
        console.log(pokemonId)
        localStorage.setItem('pokemonId', pokemonId);
        navigate(`/${pokemonId}`);
    }

    return (
        <div className="containerPokedexCard">
            <div className="pokedexBody">
                <div className="pokemonName">
                    <a>#{padId(currentPokemon.id)} {currentPokemon.name ? currentPokemon.name.charAt(0).toUpperCase() + currentPokemon.name.slice(1) : ''}</a>
                </div>
                {isPokemonCaught ? (
                    <div className="pokedexCatchAlready"></div>
                ) : (
                    <div></div>
                )}
                <div className="pokedexSquare">
                    <div className="pokedexBackground"></div>
                </div>
                {getPokedexImg((currentPokemon.name))}
                <div className="pokedexDesc">
                    <a>TYPE DEFENSE</a>
                    {getPokedexDefense((currentPokemon.name))}

                </div>
                <div className="pokedexDescEffect"></div>
                <div className="controler"></div>
                <div className="goToDetailsPage" onClick={() => goToDetailsPage(currentPokemon.name)}>+</div>
                <div className="effectLeft"></div>
                <div className="pokedexFirstType">
                    <a style={{ color: "white" }}>{currentPokemon.types[0] ? currentPokemon.types[0].type.name.charAt(0).toUpperCase() + currentPokemon.types[0].type.name.slice(1) : ''}</a>
                </div>
                <div className="blueScreenEffect1"></div>
                <div className="pokedexSecondType">
                    <a style={{ color: "white" }}>{currentPokemon.types[1] ? currentPokemon.types[1].type.name.charAt(0).toUpperCase() + currentPokemon.types[1].type.name.slice(1) : ''}</a>
                </div>
                <div className="blueScreenEffect2"></div>
            </div>
        </div>
    );
}

export default PokedexCard;