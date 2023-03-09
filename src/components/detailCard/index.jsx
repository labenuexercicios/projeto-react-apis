import { Bar, ContainerDetail } from './style'
import { Colors } from '../../helpers/Colors'
import pokedex from '../../assets/pokedex.png'
import { Type } from '../../helpers/Type'



export const DetailCard = ({details}) => {

  const totalBaseStat = () => {
    const AllBaseStat = details.stats && details.stats.map(detail => detail.base_stat)
    const total = AllBaseStat && AllBaseStat.reduce((acc, val) => acc + val, 0)
    return total
  }

  const Id = details.id !== undefined && details.id >= 10 ? details.id : `0${details.id}`


  return (
    <ContainerDetail>
      <section>
        <div style={{background: Colors(details.types !== undefined && details.types[0].type.name)}} className='Details'>
          <div className='PokemonPictures'>
            <div><img src={details.sprites !== undefined && details.sprites['front_default']} alt="" /></div>
            <div><img src={details.sprites !== undefined && details.sprites['back_default']} alt="" /></div>
          </div>
          <div className='BaseStats'>
            <div>
              <h2>Base stats</h2>
              <ul className='BaseList'>
                <li><span>HP</span><span>{details.stats !== undefined && details.stats[0].base_stat}</span><Bar var={details.stats !== undefined && details.stats[0].base_stat} /></li>
                <li><span>Attack</span><span>{details.stats !== undefined && details.stats[1].base_stat}</span><Bar var={details.stats !== undefined && details.stats[1].base_stat} /></li>
                <li><span>Defense</span><span>{details.stats !== undefined && details.stats[2].base_stat}</span><Bar var={details.stats !== undefined && details.stats[2].base_stat} /></li>
                <li><span>Sp. Atk</span><span>{details.stats !== undefined && details.stats[3].base_stat}</span><Bar var={details.stats !== undefined && details.stats[3].base_stat} /></li>
                <li><span>Sp. Def</span><span>{details.stats !== undefined && details.stats[4].base_stat}</span><Bar var={details.stats !== undefined && details.stats[4].base_stat} /></li>
                <li><span>Speed</span><span>{details.stats !== undefined && details.stats[5].base_stat}</span><Bar var={details.stats !== undefined && details.stats[5].base_stat} /></li>
                <li><span>Total</span><span>{totalBaseStat() !== undefined && totalBaseStat()}</span></li>
              </ul>
            </div>
          </div>
          <div className='Moves'>
            <h1>Moves:</h1>
            <div>
              <span>{details.moves !== undefined && details.moves[0].move.name}</span>
              <span>{details.moves !== undefined && details.moves[1].move.name}</span>
              <span>{details.moves !== undefined && details.moves[2].move.name}</span>
              <span>{details.moves !== undefined && details.moves[3].move.name}</span>
            </div>
          </div>
        </div>

        <img className='Pokedex' src={pokedex} alt="" />
        <img className='PokemonImg' src={details.sprites?.other?.["official-artwork"]?.["front_default"]} alt="" />
        
        <div className='Types'>
          <span className='Id'>#{Id}</span>
          <span className='Name'>{details.name}</span>
          <div>
            <span>{Type(details.types !== undefined && details.types[0].type.name)}</span>
            <span>{Type(details.types !== undefined && details.types[1]?.type.name)}</span>
          </div>
        </div>
      </section>
    </ContainerDetail>
  )
}
