import img1 from "../Assets/img1.gif"
import img2 from "../Assets/img2.gif"
import img3 from "../Assets/img3.gif"
import img4 from "../Assets/img4.gif"
import img5 from "../Assets/img5.gif"
import img6 from "../Assets/img6.gif"
import img7 from "../Assets/img7.gif"
import img8 from "../Assets/img8.gif"
import img9 from "../Assets/img9.gif"
import img10 from "../Assets/img10.gif"
import img11 from "../Assets/img11.gif"
import img12 from "../Assets/img12.gif"
import img13 from "../Assets/img13.gif"
import img14 from "../Assets/img14.gif"
import img15 from "../Assets/img15.gif"
import img16 from "../Assets/img16.gif"
import img17 from "../Assets/img17.gif"
import img18 from "../Assets/img18.gif"
import img19 from "../Assets/img19.gif"
import img20 from "../Assets/img20.gif"
import img21 from "../Assets/img21.gif"
import img22 from "../Assets/img22.gif"
import img23 from "../Assets/img23.gif"
import img24 from "../Assets/img24.gif"


export const getPokedexImg = (name) => {

    let pokemonImg;

    switch (name) {
        case "bulbasaur":
            pokemonImg = (
                <div>
                    <img className="pokedexPokemonSmall" src={img1} alt='' />
                </div>
            );
            break;
        case "ivysaur":
            pokemonImg = (
                <div>
                    <img className="pokedexPokemonMedium" src={img2} alt='' />
                </div>
            );
            break;
        case "venusaur":
            pokemonImg = (
                <div>
                    <img className="pokedexPokemonBigger" src={img3} alt='' />
                </div>
            );
            break;
        case "charmander":
            pokemonImg = (
                <div>
                    <img className="pokedexPokemonMedium" src={img4} alt='' />
                </div>
            );
            break;
        case "charmeleon":
            pokemonImg = (
                <div>
                    <img className="pokedexPokemonSmall" src={img5} alt='' />
                </div>
            );
            break;
        case "charizard":
            pokemonImg = (
                <div>
                    <img className="pokedexPokemonBigger" src={img6} alt='' />
                </div>
            );
            break;
        case "squirtle":
            pokemonImg = (
                <div>
                    <img className="pokedexPokemonSmall" src={img7} alt='' />
                </div>
            );
            break;
        case "wartortle":
            pokemonImg = (
                <div>
                    <img className="pokedexPokemonMedium" src={img8} alt='' />
                </div>
            );
            break;
        case "blastoise":
            pokemonImg = (
                <div>
                    <img className="pokedexPokemonBigger" src={img9} alt='' />
                </div>
            );
            break;
        case "caterpie":
            pokemonImg = (
                <div>
                    <img className="pokedexPokemonSmall" src={img10} alt='' />
                </div>
            );
            break;
        case "metapod":
            pokemonImg = (
                <div>
                    <img className="pokedexPokemonSmall" src={img11} alt='' />
                </div>
            );
            break;
        case "butterfree":
            pokemonImg = (
                <div>
                    <img className="pokedexPokemonSmall" src={img12} alt='' />
                </div>
            );
            break;
        case "weedle":
            pokemonImg = (
                <div>
                    <img className="pokedexPokemonSmall" src={img13} alt='' />
                </div>
            );
            break;
        case "kakuna":
            pokemonImg = (
                <div>
                    <img className="pokedexPokemonSmall" src={img14} alt='' />
                </div>
            );
            break;
        case "beedrill":
            pokemonImg = (
                <div>
                    <img className="pokedexPokemonSmall" src={img15} alt='' />
                </div>
            );
            break;
        case "pidgey":
            pokemonImg = (
                <div>
                    <img className="pokedexPokemonSmall" src={img16} alt='' />
                </div>
            );
            break;
        case "pidgeotto":
            pokemonImg = (
                <div>
                    <img className="pokedexPokemonBigger" src={img17} alt='' />
                </div>
            );
            break;
        case "pidgeot":
            pokemonImg = (
                <div>
                    <img className="pokedexPokemonMedium" src={img18} alt='' />
                </div>
            );
            break;
        case "rattata":
            pokemonImg = (
                <div>
                    <img className="pokedexPokemonSmall" src={img19} alt='' />
                </div>
            );
            break;
        case "raticate":
            pokemonImg = (
                <div>
                    <img className="pokedexPokemonSmall" src={img20} alt='' />
                </div>
            );
            break;
        case "spearow":
            pokemonImg = (
                <div>
                    <img className="pokedexPokemonSmall" src={img21} alt='' />
                </div>
            );
            break;
        case "fearow":
            pokemonImg = (
                <div>
                <img className="pokedexPokemonBigger" src={img22} alt=''/>
            </div>
            );
            break;
        case "ekans":
            pokemonImg = (
                <div>
                <img className="pokedexPokemonSmall" src={img23} alt=''/>
            </div>
            );
            break;
        case "arbok":
            pokemonImg = (
                <div>
                <img className="pokedexPokemonMedium" src={img24} alt=''/>
            </div>
            );
            break;
        default:
            pokemonImg = <div>No pokemons on Pokedex</div>;
            break;
    }

    return pokemonImg;
};