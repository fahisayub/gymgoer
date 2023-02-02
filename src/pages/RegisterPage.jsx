import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <Container
      m="auto"
      bg="white"
      h="full"
      p="0px"
      w={["auto",'360px','360px']}
      borderRadius={['0px','45px','45px','45px','45px']}
      overflow={"hidden"}
      border={["none","3px solid yellow"]}
    >
      <Heading h="30%" textAlign={"center"} size="3xl" pt="20%">
        TESTAPP
      </Heading>
      <Box
        h="70%"
        borderRadius={["20px 20px 0px 0px","20px"]}
        bgGradient="linear(to-b, indigo,indigo, blueviolet)"
      >
        <RegisterForm />
      </Box>
    </Container>
  );
};

export default RegisterPage;
