import Bulbasaur from "../Assets/bulbasaur.png"
import backgroundBulbasaur from "../Assets/backgroundbulbasaur.png"
import backgroundIvysaur from "../Assets/ivysaur.png"
import Ivysaur from "../Assets/ivysaur1.png"
import bgVenusaur from "../Assets/venusaur.png"
import Venusaur from "../Assets/venusaur1.png"
import bgCharmander from "../Assets/charmander.png"
import Charmander from "../Assets/charmander1.png"
import bgCharmeleon from "../Assets/charmeleon.png"
import Charmeleon from "../Assets/charmeleon1.png"
import bgCharizard from "../Assets/charizard.png"
import Charizard from "../Assets/charizard1.png"
import bgSquirtle from "../Assets/squirtle.png"
import bgWartortle from "../Assets/wartortle.png"
import Wartortle from "../Assets/wartortle1.png"
import bgBlastoise from "../Assets/blastois.png"
import bgCaterpie from "../Assets/caterpie.png"
import Caterpie from "../Assets/caterpie1.png"
import bgMetapod from "../Assets/metapod.png"
import Metapod from "../Assets/metapod1.png"
import bgButterfree from "../Assets/butterfree.png"
import Butterfree from "../Assets/butterfree1.png"
import bgWeedle from "../Assets/weedle.png"
import Weedle from "../Assets/weedle1.png"
import bgKakuna from "../Assets/kakuna.jpg"
import Kakuna from "../Assets/kakuna2.png"
import bgBeedrill from "../Assets/beedrill.png"
import Beedrill from "../Assets/beedrill1.png"
import bgPidgey from "../Assets/pidgey.png"
import Pidgey from "../Assets/pidgey1.png"
import bgPidgeotto from "../Assets/pidgeotto.jpg"
import bgPidgeot from "../Assets/pidgeotx.jpg"
import Pidgeot from "../Assets/pidgeot2.png"
import bgRattata from "../Assets/rattata.jpg"
import bgRaticate from "../Assets/raticate.jpg"
import bgSpearow from "../Assets/spearow.jpg"
import bgFearow from "../Assets/fearow.jpg"
import Fearow from "../Assets/fearow1.png"
import bgEkans from "../Assets/ekans.jpg"
import bgArbok from "../Assets/arbok.jpg"

export const getCardImg = (name) => {

    let cardImg;

    switch (name) {
        case "bulbasaur":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg" data-speedx="0.2" data-x-scroll="80" data-y-scroll="80" src={backgroundBulbasaur} alt={name}>
                        </img>
                    </div>
                    <img className="parallax parallax-imgPokemon" data-speedx="1" data-x-scroll="200" data-y-scroll="200" src={Bulbasaur} alt={name} />
                </div>
            );
            break;
        case "ivysaur":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg backgroundIvysaur" data-speedx="0.2" data-x-scroll="100" data-y-scroll="100" src={backgroundIvysaur} alt={name}>
                        </img>
                    </div>
                    <img className="parallax parallax-imgPokemon ivysaur" data-speedx="0.2" data-x-scroll="100" data-y-scroll="100" src={Ivysaur} alt={name} />
                </div>
            );
            break;
        case "venusaur":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg bgVenusaur" data-speedx="0.2" data-x-scroll="200" data-y-scroll="500" src={bgVenusaur} alt={name}>
                        </img>
                    </div>
                    <img className="parallax parallax-imgPokemon venusaur" data-speedx="0.2" data-x-scroll="200" data-y-scroll="500" src={Venusaur} alt={name} />
                </div>
            );
            break;
        case "charmander":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg backgroundIvysaur" data-speedx="0.2" data-x-scroll="100" data-y-scroll="150" src={bgCharmander} alt={name}>
                        </img>
                    </div>
                    <img className="parallax parallax-imgPokemon ivysaur" data-speedx="0.2" data-x-scroll="100" data-y-scroll="150" src={Charmander} alt={name} />
                </div>
            );
            break;
        case "charmeleon":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg backgroundIvysaur" data-speedx="0.2" data-x-scroll="100" data-y-scroll="150" src={bgCharmeleon} alt={name}>
                        </img>
                    </div>
                    <img className="parallax parallax-imgPokemon ivysaur" data-speedx="0.2" data-x-scroll="100" data-y-scroll="150" src={Charmeleon} alt={name} />
                </div>
            );
            break;
        case "charizard":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg bgCharizard" data-speedx="0.2" data-x-scroll="100" data-y-scroll="100" src={bgCharizard} alt={name}>
                        </img>
                    </div>
                    <img className="parallax parallax-imgPokemon charizard" data-speedx="0.2" data-x-scroll="100" data-y-scroll="100" src={Charizard} alt={name} />
                </div>
            );
            break;
        case "squirtle":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg backgroundIvysaur" data-speedx="0.2" data-x-scroll="100" data-y-scroll="100" src={bgSquirtle} alt={name}>
                        </img>
                    </div>
                </div>
            );
            break;
        case "wartortle":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg backgroundIvysaur" data-speedx="0.2" data-x-scroll="100" data-y-scroll="150" src={bgWartortle} alt={name}>
                        </img>
                    </div>
                    <img className="parallax parallax-imgPokemon ivysaur" data-speedx="0.2" data-x-scroll="100" data-y-scroll="150" src={Wartortle} alt={name} />
                </div>
            );
            break;
        case "blastoise":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg bgVenusaur" data-speedx="0.2" data-x-scroll="100" data-y-scroll="500" src={bgBlastoise} alt={name}>
                        </img>
                    </div>
                </div>
            );
            break;
        case "caterpie":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg backgroundIvysaur" data-speedx="0.2" data-x-scroll="100" data-y-scroll="150" src={bgCaterpie} alt={name}>
                        </img>
                    </div>
                    <img className="parallax parallax-imgPokemon caterpie" data-speedx="0.2" data-x-scroll="100" data-y-scroll="150" src={Caterpie} alt={name} />
                </div>
            );
            break;
        case "metapod":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg backgroundIvysaur" data-speedx="0.2" data-x-scroll="100" data-y-scroll="150" src={bgMetapod} alt={name}>
                        </img>
                    </div>
                    <img className="parallax parallax-imgPokemon caterpie" data-speedx="0.2" data-x-scroll="100" data-y-scroll="150" src={Metapod} alt={name} />
                </div>
            );
            break;
        case "butterfree":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg bgCharizard" data-speedx="0.2" data-x-scroll="100" data-y-scroll="100" src={bgButterfree} alt={name}>
                        </img>
                    </div>
                    <img className="parallax parallax-imgPokemon butterfree" data-speedx="0.2" data-x-scroll="100" data-y-scroll="100" src={Butterfree} alt={name} />
                </div>
            );
            break;
        case "weedle":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg backgroundIvysaur" data-speedx="0.2" data-x-scroll="100" data-y-scroll="150" src={bgWeedle} alt={name}>
                        </img>
                    </div>
                    <img className="parallax parallax-imgPokemon ivysaur" data-speedx="0.2" data-x-scroll="100" data-y-scroll="150" src={Weedle} alt={name} />
                </div>
            );
            break;
        case "kakuna":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg bgKakuna" data-speedx="0.2" data-x-scroll="100" data-y-scroll="650" src={bgKakuna} alt={name}>
                        </img>
                    </div>
                    <img className="parallax parallax-imgPokemon kakuna" data-speedx="0.2" data-x-scroll="100" data-y-scroll="650" src={Kakuna} alt={name} />
                </div>
            );
            break;
        case "beedrill":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg bgBeedrill" data-speedx="0.2" data-x-scroll="100" data-y-scroll="100" src={bgBeedrill} alt={name}>
                        </img>
                    </div>
                    <img className="parallax parallax-imgPokemon beedrill" data-speedx="0.2" data-x-scroll="100" data-y-scroll="100" src={Beedrill} alt={name} />
                </div>
            );
            break;
        case "pidgey":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg backgroundIvysaur" data-speedx="0.2" data-x-scroll="100" data-y-scroll="150" src={bgPidgey} alt={name}>
                        </img>
                    </div>
                    <img className="parallax parallax-imgPokemon ivysaur" data-speedx="0.2" data-x-scroll="100" data-y-scroll="150" src={Pidgey} alt={name} />
                </div>
            );
            break;
        case "pidgeotto":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg backgroundIvysaur" data-speedx="0.2" data-x-scroll="100" data-y-scroll="100" src={bgPidgeotto} alt={name}>
                        </img>
                    </div>
                </div>
            );
            break;
        case "pidgeot":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg backgroundIvysaur" data-speedx="0.2" data-x-scroll="100" data-y-scroll="150" src={bgPidgeot} alt={name}>
                        </img>
                    </div>
                    <img className="parallax parallax-imgPokemon pidgeot" data-speedx="0.2" data-x-scroll="100" data-y-scroll="150" src={Pidgeot} alt={name} />
                </div>
            );
            break;
        case "rattata":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg backgroundIvysaur" data-speedx="0.2" data-x-scroll="100" data-y-scroll="100" src={bgRattata} alt={name}>
                        </img>
                    </div>
                </div>
            );
            break;
        case "raticate":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg backgroundRaticate" data-speedx="0.2" data-x-scroll="100" data-y-scroll="100" src={bgRaticate} alt={name}>
                        </img>
                    </div>
                </div>
            );
            break;
        case "spearow":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg backgroundIvysaur" data-speedx="0.2" data-x-scroll="100" data-y-scroll="100" src={bgSpearow} alt={name}>
                        </img>
                    </div>
                </div>
            );
            break;
        case "fearow":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg backgroundIvysaur" data-speedx="0.2" data-x-scroll="100" data-y-scroll="150" src={bgFearow} alt={name}>
                        </img>
                    </div>
                    <img className="parallax parallax-imgPokemon ivysaur" data-speedx="0.2" data-x-scroll="100" data-y-scroll="150" src={Fearow} alt={name} />
                </div>
            );
            break;
        case "ekans":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg backgroundRaticate" data-speedx="0.2" data-x-scroll="100" data-y-scroll="100" src={bgEkans} alt={name}>
                        </img>
                    </div>
                </div>
            );
            break;
        case "arbok":
            cardImg = (
                <div>
                    <div className="square">
                        <img className="parallax parallax-borderImg backgroundIvysaur" data-speedx="0.2" data-x-scroll="100" data-y-scroll="100" src={bgArbok} alt={name}>
                        </img>
                    </div>
                </div>
            );
            break;
        default:
            cardImg = <div>No pokemons on Pokedex</div>;
            break;
    }

    return cardImg;
};