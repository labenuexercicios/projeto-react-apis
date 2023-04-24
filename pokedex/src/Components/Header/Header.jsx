import React from 'react'
import { HeaderContainer, Logo, LogoWrapper, ButtonPokedex, ButtonBackHome, ButtonTeste } from './HeaderStyle'
import logo from '/img/logoPokedex.svg'
import { goToHomePage, goToLastPage, goToPokedexPage } from '../../routes/coordinator';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header(props) {
 
  const { buttonPokedex, buttonBack, buttonTeste} = props;

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <HeaderContainer>
      <LogoWrapper>
        <Logo src={logo} alt='Pokemon'/>
      </LogoWrapper>  
      <div>
      {buttonPokedex && <ButtonPokedex onClick={()=> goToPokedexPage(navigate)}>{buttonPokedex}</ButtonPokedex>}

      {buttonBack && <ButtonBackHome onClick={()=> goToHomePage(navigate)}>{buttonBack}</ButtonBackHome>}

      {location.pathname.includes('/Details/') && buttonBack && buttonTeste &&
      <ButtonTeste>
      {buttonTeste}
      </ButtonTeste>}
      </div>
      
      </HeaderContainer>

  )
}
