import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex
      width="100%"
      height="500px"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner
        thickness="6px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        p="10"
      />
    </Flex>
  );
};

export default Loading;
