import React from "react";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

import AutoComplete from "components/autocomplete/AutoComplete";

/***
 * @param movieTitles list of all the available movie titles
 * @param selectedMovieTitle currently selected movie title
 * @param onSelect event handler for search select event
 * @param onClear event handler to clear the selected movie title
 */

const SearchBar = ({
  movieTitles = [],
  selectedMovieTitle,
  onSelect,
  onClear,
}: ISearchBar) => {
  return (
    <div className="sidebar__search-bar">
      <AutoComplete
        id="search-box"
        placeholder="Search a movie by Title"
        items={movieTitles}
        onChange={onSelect}
        value={selectedMovieTitle}
        listIcon={faFilm}
        onClear={onClear}
      />
    </div>
  );
};

export default SearchBar;

interface ISearchBar {
  movieTitles?: any;
  selectedMovieTitle?: string;
  onSelect: any;
  onClear: any;
}
