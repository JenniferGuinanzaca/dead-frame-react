import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import MovieGrid from "./components/MovieGrid";
import curatedMovies from "./components/data/curatedMovies";
import usefetch from "./hooks/usefetch";

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { data, loading, error } = usefetch(
    curatedMovies,
    API_KEY
  );

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        
        {loading && <p>Loading movies...</p>}
        {error && <p>Error:{error}</p>}

        {!loading && !error && (
        <MovieGrid movies={data || []} />
      )}
      </main>
    </>
  );
}

export default App;