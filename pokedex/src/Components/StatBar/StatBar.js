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
            console.log(statName)
            return("HP")
        }
        if(statName == "attack"){
            console.log(statName)
            return("Attack")
        }
        if(statName == "defense"){
            console.log(statName)
            return("Defense")
        }
        if(statName == "special-attack"){
            console.log(statName)
            return("Sp. Atk")
        }
        if(statName == "special-defense"){
            console.log(statName)
            return("Sp. Def")
        }
        if(statName == "speed"){
            console.log(statName)
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
