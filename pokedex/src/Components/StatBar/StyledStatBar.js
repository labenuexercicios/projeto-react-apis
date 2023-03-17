import styled from "@emotion/styled";
import { Progress, ProgressLabel } from "@chakra-ui/react";



export const StyledStatBarDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin: 10px 4px 4px 10px;
`

export const StyledProgress = styled(Progress)`
color:${props => props.colorScheme};
border-radius: 4px;
width: 50%;
background-color: white;
`

export const StyledProgressLabel = styled(Progress)`
    border-radius: 100px;
    width: 60%;
`

export const StyledP = styled.p`
width: 20%;
font-weight: 700;
color: grey;
margin: 0px 6px;
justify-self: flex-end
`

export const StyledP2 = styled.p`
width: 10%;
font-weight: 700;
color: grey;
margin: 0px 6px
`

