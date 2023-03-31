import React, { useEffect, useMemo } from "react";
import { Container } from "@chakra-ui/react";
import CharactersFilter from "../../components/Filter/CharactersFilter";
import CharacterContainer from "../../components/Characters/CharacterContainer";
import Pagination from "../../components/UI/Pagination";
import Loading from "../../components/UI/Loading";
import Error from "../../components/UI/Error";
import { useMutation } from "react-query";
import { fetchCharacters } from "../../api";
import { useQueryParams, NumberParam, StringParam } from "use-query-params";

const CharacterPage = () => {
  const [query, setQuery] = useQueryParams({
    page: NumberParam,
    status: StringParam,
    gender: StringParam,
    species: StringParam,
  });
  const { data, isError, isLoading, mutate } = useMutation(fetchCharacters);

  useEffect(() => {
    mutate(query);
  }, [mutate, query]);

  return (
    <Container maxW="5xl" pt="12" pb="16">
      <CharactersFilter setQuery={setQuery} />
      <CharacterContainer characters={useMemo(() => data?.results, [data])} />
      <Pagination
        current={query.page}
        setQuery={setQuery}
        totalPage={data?.info.pages}
      />
      {isError && <Error />}
      {isLoading && <Loading />}
    </Container>
  );
};

export default CharacterPage;
