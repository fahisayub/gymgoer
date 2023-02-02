import { Container, Flex, IconButton, Skeleton } from "@chakra-ui/react";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import EntryLogs from "../components/EntryLogs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getLogsApi } from "../store/logReducer/log.action";
import { getPorfileApi } from "../store/profileReducer/profile.action";

const ProfilePage = () => {
  const logsLoading = useSelector((state) => state.logReducer.isLoading);
  const logs = useSelector((state) => state.logReducer.entrylogs);
  const logsErr = useSelector((state) => state.logReducer.isError);
  const profileLoading = useSelector((state) => state.profileReducer.isLoading);
  const profile = useSelector((state) => state.profileReducer.profile);
  const profileErr = useSelector((state) => state.profileReducer.isError);



  const location = useLocation();
  const dispatch = useDispatch();
  let from = location?.state?.from || "/";

  useEffect(() => {
    dispatch(getLogsApi());
    if (logs.length==0) {
      dispatch(getLogsApi());
    }
  }, [logs.length, dispatch]);
  useEffect(() => {
    if (!profile.userId) {
      dispatch(getPorfileApi());
    }
  }, [dispatch, profile]);
  return (
    <Container
      m="auto"
      bg="white"
      h="700px"
      w="360px"
      p="0px"
      borderRadius="45px"
      overflowY={"scroll"}
      border={"3px solid yellow"}
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
      {<ProfileCard profile={profile} />}
      {<EntryLogs logs={logs} isLoading={logsLoading} />}
    </Container>
  );
};

export default ProfilePage;
