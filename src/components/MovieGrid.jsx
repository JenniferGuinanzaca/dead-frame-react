function MovieGrid(){
    return(
        <section id="archive" className="archive">
            <div className="archive-header">
                <p>THE COLLECTION</p>
                <h2>Browse The Archive</h2>
                <p>Choose a category and discover your next nightmare.</p>
            </div>

            <div className="filter-buttons">
               <button>All</button>
               <button>Slasher</button>
               <button>Paranormal</button>
               <button>Psychological</button>
               <button>Zombie</button>
            </div>

            <div className="movie-grid">
               {/* will work on this later */}
            </div>
        </section>
    );
}

export default MovieGrid;  