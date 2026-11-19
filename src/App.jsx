import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import MovieGrid from "./components/MovieGrid";
import curatedMovies from "./components/data/curatedMovies";
import usefetch from "./hooks/usefetch";

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { data, loading, error, retry } = usefetch(
    curatedMovies,
    API_KEY
  );

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        
        {loading && <p>Loading movies...</p>}
        {error && (
          <div>
            <p> Error: {error}</p>
            <button onClick={retry}>Try Again</button>

          </div>
        )}

        {!loading && !error && (
        <MovieGrid movies={data || []} />
      )}
      </main>
    </>
  );
}

export default App;