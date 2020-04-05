/**
 * Personal utility library to convert the (lat,lng) to address and vice versa.
 * It wont be available in git, please contact the owner or try alternatives
 *
 * In order to function properly, following comments needs to be uncommented and the
 * package needs to be import.
 */

// import GoogleGeocode from "./google-geocode/src/index";
// const API_KEY = process.env.REACT_APP_MAP_API_KEY;
// const Geocode = new GoogleGeocode(API_KEY);

/**
 * @param location location from which to look after lat lng
 */
export const getLatLng = (location: string) => {
  // return Geocode.fromAddress(location).then((result) => result) || {};
  return { lat: undefined, lng: undefined };
};

/**
 * @param {lat,lng} lat,lng from which to search the address
 */
export const getAddress = ({ lat, lng }: any) => {
  // return Geocode.fromLatLng({ lat, lng }).then(({ results }) => results) || [];
  return [];
};
