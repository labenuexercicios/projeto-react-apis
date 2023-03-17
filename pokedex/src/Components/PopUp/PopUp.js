import {StyledPopUp, StyledGotcha, StyledP, StyledX} from "./StyledPopUp"


export const PopUp = (props) => {

    return(
        <StyledPopUp>
            <StyledGotcha>{props.texto}</StyledGotcha>
            <StyledP>{props.descricao}</StyledP>
            {/* <StyledX>x</StyledX> */}
        </StyledPopUp>
    )
}