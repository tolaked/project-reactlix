import React, { useState } from 'react'
import { fetchGenres, fetchMovies } from '../../api'
import Movie from './Movie';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    fetchMovies().then((gen) =>
      gen.json().then((data) => {
        setMovies(data);
      })
    );

  return (
      <div className='movies'>
    {movies.length ? movies.map((movie: any) => (
            <Movie movie={movie} key={movie.title}/>
          ))
        : null}
          
          </div>
  )
}

export default Movies