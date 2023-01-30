import { Button, Container, Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Searchbar = () => {

const onChangeHandler=()=>{

}
const onSearchHandler=()=>{

}

    return (
        <Container my='20px'>
                    <Flex >
                        <InputGroup >
                        <Input borderRadius={'50px'}  name='search' placeholder='Search location...' onChange={onChangeHandler} />
                        <InputRightElement w='30%'>
                        <Button w={'100%'} colorScheme='blue' variant={'ghost'} onClick={onSearchHandler}><FaSearch/></Button>
                        </InputRightElement>
                        </InputGroup>
                    </Flex>
                    
                </Container>
    );
};

export default Searchbar;