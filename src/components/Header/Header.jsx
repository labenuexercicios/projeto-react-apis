import logoImg from '../../img/logo.png'
import {HeaderContainer} from './HeaderStyle'

export default function Header() {
  return(
    <HeaderContainer>
      <img src={logoImg} alt="Logo do anime Pokemon" />
    </HeaderContainer>
  )
}