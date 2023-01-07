import { CustomProgressBarContainer } from "./CustomProgressBar.styled";

export function CustomProgressBar (props){
    const { progress } = props

    function getColor(){
        if (progress <= 40){
            return "#f22933"
        } else if ( progress <= 60){
            return "#e69e05"
        } else if (progress <=90){
            return "#e6da05"
        } 

        return "#5fba2b"
       
    }

    return(
        <CustomProgressBarContainer 
        progress={progress}
        color={getColor()}
        >
        </CustomProgressBarContainer>
    );
}