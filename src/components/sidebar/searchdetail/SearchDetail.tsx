import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import CreditLine from "./CreditLine";
import Location from "./Location";

/**
 * @param movieDetail array of movie detail with same title
 * @param locations varified location with latitude and longitude
 * @param isCollapsed flag whether the sidebar is collapsed or not
 * @param onCollapse function to toggle the sidebar
 */

const SearchDetail = ({
  movieDetail = {},
  locations = [],
  isCollapsed,
  onCollapse,
}: any) => {
  return (
    <>
      <div className="sidebar__search-detail">
        <div className="detail-wrapper scroll">
          <h2>{movieDetail.title}</h2>
          <div>
            <CreditLine label="Director" value={movieDetail.director} />
            <CreditLine label="Writer" value={movieDetail.writer} />
            <CreditLine
              label="Stars"
              value={`${movieDetail.actor_1},${movieDetail.actor_2},${movieDetail.actor_3}`}
            />
            <CreditLine label="Release Year" value={movieDetail.release_year} />
            <CreditLine
              label="Production Company"
              value={movieDetail.production_company}
            />
            {movieDetail.fun_fact && (
              <CreditLine label="Fun Fact" value={movieDetail.fun_facts} />
            )}
          </div>
          <h3>Locations</h3>

          {locations.length ? (
            locations.map(({ value, isVarified }: any) => (
              <Location key={value} value={value} varified={isVarified} />
            ))
          ) : (
            <strong>No locations available.</strong>
          )}
          <small>
            <strong>Note*:</strong>Orange border indicate the unverified
            address.
          </small>
        </div>
      </div>
      <div className="collapse" onClick={onCollapse}>
        <FontAwesomeIcon icon={!isCollapsed ? faCaretRight : faCaretLeft} />
      </div>
    </>
  );
};

export default SearchDetail;
