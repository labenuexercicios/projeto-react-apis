export function goToHome(navigate) {
    navigate("/");
}
export function goToPokedex(navigate, variable) {
    navigate(`/pokedex/${variable}`);
}
export function goToDetail(navigate, variable) {
    navigate(`/detail/${variable}`);
}
