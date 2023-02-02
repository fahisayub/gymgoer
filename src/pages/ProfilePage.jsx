import { Container, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import EntryLogs from "../components/EntryLogs";

const ProfilePage = () => {
  const location = useLocation();
  let from = location?.state?.from || "/";

  return (
    <Container
      m="auto"
      bg="white"
      h="700px"
      p="0px"
      w={["auto",'360px','360px']}
      borderRadius={['0px','45px','45px','45px','45px']}
      overflowY={"scroll"}
      border={["none","3px solid yellow"]}
      sx={{
        "&::-webkit-scrollbar": {
          width: "5px",
          borderRadius: "3px",
          backgroundColor: `rgba(0, 0, 0, 0.05)`,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: `rgba(0, 0, 0, 0.05)`,
        },
      }}
    >
      <Flex>
        <IconButton
          as={Link}
          to={from}
          mx="10px"
          mt="15px"
          variant={"ghost"}
          icon={<FaArrowLeft />}
        />
      </Flex>
      {<ProfileCard />}
      {<EntryLogs />}
    </Container>
  );
};

export default ProfilePage;
