import React from "react";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

import AutoComplete from "components/autocomplete/AutoComplete";
interface ISearchBar {
  movies?: any;
  selectedMovieTitle?: string;
  onSelect: any;
  onClear: any;
}
const SearchBar = ({
  movies = [],
  selectedMovieTitle,
  onSelect,
  onClear
}: ISearchBar) => {
  return (
    <div className="sidebar__search-bar">
      <AutoComplete
        id="search-box"
        placeholder="Search a movie by Title"
        items={movies}
        onChange={onSelect}
        value={selectedMovieTitle}
        listIcon={faFilm}
        onClear={onClear}
      />
    </div>
  );
};

export default SearchBar;
