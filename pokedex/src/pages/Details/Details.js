import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { goToHomePage } from '../../routes/coordinator'
import { DetailsContainer } from './Details.styled'
import axios from 'axios';


const Details = ({ name, image, id, type }) => {

  const navigate = useNavigate()
  const stringSeta = "<"
  
  const [data, setData] = useState({});
console.log(id)
  const getPokeDetails = () => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => {
        console.log(res)
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPokeDetails();
    console.log(data)
  }, []);

  return (
    <>
      <Header />

<DetailsContainer>

<button className='button' onClick={() => goToHomePage(navigate)}>{stringSeta} Todos Pokémons</button>
  <div className='details'>
          <h1>Detalhes</h1>
        </div>

      <div className='cinza'>

        

        <div className='verde'>
          
          <div className='imgBackFront'>

          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`
} />
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`
} />

</div>

          <div className='stats'>STATS

            <div>Requisição Stats</div>

          </div>

          <div className=''>
            <div>
            <p>#0{id}</p>
          <p>{name}</p>
            </div>
            <div> TYPE1 TYPE2</div>
            
            <div className='img'>
<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} />
            </div>

            <div className='moves'>MOVES

            </div>

            

          </div>

        </div>
      </div>
      </DetailsContainer>
    </>
  )
}

export default Details