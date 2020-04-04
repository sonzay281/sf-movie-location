/**
 * Personal utility library to convert the (lat,lng) to address and vice versa.
 */
import GoogleGeocode from "./GoogleGeocode";
const API_KEY = process.env.REACT_APP_MAP_API_KEY;
const Geocode = new GoogleGeocode(API_KEY);

/**
 * @param location location from which to look after lat lng
 */
export const getLatLng = (location: string) => {
  return Geocode.fromAddress(location).then((result) => result);
};

/**
 * @param {lat,lng} lat,lng from which to search the address
 */
export const getAddress = ({ lat, lng }: any) => {
  return Geocode.fromLatLng({ lat, lng }).then(({ results }) => results);
};
