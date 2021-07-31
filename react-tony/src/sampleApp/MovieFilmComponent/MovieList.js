import React,{useContext} from 'react';
import { MovieContext } from '../../context/MovieContext';

function MovieList(props) {
    const {movie} = useContext(MovieContext);
    return (
        <div>
            <h6>Movie list</h6>
            <ul>
                {movie.length > 0 ? movie.map((itemMovie,idx) => (
                <li key={`movie ${idx}`}>
                    Movie {idx + 1}: {itemMovie.name}
                </li>
                )) : null}
            </ul>
        </div>
    );
}

export default MovieList;