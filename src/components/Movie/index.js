import Image from "next/image";

/**
 * @param {Object} props
 * @param {{adult: boolean, backdrop_path: string, id: number, title: string, original_language: string, original_title: string, overview: string, poster_path: string, media_type: string, genre_ids: number[], popularity: number, release_date: string, video: boolean, vote_average: number, vote_count: number}} props.data
 * @returns
 */
const Movie = ({ data }) => {
  return (
    <>
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          width={320}
          height={320}
        />
        <p>{data.title}</p>
      </div>
    </>
  );
};

export default Movie;
