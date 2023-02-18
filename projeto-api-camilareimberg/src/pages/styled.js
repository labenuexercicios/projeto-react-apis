import styled from "styled-components";

export const Container = styled.div`
max-width: 1200px;
	margin: 0 auto;
    background-color: #5D5D5D;
`

export const PSearch = styled.p`
margin-bottom: 30px;
	font-size: 22px;
`

export const CardListPokemon = styled.div`
max-width: 1200px;
	margin: 0 auto;
    background-color: #5D5D5D;
    display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
`

export const PSearchSpan = styled.span`
	font-weight: 700;

`

export const MainPokemon = styled.main`
display: flex;
	
	margin-top: 100px;
	margin-bottom: 50px;
    max-width: 1200px;
	margin: 0 auto;
    background-color: #5D5D5D;
`

export const ContainerStats = styled.div`
display: flex;
	gap: 50px;
	align-items: center;
`
export const ContainerBtnLoadMore = styled.div`
display: flex;
	justify-content: center;

	margin-bottom: 20px;
	margin-top: 20px;
    max-width: 1200px;
	margin: 0 auto;
    background-color: #5D5D5D;
`
export const BtnLoadMore = styled.button`
border: none;
	padding: 15px 40px;
	font-family: inherit;
	background-color: var(--color-primary);
	color: #fff;
	border-radius: 10px;
	cursor: pointer;
`


export const IconFilter = styled.div`
display: flex;
	align-items: center;
	gap: 15px;

	margin-bottom: 20px;
	cursor: pointer;
`


export const StatGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`

export const StatGroupSpan = styled.span`
flex: 20%;
	font-weight: 500;
	font-size: 18px;
`

export const ProgressBar = styled.div`
width: 100%;
	height: 30px;
	background-color:  #fb8500;
	border-radius: 10px;
`

export const ProgressBar1 = styled.div`
width: 100%;
	height: 30px;
	background-color:  yellow;
	border-radius: 10px;
`

export const HeaderMainPokemon = styled.div`
	margin-top: 20px;

display: flex;
align-items: center;

position: relative;
`

export const ContainerImgPokemon = styled.div`
order: 2;
	flex: 1;
	padding: 25px 25px 25px 0;
	height: 400px;
`

export const ContainerImgPokemonImg = styled.img`
position: absolute;
width: 270px;
height: 270px;
left: 909px;
top: -60px;

`

export const ContainerInfoPokemon = styled.div`
	display: flex;
	flex-direction: column;

	order: 1;
	flex: 1;
`

export const ContainerInfoPokemonH1 = styled.h1`
	text-align: right;
	font-size: 60px;
`

export const InfoPokemon = styled.div`
display: flex;
	justify-content: space-between;
align-items: center;
	margin-top: 20px;
`

export const NumberPokemon = styled.span`
position: absolute;
	top: -58px;
	left: 0;
	font-size: 150px;
	font-weight: 600;
	
`

export const GroupInfo = styled.div`
display: flex;
	flex-direction: column;
	gap: 10px;
	color: white;
`
export const GroupInfoP = styled.p`
font-weight: 700;
	font-size: 20px;
`

export const CardTypesInfo = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 10px;
`
export const CardTypesInfoSpan = styled.span`
	font-size: 12px;
	padding: 5px 20px;
	border-radius: 5px;
	color: #fff;
`


export const Stats = styled.div`
display: flex;
	flex-direction: column;
	gap: 20px;
	flex: 1;
	background-color: white;
	width: 90vh;
	padding: 20px;

`

export const ContainerHeader = styled.div`
display: flex;
    height: 150px;
    justify-content: space-between;
    align-items: center;
`
export const ContainerHeaderImg = styled.img`
 width: 300px;
    height: 120px;
    margin-left: 170px;
`

export const BotaoPokedex = styled.button`
margin-right: 40px;
    width: 240px;
    height: 60px;
    border: none;
    background-color: #33A4F5;
    color: white;
    font-size: 19px;
    font-weight: bolder;
    border-radius: 7px;
`
