import poisonImage from "../Assets/poison_medallion-removebg-preview.png"
import fireImage from "../Assets/fire_medallion-removebg-preview.png"
import darkImage from "../Assets/dark_medallion-removebg-preview.png"
import dragonImage from "../Assets/dragon_medallion-removebg-preview.png"
import eletricImage from "../Assets/electric_medallion-removebg-preview.png"
import fairyImage from "../Assets/fairy_medallion-removebg-preview.png"
import fightImage from "../Assets/fighting_medallion-removebg-preview.png"
import flyImage from "../Assets/flying_medallion-removebg-preview.png"
import ghostImage from "../Assets/ghost_medallion-removebg-preview.png"
import grassImage from "../Assets/grass_medallion-removebg-preview.png"
import groundImage from "../Assets/ground_medallion-removebg-preview.png"
import iceImage from "../Assets/ice_medallion-removebg-preview.png"
import normalImage from "../Assets/normal_medallion-removebg-preview.png"
import psyImage from "../Assets/psychic_medallion-removebg-preview.png"
import rockImage from "../Assets/rock_medallion-removebg-preview.png"
import steelImage from "../Assets/steel_medallion-removebg-preview.png"
import waterImage from "../Assets/water_medallion-removebg-preview.png"

export const getWeakRes = (types) => {

    let weakType;

    switch (types) {
        case "bug":
            weakType = (
                <div className="weakResRetreat">
                    <div className="shadowLeft"></div>
                    <div className="leftBar">
                        <div className="bottomTypes">weakness</div>
                        <div className="typeWeakness"><img src={rockImage} alt="" /></div>
                        <div className="x">x</div>
                        <div className="x2">2</div>
                        <div className="spliter"></div>
                        <div className="bottomTypes1">resistance</div>
                        <div className="typeResistance"><img src={groundImage} alt="" /></div>
                        <div className="resSymbol">x</div>
                        <div className="resNumber">½</div>
                    </div>
                    <div className="shadowRight"></div>
                    <div className="rightBar">
                        <div className="retreatType">retreat</div>
                        <div className="retreatEnergy">
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                    </div>
                </div>
            );
            break;
        case "dark":
            weakType = (
                <div className="weakResRetreat">
                    <div className="shadowLeft"></div>
                    <div className="leftBar">
                        <div className="bottomTypes">weakness</div>
                        <div className="typeWeakness"><img src={fairyImage} alt="" /></div>
                        <div className="x">x</div>
                        <div className="x2">2</div>
                        <div className="spliter"></div>
                        <div className="bottomTypes1">resistance</div>
                        <div className="typeResistance"><img src={psyImage} alt="" /></div>
                        <div className="resSymbol">x</div>
                        <div className="resNumber">0</div>
                    </div>
                    <div className="shadowRight"></div>
                    <div className="rightBar">
                        <div className="retreatType">retreat</div>
                        <div className="retreatEnergy">
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                    </div>
                </div>
            );
            break;
        case "dragon":
            weakType = (
                <div className="weakResRetreat">
                    <div className="shadowLeft"></div>
                    <div className="leftBar">
                        <div className="bottomTypes">weakness</div>
                        <div className="typeWeakness"><img src={iceImage} alt="" /></div>
                        <div className="x">x</div>
                        <div className="x2">2</div>
                        <div className="spliter"></div>
                        <div className="bottomTypes1">resistance</div>
                        <div className="typeResistance"><img src={eletricImage} alt="" /></div>
                        <div className="resSymbol">x</div>
                        <div className="resNumber">½</div>
                    </div>
                    <div className="shadowRight"></div>
                    <div className="rightBar">
                        <div className="retreatType">retreat</div>
                        <div className="retreatEnergy">
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                    </div>
                </div>
            );
            break;
        case "electric":
            weakType = (
                <div className="weakResRetreat">
                    <div className="shadowLeft"></div>
                    <div className="leftBar">
                        <div className="bottomTypes">weakness</div>
                        <div className="typeWeakness"><img src={groundImage} alt="" /></div>
                        <div className="x">x</div>
                        <div className="x2">2</div>
                        <div className="spliter"></div>
                        <div className="bottomTypes1">resistance</div>
                        <div className="typeResistance"><img src={steelImage} alt="" /></div>
                        <div className="resSymbol">x</div>
                        <div className="resNumber">½</div>
                    </div>
                    <div className="shadowRight"></div>
                    <div className="rightBar">
                        <div className="retreatType">retreat</div>
                        <div className="retreatEnergy">
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                    </div>
                </div>
            );
            break;
        case "fairy":
            weakType = (
                <div className="weakResRetreat">
                    <div className="shadowLeft"></div>
                    <div className="leftBar">
                        <div className="bottomTypes">weakness</div>
                        <div className="typeWeakness"><img src={poisonImage} alt="" /></div>
                        <div className="x">x</div>
                        <div className="x2">2</div>
                        <div className="spliter"></div>
                        <div className="bottomTypes1">resistance</div>
                        <div className="typeResistance"><img src={dragonImage} alt="" /></div>
                        <div className="resSymbol">x</div>
                        <div className="resNumber">0</div>
                    </div>
                    <div className="shadowRight"></div>
                    <div className="rightBar">
                        <div className="retreatType">retreat</div>
                        <div className="retreatEnergy">
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                    </div>
                </div>
            );
            break;
        case "fighting":
            weakType = (
                <div className="weakResRetreat">
                    <div className="shadowLeft"></div>
                    <div className="leftBar">
                        <div className="bottomTypes">weakness</div>
                        <div className="typeWeakness"><img src={flyImage} alt="" /></div>
                        <div className="x">x</div>
                        <div className="x2">2</div>
                        <div className="spliter"></div>
                        <div className="bottomTypes1">resistance</div>
                        <div className="typeResistance"><img src={darkImage} alt="" /></div>
                        <div className="resSymbol">x</div>
                        <div className="resNumber">½</div>
                    </div>
                    <div className="shadowRight"></div>
                    <div className="rightBar">
                        <div className="retreatType">retreat</div>
                        <div className="retreatEnergy">
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                    </div>
                </div>
            );
            break;
        case "fire":
            weakType = (
                <div className="weakResRetreat">
                    <div className="shadowLeft"></div>
                    <div className="leftBar">
                        <div className="bottomTypes">weakness</div>
                        <div className="typeWeakness"><img src={waterImage} alt="" /></div>
                        <div className="x">x</div>
                        <div className="x2">2</div>
                        <div className="spliter"></div>
                        <div className="bottomTypes1">resistance</div>
                        <div className="typeResistance"><img src={grassImage} alt="" /></div>
                        <div className="resSymbol">x</div>
                        <div className="resNumber">½</div>
                    </div>
                    <div className="shadowRight"></div>
                    <div className="rightBar">
                        <div className="retreatType">retreat</div>
                        <div className="retreatEnergy">
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                    </div>
                </div>
            );
            break;
        case "flying":
            weakType = (
                <div className="weakResRetreat">
                    <div className="shadowLeft"></div>
                    <div className="leftBar">
                        <div className="bottomTypes">weakness</div>
                        <div className="typeWeakness"><img src={rockImage} alt="" /></div>
                        <div className="x">x</div>
                        <div className="x2">2</div>
                        <div className="spliter"></div>
                        <div className="bottomTypes1">resistance</div>
                        <div className="typeResistance"><img src={groundImage} alt="" /></div>
                        <div className="resSymbol">x</div>
                        <div className="resNumber">0</div>
                    </div>
                    <div className="shadowRight"></div>
                    <div className="rightBar">
                        <div className="retreatType">retreat</div>
                        <div className="retreatEnergy">
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                    </div>
                </div>
            );
            break;
        case "ghost":
            weakType = (
                <div className="weakResRetreat">
                    <div className="shadowLeft"></div>
                    <div className="leftBar">
                        <div className="bottomTypes">weakness</div>
                        <div className="typeWeakness"><img src={darkImage} alt="" /></div>
                        <div className="x">x</div>
                        <div className="x2">2</div>
                        <div className="spliter"></div>
                        <div className="bottomTypes1">resistance</div>
                        <div className="typeResistance"><img src={fightImage} alt="" /></div>
                        <div className="resSymbol">x</div>
                        <div className="resNumber">0</div>
                    </div>
                    <div className="shadowRight"></div>
                    <div className="rightBar">
                        <div className="retreatType">retreat</div>
                        <div className="retreatEnergy">
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                    </div>
                </div>
            );
            break;
        case "grass":
            weakType = (
                <div className="weakResRetreat">
                    <div className="shadowLeft"></div>
                    <div className="leftBar">
                        <div className="bottomTypes">weakness</div>
                        <div className="typeWeakness"><img src={fireImage} alt="" /></div>
                        <div className="x">x</div>
                        <div className="x2">2</div>
                        <div className="spliter"></div>
                        <div className="bottomTypes1">resistance</div>
                        <div className="typeResistance"><img src={waterImage} alt="" /></div>
                        <div className="resSymbol">x</div>
                        <div className="resNumber">½</div>
                    </div>
                    <div className="shadowRight"></div>
                    <div className="rightBar">
                        <div className="retreatType">retreat</div>
                        <div className="retreatEnergy">
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                    </div>
                </div>
            );
            break;
        case "ground":
            weakType = (
                <div className="weakResRetreat">
                    <div className="shadowLeft"></div>
                    <div className="leftBar">
                        <div className="bottomTypes">weakness</div>
                        <div className="typeWeakness"><img src={grassImage} alt="" /></div>
                        <div className="x">x</div>
                        <div className="x2">2</div>
                        <div className="spliter"></div>
                        <div className="bottomTypes1">resistance</div>
                        <div className="typeResistance"><img src={eletricImage} alt="" /></div>
                        <div className="resSymbol">x</div>
                        <div className="resNumber">0</div>
                    </div>
                    <div className="shadowRight"></div>
                    <div className="rightBar">
                        <div className="retreatType">retreat</div>
                        <div className="retreatEnergy">
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                    </div>
                </div>
            );
            break;
        case "ice":
            weakType = (
                <div className="weakResRetreat">
                    <div className="shadowLeft"></div>
                    <div className="leftBar">
                        <div className="bottomTypes">weakness</div>
                        <div className="typeWeakness"><img src={fireImage} alt="" /></div>
                        <div className="x">x</div>
                        <div className="x2">2</div>
                        <div className="spliter"></div>
                        <div className="bottomTypes1">resistance</div>
                        <div className="typeResistance"><img src={iceImage} alt="" /></div>
                        <div className="resSymbol">x</div>
                        <div className="resNumber">½</div>
                    </div>
                    <div className="shadowRight"></div>
                    <div className="rightBar">
                        <div className="retreatType">retreat</div>
                        <div className="retreatEnergy">
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                    </div>
                </div>
            );
            break;
        case "normal":
            weakType = (
                <div className="weakResRetreat">
                    <div className="shadowLeft"></div>
                    <div className="leftBar">
                        <div className="bottomTypes">weakness</div>
                        <div className="typeWeakness"><img src={fightImage} alt="" /></div>
                        <div className="x">x</div>
                        <div className="x2">2</div>
                        <div className="spliter"></div>
                        <div className="bottomTypes1">resistance</div>
                        <div className="typeResistance"><img src={ghostImage} alt="" /></div>
                        <div className="resSymbol">x</div>
                        <div className="resNumber">0</div>
                    </div>
                    <div className="shadowRight"></div>
                    <div className="rightBar">
                        <div className="retreatType">retreat</div>
                        <div className="retreatEnergy">
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                    </div>
                </div>
            );
            break;
        case "poison":
            weakType = (
                <div className="weakResRetreat">
                    <div className="shadowLeft"></div>
                    <div className="leftBar">
                        <div className="bottomTypes">weakness</div>
                        <div className="typeWeakness"><img src={psyImage} alt="" /></div>
                        <div className="x">x</div>
                        <div className="x2">2</div>
                        <div className="spliter"></div>
                        <div className="bottomTypes1">resistance</div>
                        <div className="typeResistance"><img src={fairyImage} alt="" /></div>
                        <div className="resSymbol">x</div>
                        <div className="resNumber">½</div>
                    </div>
                    <div className="shadowRight"></div>
                    <div className="rightBar">
                        <div className="retreatType">retreat</div>
                        <div className="retreatEnergy">
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                    </div>
                </div>
            );
            break;
        case "rock":
            weakType = (
                <div className="weakResRetreat">
                    <div className="shadowLeft"></div>
                    <div className="leftBar">
                        <div className="bottomTypes">weakness</div>
                        <div className="typeWeakness"><img src={steelImage} alt="" /></div>
                        <div className="x">x</div>
                        <div className="x2">2</div>
                        <div className="spliter"></div>
                        <div className="bottomTypes1">resistance</div>
                        <div className="typeResistance"><img src={normalImage} alt="" /></div>
                        <div className="resSymbol">x</div>
                        <div className="resNumber">½</div>
                    </div>
                    <div className="shadowRight"></div>
                    <div className="rightBar">
                        <div className="retreatType">retreat</div>
                        <div className="retreatEnergy">
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                    </div>
                </div>
            );
            break;
        case "steel":
            weakType = (
                <div className="weakResRetreat">
                    <div className="shadowLeft"></div>
                    <div className="leftBar">
                        <div className="bottomTypes">weakness</div>
                        <div className="typeWeakness"><img src={fireImage} alt="" /></div>
                        <div className="x">x</div>
                        <div className="x2">2</div>
                        <div className="spliter"></div>
                        <div className="bottomTypes1">resistance</div>
                        <div className="typeResistance"><img src={poisonImage} alt="" /></div>
                        <div className="resSymbol">x</div>
                        <div className="resNumber">0</div>
                    </div>
                    <div className="shadowRight"></div>
                    <div className="rightBar">
                        <div className="retreatType">retreat</div>
                        <div className="retreatEnergy">
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                    </div>
                </div>
            );
            break;
        case "water":
            weakType = (
                <div className="weakResRetreat">
                    <div className="shadowLeft"></div>
                    <div className="leftBar">
                        <div className="bottomTypes">weakness</div>
                        <div className="typeWeakness"><img src={grassImage} alt="" /></div>
                        <div className="x">x</div>
                        <div className="x2">2</div>
                        <div className="spliter"></div>
                        <div className="bottomTypes1">resistance</div>
                        <div className="typeResistance"><img src={fireImage} alt="" /></div>
                        <div className="resSymbol">x</div>
                        <div className="resNumber">½</div>
                    </div>
                    <div className="shadowRight"></div>
                    <div className="rightBar">
                        <div className="retreatType">retreat</div>
                        <div className="retreatEnergy">
                            <img src={normalImage} alt="" />
                            <img src={normalImage} alt="" />
                        </div>
                    </div>
                </div>
            );
            break;
        default:
            break;
    }

    return weakType;
};