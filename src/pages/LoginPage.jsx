import React, { useEffect } from "react";
import { Box, Container, Heading, IconButton } from "@chakra-ui/react";

import LoginForm from "../components/LoginForm";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutApi } from "../store/authReducer/auth.action";
const LoginPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutApi());
  }, [dispatch]);
  return (
    <Container
      m="auto"
      bg="white"
      h="full"
      w={["auto",'360px','360px']}
      p="0px"
      borderRadius={["0px", "45px", "45px", "45px", "45px"]}
      overflow={"hidden"}
      border={["none","3px solid yellow"]}
    >
      <Box h="40%">
        <IconButton
          as={Link}
          to="/"
          mx="10px"
          mt="15px"
          variant={"ghost"}
          icon={<FaArrowLeft />}
        />
        <Heading textAlign={"center"} size="3xl" pt="20%">
          TESTAPP
        </Heading>
      </Box>
      <Box
        h="60%"
        borderRadius={["20px 20px 0px 0px","20px"]}
        bgGradient="linear(to-b, indigo,indigo, blueviolet)"
      >
        <LoginForm />
      </Box>
    </Container>
  );
};

export default LoginPage;
