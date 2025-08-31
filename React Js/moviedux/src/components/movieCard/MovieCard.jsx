function MovieCard({ movie }) {

    const handleError = (e) => {
        e.target.src = 'src/assets/images/defualt.jpg'; // Path to your default image
    };

    const getRatingClass = (rating) => {
        if (rating >= 8) return 'rating-good';
        if (rating >= 5) return 'rating-ok';
        return 'rating-bad';
    };

    return ( 
        <div key={movie.id} className="movie-card">
                    <img src={`src/assets/images/${movie.image}`} alt={movie.title} onError={handleError} />
                    <div className='movie-card-info'>
                        <h3 className="movie-card-title">{movie.title}</h3>
                        <p className="movie-card-genre">{movie.genre}</p>
                        <p className={`"movie-card-rating" ${getRatingClass(movie.rating)}`}>Rating: {movie.rating}</p>
                    </div>
                </div>
     );
}

export default MovieCard;