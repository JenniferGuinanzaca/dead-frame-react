import MovieCard from "./MovieCard";
import { useState } from "react";

function MovieGrid({ movies = [] }) {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredMovies= movies.filter((movie) => 
        (movie.title || "").toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <section id="archive" className="archive">
            <div className="archive-header">
                <p>THE COLLECTION</p>
                <h2>Browse The Archive</h2>
                <p>Choose a category and discover your next nightmare.</p>
            </div>

            <div className="filter-buttons">
               <button onClick={() => setSelectedCategory("All")}>All</button>
               <button onClick={() => setSelectedCategory("Slasher")}>Slasher</button>
               <button onClick={() => setSelectedCategory("Paranormal")}>Paranormal</button>
               <button onClick={() => setSelectedCategory("Psychological")}>Psychological</button>
               <button onClick={() => setSelectedCategory("Zombie")}>Zombie</button>
            </div>

            <div className="searchContainer">
                <input
                    type="text"
                    placeholder="Search the archives..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>


            <div className="movie-grid">
               {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    );
}

export default MovieGrid;  