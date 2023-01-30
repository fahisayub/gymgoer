import React from "react";
import { Box, Container, Heading, IconButton } from "@chakra-ui/react";

import LoginForm from "../components/LoginForm";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const LoginPage = () => {
 
  return (
    <Container m='auto' bg='white' h='700px' w='360px' p='0px' borderRadius='45px'overflow={'hidden'} border={'3px solid yellow'} >
    <Box h='40%'>

    <IconButton as={Link} to='/'mx='10px'mt='15px' variant={'ghost'} icon={<FaArrowLeft/>}/>
    <Heading  textAlign={'center'} size='3xl' pt='20%'>TESTAPP</Heading>
    </Box>
    <Box h='60%' borderRadius={'20px'} bgGradient='linear(to-b, indigo,indigo, blueviolet)' >
   <LoginForm/>
    </Box>
   </Container>
  );
};

export default LoginPage;
