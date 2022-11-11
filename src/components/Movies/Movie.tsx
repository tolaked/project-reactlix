import React from 'react';
import { MovieProps, GenreProps } from './Movies';

interface MovieProp {
  movie: MovieProps;
  genres: GenreProps[]
}


const Movie = ({ movie, genres }: MovieProp) => {
  const allGenres = genres
    .filter((gen: GenreProps) => movie.genre_ids.includes(gen.id))
    .map((genre: { id: number; name: string }) => genre.name)
    .join(', ');
  const lastComma = allGenres.lastIndexOf(',');
  const allGenresStr =
    allGenres.substring(0, lastComma) +
    ' and' +
    allGenres.substring(lastComma + 1); //adds 'and' before the last genre

  return (
    <div key={movie.title} className="movie" data-testid="movie">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        className="movie-image"
      />
      <div className="further-details">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-overview">{movie.overview}</p>
        <div className="rating">
          <span>Rating: {movie.vote_average}</span>
        </div>
        <p>Popularity: {movie.popularity}</p>
        <p>Genres: {allGenresStr}</p>
      </div>
    </div>
  );
};

export default Movie;
