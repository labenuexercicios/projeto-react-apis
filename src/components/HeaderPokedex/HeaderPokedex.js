import React from 'react'
import Logo from "../../icons/logopokemon.jpg"
import { useNavigate } from 'react-router-dom';
import { goToHomePage } from '../../routes/Coordinator';
import { HeaderContainer, Return } from './styles';

const HeaderPokedex = () => {

    const navigate = useNavigate();

  return (
    <HeaderContainer>

      <Return className='link' onClick={() => goToHomePage(navigate)}>
        Todos os Pokémons
      </Return>

      <div className='div-image'>
        <img className="img" src={Logo} alt="image-logo" />
      </div>

    </HeaderContainer>
  )
}
export default HeaderPokedex