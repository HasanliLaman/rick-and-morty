import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const LocationTable = ({ tableData }) => {
  return (
    <TableContainer
      mt="8"
      mb="12"
      border="1px"
      borderColor="gray.200"
      p="6"
      borderRadius="lg"
    >
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>№</Th>
            <Th>Name</Th>
            <Th>Type</Th>
            <Th>Dimension</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData &&
            tableData.map((el) => (
              <Tr key={el.id}>
                <Td>{el.id}</Td>
                <Td>{el.name}</Td>
                <Td>{el.type}</Td>
                <Td>{el.dimension}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default LocationTable;
