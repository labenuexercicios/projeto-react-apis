import logo from '../../assets/logo.png'
import { DeleteButton, HeaderContainer ,HeaderContainerHomePage, HeaderContainerPokedexPage, HeaderContainerDetailPage,Logo, LogoHomepage, PokeButton } from './headerStyle'

export const Header = (props) => {
    console.log(props.page)
    if(props.page === 'homepage'){

        return (
            <HeaderContainerHomePage>
                <LogoHomepage src={logo}/>
                <PokeButton onClick={() => props.changePage('pokedexpage')}>Pokédex</PokeButton>
            </HeaderContainerHomePage>
        )
        
    }  else if (props.page === 'pokedexpage'){
        return (
            <HeaderContainerPokedexPage>
                <div>
                    <a type='button' onClick={() => props.changePage('homepage')} href='#'>Todos Pokémons</a>
                </div>
                <div>
                    <img src={logo}/>
                </div>
            </HeaderContainerPokedexPage>

        )
    } else if (props.page === 'detailpage'){
        return (
            <HeaderContainerDetailPage>
                <img src={logo}/>
                <DeleteButton>Excluir da Pokédex</DeleteButton>
            
        </HeaderContainerDetailPage>
        )
    } else {
        return (
            <HeaderContainer>
                <img src={logo}/>
                {alert('Page not found!')}
            </HeaderContainer>
        )
    }
    
    
        
    
}