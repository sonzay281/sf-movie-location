import React from "react";

const SearchBar = ({ onFocus, onBlur }: any) => {
  return (
    <div className="sidebar__search-bar">
      <input
        type="text"
        className="search-box"
        placeholder="Search By Title"
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

export default SearchBar;
