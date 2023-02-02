import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import {  QRCodeSVG } from "qrcode.react";
const UserQrcode = ({referal}) => {
  return (
    <VStack w="full">
      <Box
        bg="white"
        borderRadius="20px"
        w="50%"
        px="20px"
        py="5px"
        textAlign={"center"}
      >
        <QRCodeSVG value={referal} width={"100%"} />
      </Box>
      <Text color="white" fontWeight="semibold">
        User Code
      </Text>
      <Box
        bg="white"
        fontWeight={"bold"}
        borderRadius="10px"
        textAlign={"center"}
        py="5px"
        px="50px"
      >
        {referal}
      </Box>
    </VStack>
  );
};

export default UserQrcode;
