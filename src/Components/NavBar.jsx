import React from 'react';

import logo from "../img/logo.png";
import logo_dark from "../img/logo_dark.png";
import { Link, useNavigate } from "react-router-dom";
// prettier-ignore
import {Menu, MenuButton,MenuList,MenuItem, Image, useColorModeValue,useColorMode, Flex,InputGroup,InputLeftElement,Input, List } from '@chakra-ui/react';
import {IoAdd, IoLogOut, IoMoon, IoSearch, IoSunny} from 'react-icons/io5'

const NavBar = ({user}) => {
  const navigate = useNavigate()
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue("gray.600", "gray.300");
  return (
   <Flex 
   justifyContent={"space-between"}
   alignItems="center"
   width={"100vw"}
   p={4}
   >
    <Link to={"/"}>
      <Image src={colorMode == "light" ? logo_dark : logo} width={"180px"} />
    </Link>
    <InputGroup mx={6} width="60vw" >
    <InputLeftElement
      pointerEvents='none'
      children={<IoSearch  fontSize={25}/>}
    />
  
    <Input type='text' placeholder="Search..."
    fontSize={18}
    fontWeight="medium"
    variant={"filled"} />
  </InputGroup>

  <Flex justifyContent={"center"} alignItems="center" >
    <Flex width={"40px"}
      height="40px"
      justifyContent={"center"}
      alignItems="center"
      cursor={"pointer"}
      borderRadius={"5px"}
      onClick={toggleColorMode}
      
      >
        {colorMode == "light" ?( <IoMoon fontSize={25}/>
        ) : (
          <IoSunny fontSize={25} />
        )}

    </Flex>
    {/* create Button*/}
    <Link to={"/create"}>
      <Flex 
      justifyContent={"center"}
      alignItems="center"
      bg={bg}
      width={"40px"}
      height="40px"
      borderRadius={"5px"}
      mx={6}
      cursor="pointer"
      _hover={{shadow: "md" }}
      transition="ease-in-out"
      transitionDuration={"0.3s"}

      >
        <IoAdd 
        fontSize={25}
        color={'${colorMode == "dark" ? "#111" : "#f1f1f1"}'}
        />

      </Flex>
    </Link>
    <Menu>
  <MenuButton >
    <Image 
    src={user?.photoURL}
    width="40px"
    height="40px"
    rounded="full"
     />
  </MenuButton>
  <MenuList shadow={"lg"} >
    
{  user &&
    <Link to={ `userDetail/${user.uid}`} >
    <MenuItem>My Account</MenuItem>
    </Link>
}
    <MenuItem flexDirection={"row"} alignItems="center" gap={4} onClick={() => {
      localStorage.clear();
      navigate("/login", {replace: true});
    }} >
      Logout<IoLogOut fontSize={20} /></MenuItem>
    
  </MenuList>
</Menu>

  </Flex>

   </Flex>
  );
};

export default NavBar;