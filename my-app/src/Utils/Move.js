import poisonImage from "../Assets/poison_medallion-removebg-preview.png"
import fireImage from "../Assets/fire_medallion-removebg-preview.png"
import bugImage from "../Assets/bug_medallion-removebg-preview.png"
import darkImage from "../Assets/dark_medallion-removebg-preview.png"
/* import dragonImage from "../Assets/dragon_medallion-removebg-preview.png"
import eletricImage from "../Assets/electric_medallion-removebg-preview.png"
import fairyImage from "../Assets/fairy_medallion-removebg-preview.png"
import fightImage from "../Assets/fighting_medallion-removebg-preview.png" */
import flyImage from "../Assets/flying_medallion-removebg-preview.png"
/* import ghostImage from "../Assets/ghost_medallion-removebg-preview.png" */
import grassImage from "../Assets/grass_medallion-removebg-preview.png"
/* import groundImage from "../Assets/ground_medallion-removebg-preview.png"
import iceImage from "../Assets/ice_medallion-removebg-preview.png" */
import normalImage from "../Assets/normal_medallion-removebg-preview.png"
/* import psyImage from "../Assets/psychic_medallion-removebg-preview.png"
import rockImage from "../Assets/rock_medallion-removebg-preview.png"
import steelImage from "../Assets/steel_medallion-removebg-preview.png" */
import waterImage from "../Assets/water_medallion-removebg-preview.png"

export const getMove = (name) => {

    let moveType;

    switch (name) {
        case "bulbasaur":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={grassImage} alt="" />
                        </div>
                        <div className="moveName">Vine Whipe</div>
                        <div className="moveCost">10</div>
                    </div>
                    <div className="moveBot">
                        <div className="moveType">
                            <img src={grassImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                        <div className="moveName">Razor Leaf</div>
                        <div className="moveCost">20</div>
                    </div>
                </div>
            );
            break;
        case "ivysaur":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={grassImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                        <div className="moveName">Razor Leaf</div>
                        <div className="moveCost">30</div>
                    </div>
                    <div className="moveBot">
                        <div className="moveType">
                            <img src={grassImage} alt="" />
                            <img src={poisonImage} alt="" />
                        </div>
                        <div className="moveName">Poison Powder</div>
                        <div className="moveCost">20</div>
                    </div>
                </div>
            );
            break;
        case "venusaur":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={grassImage} alt="" />
                            <img src={poisonImage} alt="" />
                        </div>
                        <div className="moveName">Poison Powder</div>
                        <div className="moveCost">20</div>
                    </div>
                    <div className="moveBot">
                        <div className="moveType">
                            <img src={grassImage} alt="" />
                            <img src={grassImage} alt="" />
                            <img src={grassImage} alt="" />
                            <img src={grassImage} alt="" />

                        </div>
                        <div className="moveName">Solarbeam</div>
                        <div className="moveCost">80</div>
                    </div>
                </div>
            );
            break;
        case "charmander":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={normalImage} alt="" />
                        </div>
                        <div className="moveName">Scratch</div>
                        <div className="moveCost">10</div>
                    </div>
                    <div className="moveBot">
                        <div className="moveType">
                            <img src={fireImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                        <div className="moveName">Flame Tail</div>
                        <div className="moveCost">20</div>
                    </div>
                </div>
            );
            break;
        case "charmeleon":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={fireImage} alt="" />
                            <img src={fireImage} alt="" />
                        </div>
                        <div className="moveName">Fire Fang</div>
                        <div className="moveCost">20</div>
                    </div>
                    <div className="moveBot">
                        <div className="moveType">
                            <img src={fireImage} alt="" />
                            <img src={fireImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                        <div className="moveName">Flamethrower</div>
                        <div className="moveCost">40</div>
                    </div>
                </div>
            );
            break;
        case "charizard":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={flyImage} alt="" />
                            <img src={flyImage} alt="" />
                        </div>
                        <div className="moveName">Wing Attack</div>
                        <div className="moveCost">40</div>
                    </div>
                    <div className="moveBot">
                        <div className="moveType">
                            <img src={fireImage} alt="" />
                            <img src={fireImage} alt="" />
                            <img src={fireImage} alt="" />
                            <img src={fireImage} alt="" />
                        </div>
                        <div className="moveName">Fire Spin</div>
                        <div className="moveCost">70</div>
                    </div>
                </div>
            );
            break;
        case "squirtle":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={waterImage} alt="" />
                        </div>
                        <div className="moveName">Bubble</div>
                        <div className="moveCost">10</div>
                    </div>
                    <div className="moveBot">
                        <div className="moveType">
                            <img src={waterImage} alt="" />
                            <img src={waterImage} alt="" />
                        </div>
                        <div className="moveName">Water Gun</div>
                        <div className="moveCost">20</div>
                    </div>
                </div>
            );
            break;
        case "wartortle":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={waterImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                        <div className="moveName">Bite</div>
                        <div className="moveCost">20</div>
                    </div>
                    <div className="moveBot">
                        <div className="moveType">
                            <img src={waterImage} alt="" />
                            <img src={waterImage} alt="" />
                            <img src={waterImage} alt="" />
                        </div>
                        <div className="moveName">Waterfall</div>
                        <div className="moveCost">40</div>
                    </div>
                </div>
            );
            break;
        case "blastoise":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                        <div className="moveName">Rapid Spin</div>
                        <div className="moveCost">50</div>
                    </div>
                    <div className="moveBot">
                        <div className="moveType">
                            <img src={waterImage} alt="" />
                            <img src={waterImage} alt="" />
                            <img src={waterImage} alt="" />
                        </div>
                        <div className="moveName">Hydro Pump</div>
                        <div className="moveCost">70</div>
                    </div>
                </div>
            );
            break;
        case "caterpie":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={bugImage} alt="" />
                        </div>
                        <div className="moveName">Bug Bite</div>
                        <div className="moveCost">10</div>
                    </div>
                </div>
            );
            break;
        case "metapod":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={normalImage} alt="" />
                        </div>
                        <div className="moveName">Iron Defense</div>
                        <div className="moveCost"></div>
                    </div>
                    <div className="moveBot">
                        <div className="moveType">
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                        <div className="moveName">Harden</div>
                        <div className="moveCost"></div>
                    </div>
                </div>
            );
            break;
        case "butterfree":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={grassImage} alt="" />
                        </div>
                        <div className="moveName">Sleep Powder</div>
                        <div className="moveCost"></div>
                    </div>
                    <div className="moveBot">
                        <div className="moveType">
                            <img src={flyImage} alt="" />
                            <img src={flyImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                        <div className="moveName">Gust</div>
                        <div className="moveCost">40</div>
                    </div>
                </div>
            );
            break;
        case "weedle":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={poisonImage} alt="" />
                        </div>
                        <div className="moveName">Poison Sting</div>
                        <div className="moveCost">10</div>
                    </div>
                </div>
            );
            break;
        case "kakuna":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={grassImage} alt="" />
                        </div>
                        <div className="moveName">Harden</div>
                        <div className="moveCost"></div>
                    </div>
                </div>
            );
            break;
        case "beedrill":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={poisonImage} alt="" />
                        </div>
                        <div className="moveName">Poison Sting</div>
                        <div className="moveCost">15</div>
                    </div>
                    <div className="moveBot">
                        <div className="moveType">
                            <img src={bugImage} alt="" />
                            <img src={bugImage} alt="" />
                        </div>
                        <div className="moveName">Fell Stinger</div>
                        <div className="moveCost">50</div>
                    </div>
                </div>
            );
            break;
        case "pidgey":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={normalImage} alt="" />
                        </div>
                        <div className="moveName">Tackle</div>
                        <div className="moveCost">20</div>
                    </div>
                </div>
            );
            break;
        case "pidgeotto":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={normalImage} alt="" />
                        </div>
                        <div className="moveName">Quick Attack</div>
                        <div className="moveCost">30</div>
                    </div>
                    <div className="moveBot">
                        <div className="moveType">
                            <img src={flyImage} alt="" />
                            <img src={flyImage} alt="" />
                        </div>
                        <div className="moveName">Whirlwind</div>
                        <div className="moveCost">20</div>
                    </div>
                </div>
            );
            break;
        case "pidgeot":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={flyImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                        <div className="moveName">Wing Attack</div>
                        <div className="moveCost">30</div>
                    </div>
                    <div className="moveBot">
                        <div className="moveType">
                            <img src={flyImage} alt="" />
                            <img src={flyImage} alt="" />
                            <img src={flyImage} alt="" />
                        </div>
                        <div className="moveName">Hurricane</div>
                        <div className="moveCost">60</div>
                    </div>
                </div>
            );
            break;
        case "rattata":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={normalImage} alt="" />
                        </div>
                        <div className="moveName">Bite</div>
                        <div className="moveCost">10</div>
                    </div>
                </div>
            );
            break;
        case "raticate":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                        <div className="moveName">Quick Attack</div>
                        <div className="moveCost">30</div>
                    </div>
                    <div className="moveBot">
                        <div className="moveType">
                            <img src={darkImage} alt="" />
                            <img src={darkImage} alt="" />
                        </div>
                        <div className="moveName">Crunch</div>
                        <div className="moveCost">50</div>
                    </div>
                </div>
            );
            break;
        case "spearow":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={normalImage} alt="" />
                        </div>
                        <div className="moveName">peck</div>
                        <div className="moveCost">10</div>
                    </div>
                </div>
            );
            break;
        case "fearow":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                        <div className="moveName">Drill Peck</div>
                        <div className="moveCost">50</div>
                    </div>
                    <div className="moveBot">
                        <div className="moveType">
                            <img src={flyImage} alt="" />
                            <img src={flyImage} alt="" />
                        </div>
                        <div className="moveName">Wing Attack</div>
                        <div className="moveCost">20</div>
                    </div>
                </div>
            );
            break;
        case "ekans":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={normalImage} alt="" />
                        </div>
                        <div className="moveName">Bite</div>
                        <div className="moveCost">10</div>
                    </div>
                    <div className="moveBot">
                        <div className="moveType">
                            <img src={poisonImage} alt="" />
                        </div>
                        <div className="moveName">Poison Sting</div>
                        <div className="moveCost">10</div>
                    </div>
                </div>
            );
            break;
        case "arbok":
            moveType = (
                <div className="move">
                    <div className="moveTop">
                        <div className="moveType">
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                        <div className="moveName">Wrap</div>
                        <div className="moveCost">50</div>
                    </div>
                    <div className="moveBot">
                        <div className="moveType">
                            <img src={poisonImage} alt="" />
                            <img src={poisonImage} alt="" />
                        </div>
                        <div className="moveName">Deadly Poison</div>
                        <div className="moveCost">10</div>
                    </div>
                </div>
            );
            break;
        default:
            moveType = <div>No moves found</div>;
            break;
    }

    return moveType;
};