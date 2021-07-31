import React from 'react';
import { MovieProvider } from '../../context/MovieContext'
import MovieForm from './MovieForm';
import MovieList from './MovieList';

function MovieComponent() {
    return (
        <MovieProvider>
            <MovieForm />
            <MovieList />
        </MovieProvider>
    );
}

export default MovieComponent;