import React from 'react'
import { Container, ContainerImagens, ContainerNameMoves, ContainerStats } from './styled'

const CardDetails = () => {
    return (
        <Container>
            <ContainerImagens>
                <div>
                    <img src="" alt="front" />
                </div>
                <div>
                    <img src="" alt="costas" />
                </div>
            </ContainerImagens>
            <ContainerStats>
                <p>stats</p>
            </ContainerStats>
            <ContainerNameMoves>
                <p>name</p>
            </ContainerNameMoves>
        </Container>
    )
}

export default CardDetails
