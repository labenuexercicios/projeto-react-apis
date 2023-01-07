import React from 'react'
import { HeaderContainer } from './Header.styled'
// import { Button } from '@mui/material'
// import { goToPokedex } from '../../routes/coordinator'
// import { useNavigate } from 'react-router-dom'

const Header = () => {

  // const navigate = useNavigate()
  const logoImg = "https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png"

  return (
    <HeaderContainer>
      <nav>
        <div>
          <img className='img' alt='poke-logo' src={logoImg} />

          {/* <Button className="button" variant="contained" onClick={() => goToPokedex(navigate)}>POKEDEX</Button> */}
        </div>


      </nav>
    </HeaderContainer>
  )
}

export default Header

