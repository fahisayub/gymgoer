import {  Container, Heading, Skeleton, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import LogCard from "./LogCard";
import { useDispatch, useSelector } from "react-redux";
import { getLogsApi } from "../store/logReducer/log.action";

const EntryLogs = () => {
  const {isLoading,entrylogs} = useSelector((state) => state.logReducer);
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    if (entrylogs.length===0) {
      dispatch(getLogsApi());
    }
  }, [entrylogs.length, dispatch]);
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
        pb="50px"
        
      >
        {isLoading
          ? Array(5)
              .fill(1)
              .map((a, i) => (
                <Skeleton
                  w={"90%"}
                  h='50px'
                  borderRadius={"5px"}
                  color={"white"}
                  p="5px"
                  m="5px"
                  key={i}
                />
              ))
          : entrylogs?.map((log, i) => {
              return (
                <LogCard key={log._id} log={log}  />
              );
            })}
      </VStack>
    </Container>
  );
};

export default EntryLogs;
