import React, { useMemo } from 'react';
interface HeaderProps {
  setMinimumRating: (value: any) => void;
  setFilteredGenres: (value: number[]) => void;
  minimumRating: any
}

const Header = ({ setMinimumRating, setFilteredGenres, minimumRating }: HeaderProps) => {
  const ratingsList = useMemo(() => {
    let arr = [];
    for (let i = 0; i < 10.5; i = i + 0.5) {
      arr.push(i);
    }
    return arr;
  }, []);

  return (
    <div className="header">
      <span>
        <span role="img" aria-label="Popcorn emoji">
          🍿
        </span>{' '}
        Now playing
      </span>
      <div className="rating-filters">
      <span className='rating-filters-label'>
            Filter by ratings
          </span>
        <select
          data-testid="select-option"
          onChange={(e) => setMinimumRating(e.target.value)}
          className="filters-options"
        >
          <option disabled>Minimum rating</option>
          {ratingsList.map((ratingOption) => (
            <option value={ratingOption} key={ratingOption} selected={minimumRating === ratingOption}>
              {ratingOption}
            </option>
          ))}
        </select>
        <button
          className="clear-button"
          data-testid="clear-button"
          onClick={() => {
            setFilteredGenres([]);
            setMinimumRating(3);
          }}
        >
          Clear filter
        </button>
      </div>
    </div>
  );
};

export default Header;
