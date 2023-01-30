import { Box, Center, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

const FormInputComponent = ({
  onChangeHandler,
  childern,
  name,
  placeholder,
  type,
}) => {
  return (
    <Flex gap={"10px"} my='10px'>
      <Box textAlign={"center"} w="20%">
        <Center>
        {childern}
        </Center>
        <Text color={'white'} fontSize={"xs"}>{placeholder}</Text>
      </Box>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        bg="white"
        onChange={onChangeHandler}
      />
    </Flex>
  );
};

export default FormInputComponent;
