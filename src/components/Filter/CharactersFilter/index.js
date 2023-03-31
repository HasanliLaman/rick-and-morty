import React, { useState } from "react";
import { FormControl, Button } from "@chakra-ui/react";
import FilterElement from "../FilterElement";
import { Input } from "@chakra-ui/react";

const CharactersFilter = ({ setQuery }) => {
  const [statusValue, setStatusValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [speciesValue, setSpeciesValue] = useState("");

  const applyFilterHandler = () => {
    setQuery({
      gender: genderValue || undefined,
      status: statusValue || undefined,
      species: speciesValue || undefined,
      page: 1,
    });
  };

  const resetFilterHandler = () => {
    setGenderValue("");
    setStatusValue("");
    setSpeciesValue("");
    setQuery({
      gender: undefined,
      status: undefined,
      species: undefined,
      page: 1,
    });
  };

  return (
    <FormControl display="flex" gap="4">
      <FilterElement
        setValue={setStatusValue}
        value={statusValue}
        placeholder="Status"
        options={["Alive", "Dead", "Unknown"]}
      />
      <FilterElement
        setValue={setGenderValue}
        value={genderValue}
        placeholder="Gender"
        options={["Male", "Female", "Genderless", "Unknown"]}
      />
      <Input
        onChange={(e) => setSpeciesValue(e.target.value)}
        value={speciesValue}
        placeholder="Species"
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

export default CharactersFilter;
