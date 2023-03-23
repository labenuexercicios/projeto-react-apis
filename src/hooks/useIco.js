import { useState } from 'react'
import { Icon } from '@chakra-ui/react'
import mousePointerOK from '../assets/mousePointerOK.png'
import mouseGrab from '../assets/mouseGrab.png'

const useIcon = (icon, hoverIcon, sizeIco) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Icon
      as={isHovered ? hoverIcon : icon}
      boxSize={sizeIco}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      cursor={`url(${mousePointerOK}), auto`}
      _active={{ cursor: `url(${mouseGrab}), auto` }}
    />
  )
}
export default useIcon
