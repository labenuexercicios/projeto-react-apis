
export const goToHomePage =(navigate)=>{
    navigate('/')
}
export const goToPageDetails =(navigate,pokemon)=>{
    navigate(`/PageDetails/${pokemon}`)
}
export const goToPokedexPage =(navigate)=>{
    navigate('/Pokedex')
}
// export const goToErrorPage =(navigate)=>{
//     navigate('ErrorPage')
// }