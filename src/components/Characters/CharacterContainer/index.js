import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import CharacterCard from "../CharacterCard";

const CharacterContainer = ({ characters }) => {
  return (
    <Grid
      mt="8"
      mb="12"
      templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "repeat(4,1fr)" }}
      gap={6}
    >
      {characters &&
        characters.map((el) => (
          <GridItem key={el.id}>
            <CharacterCard
              image={el.image}
              id={el.id}
              name={el.name}
              status={el.status}
              gender={el.gender}
              species={el.species}
              location={el.location.name}
            />
          </GridItem>
        ))}
    </Grid>
  );
};

export default CharacterContainer;
