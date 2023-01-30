import React from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Text,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { GiHandBag } from "react-icons/gi";
import { AiFillApple, AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import FormInputComponent from "./FormInputComponent";
import { NavLink } from "react-router-dom";

const RegisterForm = () => {
  const [form, setForm] = useState({});
  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    let payload = { ...form, [name]: value };
    console.log(payload);
    setForm(payload);
  };
  let onLogin = () => {};
  return (
    <Container m="auto" p="20px">
      <FormInputComponent
        type={"text"}
        name={"name"}
        placeholder={"Name"}
        onChangeHandler={onChangeHandler}
        childern={<GiHandBag color="orange" />}
      />
      <FormInputComponent
        type={"email"}
        name={"email"}
        placeholder={"Email"}
        onChangeHandler={onChangeHandler}
        childern={<MdEmail color="orange" />}
      />
      <FormInputComponent
        type={"text"}
        name={"useid"}
        placeholder={"UserID"}
        onChangeHandler={onChangeHandler}
        childern={<MdPerson color="orange" />}
      />
      <FormInputComponent
        type={"password"}
        name={"password"}
        placeholder={"Password"}
        onChangeHandler={onChangeHandler}
        childern={<MdLock color="orange" />}
      />
      <Center>
        <Button m="10px" color={'black'}  onClick={onLogin}>
          Register
        </Button>
      </Center>
      <Center color={'white'}>
        <Divider mx="5px" />
        <Text p="0px">Or</Text>
        <Divider mx="5px" />
      </Center>
      <Box textAlign={"left"} m="auto" w="65%" color={'white'}>
        <Link href="#">
          <Flex gap="15px" my='5px'>
            <AiFillGoogleCircle fontSize={'20px'} /> <Text>Sign up with Google</Text>
          </Flex>
        </Link>
        <Link href="#">
          <Flex gap="15px" my='5px'>
            <FaFacebook fontSize={'20px'} /> <Text>Sign up with Facebook</Text>
          </Flex>
        </Link>
        <Link href="#">
          <Flex gap="15px" my='5px'>
            <AiFillApple fontSize={'20px'} /> <Text>Sign up with Apple</Text>
          </Flex>
        </Link>
      </Box>
      <Box textAlign={"center"}>
        <Text color={"orange"}>Already hav an account?</Text>
        <NavLink to="/login">Click here to signin</NavLink>
      </Box>
    </Container>
  );
};

export default RegisterForm;
