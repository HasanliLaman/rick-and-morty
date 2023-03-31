import React, { useEffect, useMemo } from "react";
import LocationTable from "../../components/Tables/LocationTable";
import Pagination from "../../components/UI/Pagination";
import { Container } from "@chakra-ui/react";
import { useQueryParams, NumberParam, StringParam } from "use-query-params";
import { useMutation } from "react-query";
import { fetchLocations } from "../../api/index";
import Loading from "../../components/UI/Loading";
import Error from "../../components/UI/Error";
import LocationsFilter from "../../components/Filter/LocationsFilter";

const LocationPage = () => {
  const [query, setQuery] = useQueryParams({
    page: NumberParam,
    name: StringParam,
    type: StringParam,
    dimension: StringParam,
  });
  const { data, isError, isLoading, mutate } = useMutation(fetchLocations);

  useEffect(() => {
    mutate(query);
  }, [mutate, query]);

  return (
    <Container maxW="5xl" pt="12" pb="16">
      <LocationsFilter setQuery={setQuery} />
      <LocationTable
        tableData={useMemo(() => data?.results, [data?.results])}
      />
      <Pagination
        current={query.page}
        totalPage={data?.info.pages}
        setQuery={setQuery}
      />
      {isError && <Error />}
      {isLoading && <Loading />}
    </Container>
  );
};

export default LocationPage;
