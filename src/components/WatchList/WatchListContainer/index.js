import React from "react";
import { List } from "@chakra-ui/react";
import WatchListItem from "../WatchListItem";

const WatchListContainer = ({ list, setWatchList }) => {
  return (
    <List my="12" flexDirection="column" display="flex" gap="8">
      {list.map((el) => (
        <WatchListItem
          setWatchList={setWatchList}
          id={el.id}
          key={el.id}
          text={el.text}
          marked={el.marked}
        />
      ))}
    </List>
  );
};

export default WatchListContainer;
