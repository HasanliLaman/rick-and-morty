import React from "react";
import {
  Pagination,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  PaginationContainer,
  PaginationPageGroup,
  usePagination,
} from "@ajna/pagination";

const Paginate = ({ totalPage, setQuery, current }) => {
  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    pagesCount: totalPage,
    initialState: { currentPage: 1 },
    limits: {
      inner: 1,
      outer: 1,
    },
  });

  const pageChangeHandler = (nextPage) => {
    setCurrentPage(nextPage);
    setQuery({ page: nextPage });
  };

  return (
    <>
      {totalPage && (
        <Pagination
          pagesCount={pagesCount}
          currentPage={currentPage}
          onPageChange={pageChangeHandler}
        >
          <PaginationContainer justifyContent="center">
            <PaginationPrevious bg="white" boxShadow="base" mr="3">
              {"<"}
            </PaginationPrevious>
            <PaginationPageGroup gap="1">
              {pages.map((page) => (
                <PaginationPage
                  bg="white"
                  boxShadow="base"
                  w={10}
                  key={`pagination_page_${page}`}
                  page={page}
                  _hover={{
                    bg: "blue.200",
                  }}
                  _current={{
                    bg: "blue.400",
                  }}
                />
              ))}
            </PaginationPageGroup>
            <PaginationNext bg="white" boxShadow="base" ml="3">
              {">"}
            </PaginationNext>
          </PaginationContainer>
        </Pagination>
      )}
    </>
  );
};

export default Paginate;
