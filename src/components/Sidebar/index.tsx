import CheckBox from 'components/Checkbox';
import React, { FunctionComponent } from 'react';

type GenreProps = {
  id: number;
  name: string;
};
type sideBarProps = {
  genre: GenreProps[];
  setFilteredGenres: (value: number[]) => void;
  filteredGenres: number[];
};
const Sidebar: FunctionComponent<sideBarProps> = ({
  genre,
  setFilteredGenres,
  filteredGenres,
}) => {
  return (
    <div className="side-bar">
      <p className='filterBy'>Filter by Genre:</p>
      {genre.map((genre: GenreProps) => (
        <CheckBox
          genre={genre}
          key={genre.id}
          setFilteredGenres={setFilteredGenres}
          filteredGenres={filteredGenres}
        />
      ))}
    </div>
  );
};

export default Sidebar;
