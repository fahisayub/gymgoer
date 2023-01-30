import { Box, Container, Heading } from '@chakra-ui/react';
import React from 'react';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
    return (
        <Container m='auto' bg='white' h='700px' w='360px' p='0px' borderRadius='45px'overflow={'hidden'} border={'3px solid yellow'} >
     <Heading h='30%' textAlign={'center'} size='3xl' pt='20%'>TESTAPP</Heading>
     <Box h='70%' borderRadius={'20px'} bgGradient='linear(to-b, indigo,indigo, blueviolet)'>
    <RegisterForm/>
     </Box>
    </Container>
    );
};

export default RegisterPage;