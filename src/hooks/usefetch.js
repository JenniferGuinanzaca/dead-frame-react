import {useState, useEffect} from "react";

function usefetch(curatedMovies, apiKey) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        setError(null);

        const movieResults = await Promise.all(//
          curatedMovies.map(async (movie) => {
            const url = new URL(
              "https://api.themoviedb.org/3/search/movie"
            );

            url.searchParams.set("api_key", apiKey);
            url.searchParams.set("query", movie.title);
            url.searchParams.set("year", movie.year);

            const response = await fetch(url);

            if (!response.ok) {
              throw new Error("Failed to fetch movies from TMDB");
            }

            const result = await response.json();

            const match = result.results?.find(
              (item) =>
                item.title.toLowerCase() === movie.title.toLowerCase() &&
                item.release_date?.startsWith(String(movie.year))
            );

            if (!match) return null;

            return {
              ...match,
              category: movie.category,
            };
          })
        );

        setData(movieResults.filter(Boolean));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [curatedMovies, apiKey]);

  return { data, loading, error };
}

export default usefetch;
