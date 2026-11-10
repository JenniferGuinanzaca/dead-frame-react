import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import MovieGrid from "./components/MovieGrid";
import useFetch from "./hooks/useFetch";

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`;
  const { data, loading, error } = useFetch(API_URL);
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        
        {loading && <p>Loading movies...</p>}
        {error && <p>Error:{error}</p>}

        {!loading && !error && (
        <MovieGrid movies={data?.results || []} />
      )}
      </main>
    </>
  );
}

export default App;