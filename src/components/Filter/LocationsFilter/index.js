import React, { useState } from "react";
import { FormControl, Input, Button } from "@chakra-ui/react";

const LocationsFilter = ({ setQuery }) => {
  const [locationValue, setLocationValue] = useState("");
  const [dimensionValue, setDimensionValue] = useState("");
  const [typeValue, setTypeValue] = useState("");

  const applyFilterHandler = () => {
    setQuery({
      name: locationValue || undefined,
      dimension: dimensionValue || undefined,
      type: typeValue || undefined,
      page: 1,
    });
  };

  const resetFilterHandler = () => {
    setLocationValue("");
    setDimensionValue("");
    setTypeValue("");
    setQuery({
      name: undefined,
      dimension: undefined,
      type: undefined,
      page: 1,
    });
  };
  return (
    <FormControl display="flex" gap="4">
      <Input
        value={locationValue}
        onChange={(e) => setLocationValue(e.target.value)}
        placeholder="Location"
      />
      <Input
        value={typeValue}
        onChange={(e) => setTypeValue(e.target.value)}
        placeholder="Type"
      />
      <Input
        value={dimensionValue}
        onChange={(e) => setDimensionValue(e.target.value)}
        placeholder="Dimension"
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

export default LocationsFilter;
