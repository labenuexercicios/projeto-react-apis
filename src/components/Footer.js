import useIcon from '../hooks/useIco'
import { Flex, Text, Link, useColorMode } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { TbBrandDeviantart } from 'react-icons/tb'
import {
  AiOutlineLinkedin,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillInstagram,
  AiOutlineYoutube,
  AiFillYoutube
} from 'react-icons/ai'
import { VscGithubInverted, VscGithubAlt } from 'react-icons/vsc'
import { IoLogoDeviantart } from 'react-icons/io5'
import mousePointerOK from '../assets/mousePointerOK.png'
import mouseGrab from '../assets/mouseGrab.png'

const Footer = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isPokedex = location.pathname === '/pokedex'
  const isDetalhes = /^\/pokemon\/.+/.test(location.pathname)
  const linkedinIcon = useIcon(AiOutlineLinkedin, AiFillLinkedin, 10)
  const githubIcon = useIcon(VscGithubAlt, VscGithubInverted, 8)
  const instaIcon = useIcon(AiOutlineInstagram, AiFillInstagram, 10)
  const youtubeIcon = useIcon(AiOutlineYoutube, AiFillYoutube, 10)
  const devianIcon = useIcon(TbBrandDeviantart, IoLogoDeviantart, 10)

  const { colorMode } = useColorMode()

  return (
    <Flex
      bg={colorMode === 'light' ? 'light.white' : 'dark.header'}
      h={{ base: '110px', smm: '60px' }}
      align='center'
      fontFamily='poppins'
      fontSize='0.8em'
      pl='3em'
      pr='3em'
      justify='space-between'
      color='#1DA1F2'
      direction={{ base: 'column', smm: 'row' }}
      pt={{ base: '1em', smm: '0' }}
      pb={{ base: '1em', smm: '0' }}
      gap={{ base: '0.5em', smm: '0' }}
      display={isHome || isPokedex || isDetalhes ? 'flex' : 'none'}
    >
      <Flex direction='column' align={{ base: 'center', smm: 'start' }}>
        <Text>Copyright © Lidia Yamamura - Pokedéx 2023.</Text>
        <Text mt='-0.2em'>Todos os direitos reservados.</Text>
      </Flex>
      <Flex gap='0.8em' align='center' mt={{ base: '0em', sm: '0.5em' }}>
        <Link
          href='https://www.linkedin.com/in/lidia-yamamura-88b606119/'
          target='_blank'
          rel='noopener noreferrer'
        >
          {linkedinIcon}
        </Link>

        <Link
          href='https://github.com/RinoaYK/projeto-react-apis'
          target='_blank'
          rel='noopener noreferrer'
        >
          {githubIcon}
        </Link>

        <Link
          href='https://www.instagram.com/rinoayk/'
          target='_blank'
          rel='noopener noreferrer'
        >
          {instaIcon}
        </Link>

        <Link
          href='https://youtu.be/bn5Eq5p3-5g'
          target='_blank'
          rel='noopener noreferrer'
        >
          {youtubeIcon}
        </Link>

        <Link
          href='https://www.deviantart.com/rinoayk'
          target='_blank'
          rel='noopener noreferrer'         
        >          
          {devianIcon}
        </Link>
      </Flex>
    </Flex>
  )
}
export default Footer
