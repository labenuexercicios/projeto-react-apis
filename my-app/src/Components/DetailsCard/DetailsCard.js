import { getTypePokemon } from "../../Utils/TypePokemon";
import { getTypeColors } from "../../Utils/TypeColor";
import StatsBar from "../StatsBar/StatsBar"
import "./DetailsCard.css"
import { useEffect, useState } from "react";

function DetailsCard(props) {
    const { pokemon } = props;
    const [cardColor, setCardColor] = useState("");

    useEffect(() => {
        if (pokemon.types && pokemon.types.length === 1) {
            setCardColor(getTypeColors(pokemon.types[0].type.name))
        } else if (pokemon.types && pokemon.types.length > 1) {
            let colors = (getTypeColors(pokemon.types[0].type.name));
            let colors1 = (getTypeColors(pokemon.types[1].type.name));
            setCardColor(`linear-gradient(to bottom right, ${colors} 30%,${colors1})`);
        }
    }, []);
    
    return (
        <div className="detailsCard" style={{ background: cardColor }}>
            <div className="detailsLeft">
                <div className="detailsImage">
                    <div className="detailsFrontImage">
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>
                    <div className="detailsBackImage">
                        <img src={pokemon.sprites.back_default} alt={pokemon.name} />
                    </div>
                </div>
                <div className="baseStats">
                    <div className="base">Base Stats</div>
                    <div className="stats">
                        <div className="stats1">
                            <div className="hpDetails">HP</div>
                            <div className="numberDetails">{pokemon.stats[0].base_stat}</div>
                            <StatsBar
                                value={pokemon.stats[0].base_stat} />
                        </div>
                        <div className="stats2">
                            <div className="attackDetails">Attack</div>
                            <div className="numberDetails">{pokemon.stats[1].base_stat}</div>
                            <StatsBar
                                value={pokemon.stats[1].base_stat} />
                        </div>
                        <div className="stats3">
                            <div className="deffenseDetails">Deffense</div>
                            <div className="numberDetails">{pokemon.stats[2].base_stat}</div>
                            <StatsBar
                                value={pokemon.stats[2].base_stat} />
                        </div>
                        <div className="stats4">
                            <div className="spatkDetails">Sp.Atk</div>
                            <div className="numberDetails">{pokemon.stats[3].base_stat}</div>
                            <StatsBar
                                value={pokemon.stats[3].base_stat} />
                        </div>
                        <div className="stats5">
                            <div className="spdefDetails">Sp.Def</div>
                            <div className="numberDetails">{pokemon.stats[4].base_stat}</div>
                            <StatsBar
                                value={pokemon.stats[4].base_stat} />
                        </div>
                        <div className="stats6">
                            <div className="speedDetails">Speed</div>
                            <div className="numberDetails">{pokemon.stats[5].base_stat}</div>
                            <StatsBar
                                value={pokemon.stats[5].base_stat} />
                        </div>
                        <div className="totalStats">
                            <div className="total">Total: {(pokemon.stats[0].base_stat) + (pokemon.stats[1].base_stat) + (pokemon.stats[2].base_stat) + (pokemon.stats[3].base_stat) + (pokemon.stats[4].base_stat) + (pokemon.stats[5].base_stat)}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detailsRight">
                <div className="rightPokeballBackground"></div>
                <div className="detailsRightTop">
                    <div className="idNameType">
                        <div className="detailsId">#001</div>
                        <div className="detailsName">{pokemon.name}</div>
                        <div className="detailsType">
                            {pokemon.types && Array.isArray(pokemon.types) && pokemon.types.map((type, index) => (
                                <img key={type.slot} src={getTypePokemon(type.type.name)} alt="" />
                            ))}
                        </div>
                    </div>
                    <div className="detailsPokemonImage">
                        <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
                    </div>
                </div>
                <div className="detailsMoves">
                    <div className="moves">Moves:</div>
                    <div className="move1">{pokemon.moves[0].move.name}</div>
                    <div className="move2">{pokemon.moves[1].move.name}</div>
                    <div className="move3">{pokemon.moves[2].move.name}</div>
                    <div className="move4">{pokemon.moves[3].move.name}</div>
                </div>
            </div>
        </div>
    );
}

export default DetailsCard;