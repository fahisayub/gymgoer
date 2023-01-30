import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const EntryLogs = () => {
  const [logs, setLogs] = useState(Array(10).fill(1));
  return (
    <Container
      w="90%"
      borderRadius={"20px"}
      mt="20px"
      bgGradient="linear(to-b, indigo, blueviolet)"
    >
      <Heading
        size="md"
        p="20px"
        textAlign={"center"}
        fontWeight={"semibold"}
        color={"white"}
      >
        Entry Log
      </Heading>
      <VStack
        overflowY={"scroll"}
        pb="100px"
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
        h="200px"
      >
        {logs.map((a, i) => {
          return (
            <Box
              w={"90%"}
              borderRadius={"5px"}
              color={"white"}
              boxShadow={"base"}
              p="5px"
              bg={"indigo"}
              m="5px"
              key={i}
            >
              {a}
            </Box>
          );
        })}
      </VStack>
    </Container>
  );
};

export default EntryLogs;
