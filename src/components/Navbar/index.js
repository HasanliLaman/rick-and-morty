import { Flex, Box, Container } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box as="nav" boxShadow="xs" py="6" fontSize="19px">
      <Container maxW="5xl">
        <Flex justifyContent="center" gap="10">
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { color: "#3182ce" } : undefined
            }
          >
            Characters
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "#3182ce" } : undefined
            }
            to="/episodes"
          >
            Episodes
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "#3182ce" } : undefined
            }
            to="/locations"
          >
            Locations
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "#3182ce" } : undefined
            }
            to="/watchlist"
          >
            My Watch List
          </NavLink>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
