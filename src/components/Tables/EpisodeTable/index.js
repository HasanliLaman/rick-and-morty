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

const EpisodeTable = ({ tableData }) => {
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
            <Th>Episode</Th>
            <Th>Name</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData &&
            tableData.map((el) => (
              <Tr key={el.id}>
                <Td>{el.episode}</Td>
                <Td>{el.name}</Td>
                <Td>{el.air_date}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default EpisodeTable;
