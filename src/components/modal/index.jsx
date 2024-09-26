import React from 'react'
import { CreateModal } from '../../createModal'
import { Title, Warning } from './style'

export const Modal1 = () => {
  return (
    <CreateModal>
      <Title>Gotcha!</Title>
      <Warning>O Pokémon foi adicionado a sua Pokédex</Warning>
    </CreateModal>
  )
}

export const Modal2 = () => {
  return (
    <CreateModal>
      <Title>Oh, no!</Title>
      <Warning>O Pokémon foi removido da sua Pokedéx</Warning>
    </CreateModal>
  )
}