import { useEffect, useState } from 'react';
import data from '../../../public/movies.json';
import MovieCard from '../movieCard/MovieCard';

function MovieGrid() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [genre, setGenre] = useState("All Genres");
    const [rating, setRating] = useState("All");

    useEffect(() => {
        fetch("movies.json")
        .then((response) => response.json())
        .then((data) =>  setMovies(data))
        .catch((error) => console.error("Error fetching movies:", error));

        // setMovies(data)
       
    }, []);

        const handleSearchChange = () => {
        const filteredMovies =movies.filter((movie) =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setMovies(filteredMovies);
    };

    useEffect(() => {
        handleSearchChange();
    }, [searchTerm]);

    const handleGenreChange = (e) => {
        setGenre(e.target.value);
        if (e.target.value === "All Genres") {
            setMovies(movies);
        } else {
            const filteredMovies = movies.filter((movie) => movie.genre.toLowerCase() === e.target.value.toLowerCase());
            setMovies(filteredMovies);
        }
    };

    const handleRatingChange = (e) => {
        setRating(e.target.value);
        if (e.target.value === "All") {
            setMovies(movies);
        } else if (e.target.value === "Good") {
            const filteredMovies = movies.filter((movie) => movie.rating >= 8);
            setMovies(filteredMovies);
        } else if (e.target.value === "OK") {
            const filteredMovies = movies.filter((movie) => movie.rating >= 5 && movie.rating < 8);
            setMovies(filteredMovies);
        } else if (e.target.value === "Bad") {
            const filteredMovies = movies.filter((movie) => movie.rating < 5);
            setMovies(filteredMovies);
        }
    };



    return (
       <div>
        <input 
            type="text" 
            placeholder="Search movies..." 
            className="search-input"
            value={searchTerm} 
            onChange={(e)=>setSearchTerm(e.target.value)} 
        />
        <div className='filter-bar'>

            <div className='filter-slot'>
                <label htmlFor="genre">Genre:</label>
                <select value={genre} onChange={handleGenreChange} className='filter-dropdown' >
                    <option>All Genres</option>
                    <option>Action</option>
                    <option>Drama</option>
                    <option>Horror</option>
                    <option>Fantasy</option>
                </select>
            </div>

            <div className='filter-slot'>
                <label htmlFor="rating">Rating:</label>
                <select  value={rating} onChange={handleRatingChange} className='filter-dropdown'>
                    <option>All</option>
                    <option>Good</option>
                    <option>Bad</option>
                    <option>OK</option>
                </select>
            </div>

        </div>
         <div className='movies-grid'>
         {
            movies.map((movie) => (
                <MovieCard  movie={movie} key={movie.id} />
            ))
         }
        </div>
       </div>
     );
}

export default MovieGrid;