function MovieCard({movie}){
    return(
        <div className="movie-card">
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`:"/no-poster.png"}
            alt={movie.title} />

            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.slice(0,4)}</p>
                <p>{movie.overview}</p>
            </div>
        </div>
    );
}

export default MovieCard;