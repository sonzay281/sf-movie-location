import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

/**
 * @param movieDetails array of movie detail with same title
 * @param onCollapse function to toggle the sidebar
 * @param isCollapsed flag whether the sidebar is collapsed or not
 * @param addressList varified location with latitude and longitude
 */

const SearchDetail = ({
  movieDetails,
  onCollapse,
  isCollapsed,
  addressList,
}: any) => {
  const movie = movieDetails[0];

  const locations = movieDetails
    ?.map(({ locations }: any) => ({
      location: locations,
      isVarified: addressList.includes(locations),
    }))
    .sort();

  return (
    <>
      <div className="sidebar__search-detail">
        <div className="detail-wrapper scroll">
          <h2>{movie.title}</h2>
          <div>
            <CreditLine label="Director" value={movie.director} />
            <CreditLine label="Writer" value={movie.writer} />
            <CreditLine
              label="Stars"
              value={`${movie.actor_1},${movie.actor_2},${movie.actor_3}`}
            />
            <CreditLine label="Release Year" value={movie.release_year} />
            <CreditLine
              label="Production Company"
              value={movie.production_company}
            />
          </div>
          <h3>Locations</h3>

          {locations.length ? (
            locations.map(({ location, isVarified }: any) => (
              <Location key={location} value={location} varified={isVarified} />
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

/***
 * @param label credit line title
 * @param value credit line value
 */
const CreditLine = ({ label, value }: any) => (
  <div className="credit_summary_item">
    <h4 className="inline">{label}:</h4>
    {value}
  </div>
);

/**
 * @param value value of the location
 * @param varified flag whether the map extracted the lat,lng
 */
const Location = ({ value, varified }: any) => (
  <div
    key={`location-${value}`}
    className={`location-detail inline ${
      varified ? "border-success" : "border-warn"
    }`}
  >
    {value}
  </div>
);
