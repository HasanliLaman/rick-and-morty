import React, { useEffect, useState } from "react";
import { Button, Container, Flex } from "@chakra-ui/react";
import WatchListForm from "../../components/WatchList/WatchListForm";
import WatchListContainer from "../../components/WatchList/WatchListContainer";

const MyWatchList = () => {
  const [watchList, setWatchList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(watchList));
  }, [watchList]);

  const deleteAllHandler = () => {
    setWatchList([]);
  };

  const markAllHandler = () => {
    setWatchList((prev) =>
      prev.map((el) => {
        return { ...el, marked: true };
      })
    );
  };

  return (
    <Container maxW="5xl" pt="12" pb="16">
      <WatchListForm setWatchList={setWatchList} />
      <WatchListContainer setWatchList={setWatchList} list={watchList} />
      {watchList[1] && (
        <Flex margin="0 auto" maxW="lg" gap="4">
          <Button onClick={markAllHandler} colorScheme="blue" flex="1 1 0">
            Mark All
          </Button>
          <Button onClick={deleteAllHandler} colorScheme="blue" flex="1 1 0">
            Delete All
          </Button>
        </Flex>
      )}
    </Container>
  );
};

export default MyWatchList;
