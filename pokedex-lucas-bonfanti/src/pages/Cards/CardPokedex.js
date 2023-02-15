import React from 'react'
import { CardContainer, CardImage,  PokeName, Pokeball, CardContainer1, Type, TypeImg } from './CardStyled'
import { useState } from 'react'


const PokeCard = (props) => {

    const [modal, setModal] = useState('none')
    const closeModal = () => {
        setModal('none')
    }
    
    return (
    
    <CardContainer className={props.pokemon.types[0].type.name}>
     <CardContainer1>
       <PokeName className={props.pokemon.types[0].type.name}>{props.pokemon.name}</PokeName>
        <Type>
        {props.pokemon.types.map(index => { return ( <TypeImg key={index.id} src={require(`../../assets/types/${index.type.name}.png`)} />)})}
        </Type>
    </CardContainer1>
   
        <Pokeball src={require('../../assets/pokeballBackground.png')} />
        <CardImage src={`${props.pokemon.sprites.other["official-artwork"].front_default}`} />
   
    </CardContainer>
        

    )
}

export default PokeCard
