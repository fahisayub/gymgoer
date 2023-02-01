import {
  Avatar,
  Button,
  Container,
  Flex,
  IconButton,
  Skeleton,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MapComponent from "../components/MapComponent";
import Searchbar from "../components/Searchbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserLocation } from "../store/MapReducer/map.action";

const MapPage = () => {
 const {isLoading, mapdata}=useSelector(state=>state.mapReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from || "/";
  const onConfirmHandler = () => {
    console.log("location");
    navigate("/profile", { state: { from: location.pathname } });
  };

  useEffect(() => {
    dispatch(getUserLocation());
  }, [dispatch]);

  return (
    <Container
      m="auto"
      bg="white"
      h="700px"
      w="360px"
      p="0px"
      borderRadius="45px"
      overflow={"hidden"}
      border={"3px solid yellow"}
    >
      <Flex justifyContent={"space-between"} pt="20px" px="20px">
        <IconButton
          variant={"ghost"}
          as={Link}
          to={from}
          icon={<FaArrowLeft />}
        />
        <Avatar size={"sm"} />
      </Flex>
      <VStack
        border={"3px solid yellow"}
        w="90%"
        borderRadius={"20px"}
        h="75%"
        margin={"auto"}
        bgGradient="linear(to-b, indigo,indigo, blueviolet)"
      >
        <Searchbar />
        {isLoading?<Skeleton w='90%' h='70%' borderRadius={'20px'} /> :<MapComponent mapdata={mapdata} />}
        <Button
          w="80%"
          onClick={onConfirmHandler}
          size={"lg"}
          colorScheme={"orange"}
        >
          Confirm your location
        </Button>
      </VStack>
    </Container>
  );
};

export default MapPage;
