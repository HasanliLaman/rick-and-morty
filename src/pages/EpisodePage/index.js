import React, { useEffect, useMemo } from "react";
import { Container } from "@chakra-ui/react";
import Pagination from "../../components/UI/Pagination";
import { useQueryParams, NumberParam, StringParam } from "use-query-params";
import { useMutation } from "react-query";
import { fetchEpisodes } from "../../api/index";
import EpisodeTable from "../../components/Tables/EpisodeTable";
import Loading from "../../components/UI/Loading";
import Error from "../../components/UI/Error";
import EpisodesFilter from "../../components/Filter/EpisodesFilter";

const EpisodePage = () => {
  const [query, setQuery] = useQueryParams({
    page: NumberParam,
    name: StringParam,
  });
  const { data, isError, isLoading, mutate } = useMutation(fetchEpisodes);

  useEffect(() => {
    mutate(query);
  }, [mutate, query]);

  return (
    <Container maxW="5xl" pt="12" pb="16">
      <EpisodesFilter setQuery={setQuery} />
      <EpisodeTable tableData={useMemo(() => data?.results, [data?.results])} />
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

export default EpisodePage;
