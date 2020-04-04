import React, { useEffect } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";

import { getSelectedMovieLocations } from "reducers/baseReducers";
import { fetchAllMovies, valueChanged } from "actions/baseActions";

import { getLatLng } from "services/mapService";
import SideBar from "components/sidebar/SideBar";
import MapContainer from "components/mapcontainer/MapContainer";

const LandingPage = () => {
  const dispatch = useDispatch();

  /**
   * This selector selects the following data from redux store:
   * - prevoiusly stored latitude,longitudes
   * - selected movie title
   * - selected movie locations
   */

  const {
    storedLatLngs,
    selectedMovieTitle,
    selectedMovieLocations,
  } = useSelector((state: RootStateOrAny) => ({
    storedLatLngs: state.base.get("latlngs")?.toJS(),
    selectedMovieTitle: state.base.get("selectedMovieTitle"),
    selectedMovieLocations: getSelectedMovieLocations(state)?.sort(),
  }));

  /**
   * The following effect is triggred only
   * once fetch the movie list from API
   */

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, []);

  /**
   * Check if the selected movie has any locations detail
   */

  useEffect(() => {
    if (selectedMovieLocations.length) {
      selectedMovieLocations.forEach(async (location: string) => {
        if (
          storedLatLngs === undefined ||
          !Object.keys(storedLatLngs).includes(location)
        ) {
          const data = await getLatLng(location);
          if (data?.lat) {
            dispatch(
              valueChanged(`latlngs.${location}`, {
                location,
                ...data,
              })
            );
          }
        }
      });
    }
  }, [selectedMovieTitle]);

  /**
   * Process the selected movie locations and store
   * in @var processedLocations to consume in our map
   * */

  let processedLocations: any[] = [];
  selectedMovieLocations.forEach((a) => {
    if (!!storedLatLngs && Object.keys(storedLatLngs).includes(a))
      processedLocations.push(storedLatLngs[a]);
    else console.warn(`Could not find the lat lng of ${a}`);
  });

  return (
    <div className="container">
      <SideBar
        addressList={processedLocations.map(({ location }) => location)}
      />
      <MapContainer addressList={processedLocations} />
    </div>
  );
};
export default LandingPage;
