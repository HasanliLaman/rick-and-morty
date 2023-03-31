import React from "react";
import { Select } from "@chakra-ui/react";

const FilterElement = ({ options, placeholder, setValue, value }) => {
  const changeFilterHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <Select
      value={value}
      onChange={changeFilterHandler}
      placeholder={placeholder}
    >
      {options.map((el) => (
        <option key={el} value={el}>
          {el}
        </option>
      ))}
    </Select>
  );
};

export default FilterElement;
