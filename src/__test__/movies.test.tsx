import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Movies from 'components/Movies/Movies';

const movies = [
  {
    genre_ids: [14, 16, 12],
    id: 464052,
    overview: 'Wonder Woman comes into conflict',
    popularity: 2407.318,
    poster_path: '/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
    title: 'Wonder Woman 1984',
    vote_average: 7,
  },
  {
    "genre_ids": [12, 27, 878],
    "id": 340102,
    "overview": "Five young mutants.",
    "popularity": 343.235,
    "poster_path": "/xZNw9xxtwbEf25NYoz52KdbXHPM.jpg",
    "title": "The New Mutants",
    "vote_average": 8.4,
  },
  {
    genre_ids: [14, 27, 16],
    id: 602269,
    overview: 'Deputy Sheriff .',
    popularity: 2119.969,
    poster_path: '/c7VlGCCgM9GZivKSzBgzuOVxQn7.jpg',
    title: 'The Little Things',
    vote_average: 6.4,
  },
];

const genres = [
  { id: 12, name: 'Adventure' },
  { id: 14, name: 'Fantasy' },
  { id: 16, name: 'Animation' },
  { id: 18, name: 'Drama' },
  { id: 27, name: 'Horror' },
  { id: 28, name: 'Action' },
  { id: 35, name: 'Comedy' },
];
describe('<Movies/>', () => {
  it('should render movies', async () => {
    render(<Movies movies={movies} genres={genres} />);
    const movie = screen.getAllByTestId('movie');
    expect(movie).toHaveLength(3);
    const singleMovie = movie[0].querySelector('.movie-title');
    expect(singleMovie?.innerHTML).toBe('Wonder Woman 1984');
  });

  it('should render genres list and apply filters', async () => {
    render(<Movies movies={movies} genres={genres} />);
    const input = screen.getAllByTestId('checkbox');
    expect(input).toHaveLength(7);
    fireEvent.click(input[0], { target: { checked: true } });
    const movie = screen.getAllByTestId('movie');
    expect(movie).toHaveLength(2);
  });

  it('should clear filters', async () => {
    const {getAllByTestId,getByTestId} = render(
      <Movies
        movies={movies}
        genres={genres}
      />
    );
    const input = getAllByTestId('checkbox');
    const ratingFilters = getAllByTestId('select-option')
    fireEvent.click(input[0], { target: { checked: true } });
    const filteredMovies = getAllByTestId('movie');
    expect(filteredMovies).toHaveLength(2);
    fireEvent.change(ratingFilters[0], {
        target: { value: 8 }
      });
    const newFilteredMovies = getAllByTestId('movie')
    expect(newFilteredMovies.length).toBe(1)
    const clearBtn = getByTestId('clear-button');
    expect(clearBtn).toBeTruthy();

    //clears filters
    fireEvent.click(clearBtn);
    const movieList = screen.getAllByTestId('movie');
    expect(movieList).toHaveLength(3);
  });
});
