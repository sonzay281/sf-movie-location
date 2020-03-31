import React, { useState } from "react";
import SearchBar from "./searchbar/SearchBar";
import SearchDetail from "./searchdetail/SearchDetail";

const SideBar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="sidebar">
      {isActive ? <SearchDetail /> : ""}
      <SearchBar
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
    </div>
  );
};

export default SideBar;
