import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'

export default function SucessModal(props) {
  const {title, message} = props
  return(
    <Popover>
    <PopoverTrigger>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverHeader>{title}</PopoverHeader>
      <PopoverBody>{message}</PopoverBody>
    </PopoverContent>
  </Popover>
  )
}