import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import CharacterPage from "./pages/CharacterPage";
import EpisodePage from "./pages/EpisodePage";
import LocationPage from "./pages/LocationPage";
import Navbar from "./components/Navbar";
import MyWatchList from "./pages/MyWatchList";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<CharacterPage />} />
          <Route path="/episodes" element={<EpisodePage />} />
          <Route path="/locations" element={<LocationPage />} />
          <Route path="/watchlist" element={<MyWatchList />} />
        </Routes>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
