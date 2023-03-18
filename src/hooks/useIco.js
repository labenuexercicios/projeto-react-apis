import { useState } from 'react'
import { Icon } from '@chakra-ui/react'

const useIcon = (icon, hoverIcon, sizeIco) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Icon
      as={isHovered ? hoverIcon : icon}
      boxSize={sizeIco}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  )
}
export default useIcon
