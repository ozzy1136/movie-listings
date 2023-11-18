import Movie from "@/components/Movie/index.js";

const ListOfMovies = ({ movieData }) => {
  return (
    <section className="my-16 px-40 grid grid-flow-row gap-10 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
      {movieData.results.map((singleMovie) => (
        <Movie key={singleMovie.id} data={singleMovie} />
      ))}
    </section>
  );
};

export default ListOfMovies;
