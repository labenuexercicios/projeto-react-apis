import React, { useEffect, useContext, useState } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import imagemBola from "../../imagens/pokeBola.png"
import { Button } from '@chakra-ui/react'
import { gotoDetalhesPage } from "../../routes/coordinators"
import { useNavigate, useLocation } from 'react-router-dom'
import { getTypes } from '../../util/ReturnType'
import {BASE_URL} from "../../constants/url"
import {PokemonCardConteiner} from "./styled"
import {getColors} from "../../util/ReturnCor"


const PokemonCard = (props) => {
    const { pokemon} = props;

    const location = useLocation();//path atual

    const navigate = useNavigate()

    const context = useContext(GlobalContext)

    
    const [poder, setPoder] = useState([])
    const [poder2, setPoder2] = useState([])
    const [cadaPokemon, setCadaPokemon] = useState([])

    const { addToPokedex, removeFromPokedex, pokelist} = context   
      
    //segunda requisção para buscar os tipos
    const fetchPokemon2 = async () => {

        const APIResponse = await fetch(BASE_URL)
        const data = await APIResponse.json()
        setPoder2(pokemon['types']['0']['type']['name'])
        setPoder(pokemon['types']['1']['type']['name'])
        setCadaPokemon(data)
    }

    useEffect(()=>{
        fetchPokemon2()
     },[])

  
    return (
        <PokemonCardConteiner color = {getColors(poder2)} >

            <div className='ladoDireito'>
                <img className='imgBulba' src={pokemon.sprites?.other["official-artwork"].front_default} />
                <img className='bolaPoke' src={imagemBola} />
                {location.pathname === "/" ? 
                <Button onClick={() => addToPokedex(pokemon)}>Capturar</Button>
                 :<Button onClick={() => removeFromPokedex(pokemon)}>Excluir</Button>} 
            </div>

            <div className='ladoEsquerdo'>
                <p>#01</p>
                <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                <div className='tipos'>                    
                    {poder2.length > 1 && <img className='tipo2' src={getTypes(poder2)} />}
                    {poder.length > 1 && <img className='tipo1' src={getTypes(poder)} />}
                    
                </div>
                < Button onClick={() => gotoDetalhesPage(navigate, pokemon.name)} className='detalhes'>Detalhes</Button>
            </div>

        </PokemonCardConteiner>

    )
}

export default PokemonCard
