import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import React, { useState, useEffect } from 'react';
import Movie from './Movie';


export interface MovieProps {
  title: string;
  overview: string;
  genre_ids: number[];
  vote_average: number;
  popularity: number;
  poster_path: string;
  id: number
}
export interface GenreProps {
  id: number;
  name: string
}

export interface MoviesProp {
  movies: MovieProps[],
  genres: GenreProps[]
}
const Movies = ({ movies, genres }: MoviesProp) => {
  const [filteredGenres, setFilteredGenres] = useState<number[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<MovieProps[]>([]);
  const [minimumRating, setMinimumRating] = useState(3);

  useEffect(() => {
      const filteredMovieList = movies
        .map((movie: any) => {
          return {
            ...movie,
            filteredGenres: movie.genre_ids.filter((id: number) =>
              filteredGenres.includes(id) //Added the extra property here to keep track of movies' genres that match genres filter without losing track of the original genres
            ),
          };
        })
        .filter(
          (mov: any) =>
            mov.filteredGenres.length >= filteredGenres.length &&
            mov.vote_average >= minimumRating
        );
      setFilteredMovies(filteredMovieList);
  }, [movies, filteredGenres, minimumRating]);

  return (
    <div className="container">
      <Header
        setMinimumRating={setMinimumRating}
        setFilteredGenres={setFilteredGenres}
        minimumRating={minimumRating}
      />
      <div className="sub-container">
        <Sidebar
          genre={genres}
          setFilteredGenres={setFilteredGenres}
          filteredGenres={filteredGenres}
        />
        <div className="movies-wrapper">
          <div className="movies">
            {filteredMovies.length
              ? filteredMovies
                  .sort(
                    (a: any, b: any) =>
                      parseFloat(b.popularity) - parseFloat(a.popularity)
                  )
                  .map((movie: MovieProps) => (
                    <Movie movie={movie} key={movie.title} genres={genres} />
                  ))
              : <h1>No results</h1>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
