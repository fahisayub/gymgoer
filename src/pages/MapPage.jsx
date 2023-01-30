import { Avatar, Button, Container, Flex, IconButton, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MapComponent from '../components/MapComponent';
import Searchbar from '../components/Searchbar';

const MapPage = () => {
    const navigate=useNavigate();
    const location=useLocation();
    let from= location?.state?.from||'/';
 const onConfirmHandler=()=>{
    console.log('location')
navigate('/profile',{state:{from:location.pathname}});
 }

    return (
        <Container m='auto' bg='white' h='700px' w='360px' p='0px' borderRadius='45px'overflow={'hidden'} border={'3px solid yellow'}>
            <Flex justifyContent={'space-between'} pt='20px' px='20px'>
                <IconButton variant={'ghost'} as={Link} to={from}icon={<FaArrowLeft/>}/>
                <Avatar size={'sm'}/>

            </Flex>
            <VStack border={'3px solid yellow'} w='90%' borderRadius={'20px'} h='75%' margin={'auto'} bgGradient='linear(to-b, indigo,indigo, blueviolet)'>
            <Searchbar/>
            <MapComponent/>
            <Button w='80%' onClick={onConfirmHandler} size={'lg'} colorScheme={'orange'}>Confirm your location</Button>
        </VStack>
        </Container>
    );
};

export default MapPage;