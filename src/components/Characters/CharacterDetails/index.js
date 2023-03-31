import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const CharacterDetails = ({
  isOpen,
  onClose,
  name,
  gender,
  status,
  species,
  location,
}) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent pt="6">
        <ModalCloseButton />
        <ModalBody
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <p>Name: {name}</p>
          <p>Gender: {gender}</p>
          <p>Status: {status}</p>
          <p>Species: {species}</p>
          <p>Location: {location}</p>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CharacterDetails;
