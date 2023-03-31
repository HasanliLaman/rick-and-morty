import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const fetchCharacters = ({ page = 1, status, gender, species }) => {
  const statusValue = status ? `&status=${status}` : "";
  const genderValue = gender ? `&gender=${gender}` : "";
  const speciesValue = species ? `&species=${species}` : "";
  return axiosConfig
    .get(`/character/?page=${page}${statusValue}${genderValue}${speciesValue}`)
    .then((res) => res.data);
};

export const fetchSingleCharacter = (id) => {
  return axiosConfig.get(`/character/${id}`).then((res) => res.data);
};

export const fetchEpisodes = ({ page = 1, name }) => {
  const nameValue = name ? `&name=${name}` : "";
  return axiosConfig
    .get(`/episode/?page=${page}${nameValue}`)
    .then((res) => res.data);
};

export const fetchLocations = ({ page = 1, name, type, dimension }) => {
  const nameValue = name ? `&name=${name}` : "";
  const typeValue = type ? `&type=${type}` : "";
  const dimensionValue = dimension ? `&dimension=${dimension}` : "";
  return axiosConfig
    .get(`/location/?page=${page}${nameValue}${typeValue}${dimensionValue}`)
    .then((res) => res.data);
};
