import React from "react";
import { Alert, AlertIcon, AlertDescription } from "@chakra-ui/react";

const Error = () => {
  return (
    <Alert status="error">
      <AlertIcon />

      <AlertDescription>Something went wrong!</AlertDescription>
    </Alert>
  );
};

export default Error;
