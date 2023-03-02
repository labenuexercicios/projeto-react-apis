import { CardContainer, CardType } from "./style"

export const Card = (props) => {
    const types = props.type[1] ? props.type[0].type.name + " " + props.type[1].type.name : props.type[0].type.name
    return (
        <CardContainer>
            <p>#{props.id}</p>
            <h1>{props.name}</h1>
            <img src={props.image} alt="" />
            <CardType>{types}</CardType>
            <button>Capturar</button>
        </CardContainer>
    )
}
