import React, { useState, useEffect } from 'react';
import { fetchGenres, fetchMovies } from '../../api';
import Movies from './Movies';

const MovieContainer = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchMovies().then((gen) => {
      gen.json().then((data) => {
        setMovies(data);
      });
    });
    fetchGenres().then((genre) => {
      genre.json().then((data) => {
        setGenres(data);
      });
    });
  }, []);

  return <Movies movies={movies} genres={genres} />;
};

export default MovieContainer;
