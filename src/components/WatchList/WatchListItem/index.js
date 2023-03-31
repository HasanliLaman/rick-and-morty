import React from "react";
import { ListItem, IconButton, Text } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";

const WatchListItem = ({ id, text, marked, setWatchList }) => {
  const deleteItemHandler = () => {
    setWatchList((prev) =>
      prev.filter((el) => {
        if (el.id === id) return false;
        return true;
      })
    );
  };

  const markItemHandler = () => {
    setWatchList((prev) =>
      prev.map((el) => {
        if (el.id === id) return { ...el, marked: !el.marked };
        return el;
      })
    );
  };

  return (
    <ListItem id={id} display="flex" alignItems="center" gap="4">
      <IconButton
        onClick={markItemHandler}
        variant={marked ? "solid" : "outline"}
        size="sm"
        colorScheme="blue"
        icon={<CheckIcon />}
      />
      <Text as={marked ? "del" : "p"} fontSize="18px" flexGrow="1">
        {text}
      </Text>
      <IconButton
        onClick={deleteItemHandler}
        size="sm"
        variant="outline"
        colorScheme="blue"
        icon={<DeleteIcon />}
      />
    </ListItem>
  );
};

export default WatchListItem;
