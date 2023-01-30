import { Container, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import EntryLogs from "../components/EntryLogs";

const ProfilePage = () => {
  const location=useLocation();
  let from= location?.state?.from||'/';

  return (
    <Container
      m="auto"
      bg="white"
      h="700px"
      w="360px"
      p="0px"
      borderRadius="45px"
      overflow={'hidden'}

      border={"3px solid yellow"}
    >
      <Flex >
        <IconButton
          as={Link}
          to={from}
          mx="10px"
          mt="15px"
          variant={"ghost"}
          icon={<FaArrowLeft />}
        />
      </Flex>
      <ProfileCard/>
      <EntryLogs/>
    </Container>
  );
};

export default ProfilePage;
