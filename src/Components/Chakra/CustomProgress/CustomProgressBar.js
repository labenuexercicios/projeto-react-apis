import { CustomProgressBarContainer } from "./CustomProgressBar.styled";

export function CustomProgressBar (props){
    const { progress } = props

    return(
        <CustomProgressBarContainer progress={progress}>
        </CustomProgressBarContainer>
    );
}