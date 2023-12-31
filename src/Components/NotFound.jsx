import React from 'react';
import { Flex,Image, Text } from '@chakra-ui/react';
import notFoundSvg from "../img/notfound.svg";

const NotFound = () => {
  return (
    <Flex 
     width={"full"}
     justifyContent="center"
     alignItem={"center"}
     direction="column"
    >
      <Image src={notFoundSvg} width={600}/>
      <Text fontSize={40} fontWeight="semibold" fontFamily={"cursive"} >
        Not Found
      </Text>
    </Flex>
  );
};

export default NotFound;
