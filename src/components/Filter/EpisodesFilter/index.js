import { FormControl, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";

const EpisodesFilter = ({ setQuery }) => {
  const [episodeValue, setEpisodeValue] = useState("");

  const applyFilterHandler = () => {
    setQuery({
      name: episodeValue || undefined,
      page: 1,
    });
  };

  const resetFilterHandler = () => {
    setEpisodeValue("");
    setQuery({
      name: undefined,
      page: 1,
    });
  };

  return (
    <FormControl display="flex" gap="4">
      <Input
        value={episodeValue}
        onChange={(e) => setEpisodeValue(e.target.value)}
        placeholder="Episode"
      />
      <Button onClick={applyFilterHandler} px="8" colorScheme="blue">
        Apply
      </Button>
      <Button onClick={resetFilterHandler} px="8" colorScheme="blue">
        Reset
      </Button>
    </FormControl>
  );
};

export default EpisodesFilter;
