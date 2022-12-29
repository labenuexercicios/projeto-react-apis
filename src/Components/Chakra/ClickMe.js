import { Button, Flex, useColorModeValue } from '@chakra-ui/react';
// import { useState } from 'react';

// function randomColor() {
//   return Math.floor(Math.random() * 5);
// }

// const colorList = [
//   '#E53E3E',
//   '#38A169',
//   '#00B5D8',
//   '#44337A',
//   '#ED64A6',
// ];

export default function ClickMe(props) {
  // const [colorCode, setColorCode] = useState(colorList[randomColor()]);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      >
      <Button
        {...props}
        px={10}
        bg={useColorModeValue('#33A4F5', 'gray.900')}
        color={'white'}
        width={220}
        height={14}
        fontSize={24}
        

        rounded={'md'}
        _hover={{
          transform: 'translateY(-4px)',
          boxShadow: 'lg',
        }}>
        Pokedéx
      </Button>
    </Flex>
  );
}