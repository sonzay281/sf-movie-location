import React from "react";
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
export default Location;
