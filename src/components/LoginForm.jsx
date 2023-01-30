import { Button, Center, Container, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import FormInputComponent from './FormInputComponent';
import { MdLock, MdPerson } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [role,setRole]=useState('user');
    const [form, setForm] = useState({});
    const navigate=useNavigate();
    const location=useLocation();
    const onChangeHandler = (e) => {
      let { name, value } = e.target;
      let payload = { ...form, [name]: value };
      console.log(payload);
      setForm(payload);
    };
    let onLogin = () => {
        console.log(role);
        navigate('/getlocation',{state:{from:location.pathname}})

    };
   
    return (
        <Container m="auto" p="20px">
            <Flex justifyContent={'space-evenly'} mb='60px'>
                <Button colorScheme={role==='user'?'gray':'orange'} size={role==='user'?'md':'lg'} w='100px' isDisabled={role==='user'?true:false} onClick={()=>setRole('user')}>User</Button>
                <Button colorScheme={role==='admin'?'gray':'orange'}size={role==='admin'?'md':'lg'}w='100px'  isDisabled={role==='admin'?true:false} onClick={()=>setRole('admin')}>Owner</Button>
            </Flex>
        <FormInputComponent
          onChangeHandler={onChangeHandler}
          childern={<MdPerson color='orange' />}
          name={"userid"}
          placeholder={"UserID"}
          type={"text"}
        />
        <FormInputComponent
          onChangeHandler={onChangeHandler}
          childern={<MdLock color='orange' />}
          name={"password"}
          placeholder={"Password"}
          type={"password"}
        />
        <Center>

        <Button color={"black"} onClick={onLogin}>
          Login
        </Button>
        </Center>
      </Container>
    );
};

export default LoginForm;