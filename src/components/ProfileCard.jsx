import { Avatar, Box, Heading, Skeleton, SkeletonText, VStack } from "@chakra-ui/react";
import React from "react";
import UserQrcode from "./UserQrcode";
import OwnerQrscanner from "./OwnerQrscanner";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPorfileApi } from "../store/profileReducer/profile.action";

const ProfileCard = () => {
  const {profile} = useSelector((state) => state.profileReducer);
  const {isLoading} = useSelector((state) => state.profileReducer);
  const dispatch=useDispatch();
useEffect(()=>{
  dispatch(getPorfileApi())
  
},[dispatch])
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
          {isLoading?<SkeletonText textAlign={'center'} m='auto' />:profile?.userId}
        </Heading>
        { isLoading?<Skeleton h='150px' w='80%' m='auto' borderRadius={'20px'} />:profile?.role === "admin" ? (
          <OwnerQrscanner uid={profile?._id} />
          ) : (
          <UserQrcode referal={profile?.referalCode} />
        )}
      </Box>
    </VStack>
  );
};

export default ProfileCard;
