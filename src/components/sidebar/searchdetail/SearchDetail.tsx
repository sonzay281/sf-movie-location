import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

const SearchDetail = ({ onCollapse }: any) => {
  return (
    <>
      <div className="sidebar__search-detail">
        <div className="detail-wrapper">This is search detail.</div>
      </div>
      <div className="collapse" onClick={onCollapse}>
        <FontAwesomeIcon icon={faCaretLeft} />
      </div>
    </>
  );
};

export default SearchDetail;
