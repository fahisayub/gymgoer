import { Avatar, Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import UserQrcode from "./UserQrcode";
import OwnerQrscanner from "./OwnerQrscanner";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getPorfileApi } from "../store/profileReducer/profile.action";

const ProfileCard = () => {
  const { profile } = useSelector((state) => state.profileReducer);

useEffect(()=>{
    if(!profile.userId){
        getPorfileApi();
    }
})

  return (
    <VStack h="60%" w="90%" margin={"auto"}>
      <Avatar
        src="https://i.pravatar.cc/300
"
        pos="relative"
        size={"xl"}
        border={"2px solid white"}
        top="20px"
      />
      <Box
        bg="orange"
        w="full"
        h="full"
        borderRadius={"20px"}
        m="auto"
        p="20px"
      >
        <Heading
          mb="20px"
          fontWeight={"semibold"}
          textAlign={"center"}
          size={"md"}
        >
          {profile.userId}
        </Heading>
        {profile.role === "user" ? (
          <UserQrcode referal={profile?.referalCode} />
        ) : (
          <OwnerQrscanner uid={profile?._id} />
        )}
      </Box>
    </VStack>
  );
};

export default ProfileCard;
