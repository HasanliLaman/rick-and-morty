import { Button, Input, FormControl } from "@chakra-ui/react";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const WatchListForm = ({ setWatchList }) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) return;

    setWatchList((prev) => [
      ...prev,
      {
        id: uuidv4(),
        text: input,
        marked: false,
      },
    ]);

    setInput("");
  };

  return (
    <FormControl onSubmit={submitHandler} as="form" display="flex" gap="4">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter episode name"
      />
      <Button type="submit" px="8" colorScheme="blue">
        Add
      </Button>
    </FormControl>
  );
};

export default WatchListForm;
