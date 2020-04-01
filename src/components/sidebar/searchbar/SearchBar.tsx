import React from "react";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

import AutoComplete from "components/autocomplete/AutoComplete";
import { useDispatch } from "react-redux";
import { deleteValue } from "actions/baseActions";

const SearchBar = ({ movies, selectedMovieTitle, onSelect, onClear }: any) => {
  const dispatch = useDispatch();
  if (selectedMovieTitle === "") dispatch(deleteValue("selectedMovieTitle"));
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
