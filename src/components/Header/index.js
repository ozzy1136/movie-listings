import Heading from "@/components/Heading/index.js";
import sortByName from "@/utils/filterMovies";
import filterByName from "@/utils/filterMovies";
import { useState } from "react";

const Header = ({ movieData }) => {
  const [query, setQuery] = useState("");
  return (
    <heading className="flex flex-row justify-between items-center bg-white text-black px-5 py-3">
      <Heading>Movie Listings App</Heading>
      <form
        onSubmit={() => sortByName(movieData, query)}
        className="flex flex-row gap-2"
      >
        <input
          type="search"
          className="bg-black rounded-md text-white px-2"
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-2 py-1 rounded-md"
        >
          Search
        </button>
      </form>
    </heading>
  );
};

export default Header;
