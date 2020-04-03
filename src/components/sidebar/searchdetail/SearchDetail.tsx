import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const SearchDetail = ({ data, onCollapse, isCollapsed }: any) => {
  const movie = data[0];
  const locations = data?.map(({ locations }: any) => locations).sort();
  return (
    <>
      <div className="sidebar__search-detail">
        <div className="detail-wrapper scroll">
          <h2>{movie.title}</h2>
          <div>
            <CreditItem label="Director" value={movie.director} />
            <CreditItem label="Writer" value={movie.writer} />
            <CreditItem
              label="Stars"
              value={`${movie.actor_1},${movie.actor_2},${movie.actor_3}`}
            />
            <CreditItem label="Release Year" value={movie.release_year} />

            <CreditItem
              label="Production Company"
              value={movie.production_company}
            />
          </div>
          <h3>Locations</h3>
          {locations?.map((location: any) => (
            <Location key={location} value={location} />
          ))}
        </div>
      </div>
      <div className="collapse" onClick={onCollapse}>
        <FontAwesomeIcon icon={!isCollapsed ? faCaretRight : faCaretLeft} />
      </div>
    </>
  );
};

export default SearchDetail;

const CreditItem = ({ label, value }: any) => (
  <div className="credit_summary_item">
    <h4 className="inline">{label}:</h4>
    {value}
  </div>
);

const Location = ({ value }: any) => (
  <div key={`location-${value}`} className="location-detail inline">
    {value}
  </div>
);
