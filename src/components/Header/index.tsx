import React, { useMemo } from 'react';
interface HeaderProps {
  setMinimumRating: (value: any) => void;
  setFilteredGenres: (value: any) => void;
}

const Header = ({ setMinimumRating, setFilteredGenres }: HeaderProps) => {
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
        <select
          data-testid="select-option"
          onChange={(e) => setMinimumRating(e.target.value)}
          className="filters-options"
        >
          <option disabled selected value="Filter by ratings">
            Filter by ratings
          </option>
          {ratingsList.map((number) => (
            <option value={number} key={number}>
              {number}
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
