import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import CharacterDetails from "../CharacterDetails";

const CharacterCard = ({
  id,
  name,
  status,
  gender,
  image,
  location,
  species,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Card onClick={onOpen} cursor="pointer" id={id}>
      <CardBody>
        <Image
          src={image}
          alt="Character avatar"
          borderRadius="lg"
          boxSize="100%"
        />
        <Stack mt="5" spacing="1">
          <Heading size="md">{name}</Heading>
          <Text color="#444" fontSize="md">
            {gender}
          </Text>
          <Text fontSize="md" as="i">
            {status}
          </Text>
        </Stack>
      </CardBody>
      <CharacterDetails
        name={name}
        species={species}
        status={status}
        gender={gender}
        location={location}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Card>
  );
};

export default CharacterCard;
