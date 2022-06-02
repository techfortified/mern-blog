import axios from "axios";

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);
export const SERVER_URL = isLocalhost ? process.env.REACT_APP_LOCAL_API_URL
: process.env.REACT_APP_REMOTE_API_URL

export const API_URL = `${SERVER_URL}/api`;

export const Axios = axios.create({ withCredentials: true, baseURL: API_URL });

export const getPhotoFile = (filename) =>{
  return `${SERVER_URL}/images/${filename}`
}
