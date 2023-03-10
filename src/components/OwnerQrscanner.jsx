import {
  Button,
  Divider,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { QrReader } from "react-qr-reader";
import { addLogApi, getLogsApi } from "../store/logReducer/log.action";

const OwnerQrscanner = ({ uid }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [referal, setReferal] = useState("");
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    let { value } = e.target;
    console.log(value);
    setReferal(value);
  };
  const onSubmitHandler = (referal) => {
    const payload = {
      referal,
      uid,
    };
    dispatch(addLogApi(payload)).then(() => {
      dispatch(getLogsApi());
    });
    console.log(payload);
  };

  return (
    <VStack>
      <Text color={"gray"}>Open Camera to scan QR</Text>
      <IconButton
        w="100px"
        h="100px"
        onClick={onOpen}
        icon={<FaCamera fontSize={"40px"} color="gray" />}
      />

      <Divider />
      <Text color="white" fontWeight="semibold">
        User Code
      </Text>
      <Flex>
        <InputGroup>
          <Input
            name="code"
            size="sm"
            bg="white"
            borderRadius={"5px"}
            placeholder="Type code here"
            onChange={onChangeHandler}
          />
          <InputRightElement w="20%" h="full">
            <IconButton
              w={"100%"}
              size={"sm"}
              colorScheme="green"
              onClick={()=>onSubmitHandler(referal)}
              icon={<MdDone />}
            />
          </InputRightElement>
        </InputGroup>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{referal}</Text>
            <QrReader
              onResult={(result, error) => {
                if (!!result) {
                  setReferal(result?.text);

                  onSubmitHandler( result?.text);

                  onClose();
                }

                if (!!error) {
                  console.info(error);
                }
              }}
              style={{ width: "100%" }}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Done</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default OwnerQrscanner;
