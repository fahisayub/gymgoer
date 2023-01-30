import { Avatar, Box, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import UserQrcode from './UserQrcode';
import OwnerQrscanner from './OwnerQrscanner';

const ProfileCard = () => {
    return (
        <VStack h='60%' w='90%' margin={'auto'}>
            <Avatar  pos='relative' size={'xl'} border={'2px solid white'} top='20px'  />
            <Box  bg='orange' w='full' h='full' borderRadius={'20px'}m='auto' p='20px'>

            <Heading mb='20px' fontWeight={'semibold'} textAlign={'center'} size={'md'}>{"Fahiz"}</Heading>
            <OwnerQrscanner/>
            </Box>
        </VStack>
    );
};

export default ProfileCard;