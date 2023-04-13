import { BarraProgressoContainer, LinhaProgresso } from './styles'
  
export const BarraProgresso = ({ backgroundColor, progress }) => {             
    return (
      <BarraProgressoContainer>
        <LinhaProgresso backgroundColor={backgroundColor} progress={progress} />
      </BarraProgressoContainer>
    )
}
