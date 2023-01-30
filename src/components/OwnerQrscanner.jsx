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
import { FaCamera } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { QrCodeScanner } from "react-simple-qr-code-scanner";
const OwnerQrscanner = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onChangeHandler = (e) => {
    let { value } = e.target;
    console.log(value);
  };
  const onSubmitHandler = () => {};
  
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
              onClick={onSubmitHandler}
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
          <QrCodeScanner //TODO: qrcode scanner
        onResult={(res) => {
          console.log(res);
        }}
        Errors={(error) => {
          console.log(error);
        }}
        facingMode={"user"}
      />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default OwnerQrscanner;
