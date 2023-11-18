import Header from "@/components/Header/index.js";
import ListOfMovies from "@/components/ListOfMovies/index.js";
import movieData from "@/utils/movieData.json";

export default function Movies() {
  return (
    <>
      <Header movieData={movieData} />
      <main>
        <ListOfMovies movieData={movieData} />
      </main>
    </>
  );
}
