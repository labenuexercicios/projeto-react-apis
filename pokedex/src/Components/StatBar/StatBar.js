import { Progress, ProgressLabel } from "@chakra-ui/react";
import { StyledStatBarDiv, StyledProgress, StyledProgressLabel, StyledP, StyledP2 } from "./StyledStatBar";
import { GlobalContext } from "../../Contexts/GlobalContext"
import { useContext } from "react"

export const StatBar = ({ statValue, statName }) => {
    const getColor = () => {
        if (statValue < 50) {
            return "red";
        } else if (statValue < 80) {
            return "yellow";
        } else {
            return "green";
        }
    };

    const StatsNames = (statName) => {
        if(statName == "hp"){
            return("HP")
        }
        if(statName == "attack"){
            return("Attack")
        }
        if(statName == "defense"){
            return("Defense")
        }
        if(statName == "special-attack"){
            return("Sp. Atk")
        }
        if(statName == "special-defense"){
            return("Sp. Def")
        }
        if(statName == "speed"){
            return("Speed")
        }
    }


    return (
        <StyledStatBarDiv>
            <StyledP>{StatsNames(statName)}</StyledP>
            <StyledP2>{statValue}</StyledP2>
            <StyledProgress value={statValue} colorScheme={getColor()}>
                <StyledProgressLabel>{statValue}</StyledProgressLabel>
            </StyledProgress>
        </StyledStatBarDiv>
    );
};
