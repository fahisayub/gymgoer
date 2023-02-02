import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { format } from "date-fns";
const LogCard = ({ log }) => {
  const desiredFormat = "do MMM yyyy hh:mm aaa";
  const convertedDate = format(new Date(log?.createdAt), desiredFormat);

  return (
    <Flex
      w={"90%"}
      borderRadius={"5px"}
      color={"white"}
      boxShadow={"base"}
      p="5px"
      bg={"indigo"}
      m="5px"
      justifyContent={"space-between"}
    >
      <Box w="30%" fontSize={"md"}>
        {log?.userId}
      </Box>
      <Box w="30%" fontSize={"xs"}>
        {log?.city}
      </Box>
      <Box w="30%" fontSize={"xx-small"}>
        {convertedDate}
      </Box>
    </Flex>
  );
};

export default LogCard;
