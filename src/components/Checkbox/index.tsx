import React from 'react';

const CheckBox = ({ genre, setFilteredGenres, filteredGenres }: any) => {
  return (
    <div>
      <input
        type="checkbox"
        data-testid='checkbox'
        className='genre'
        id={genre.name}
        name={genre.id}
        value={genre.id}
        checked={filteredGenres.includes(genre.id)}
        onChange={() => {
          if (filteredGenres.includes(genre.id)) {
            const updatedFilters = filteredGenres.filter(
              (ids: any) => ids !== genre.id
            );
            return setFilteredGenres(updatedFilters);
          }
          setFilteredGenres((genres: any) => [...genres, genre.id]);
        }}
      />
      <label htmlFor={genre.name} className='genre'>{genre.name}</label>
    </div>
  );
};

export default CheckBox;
