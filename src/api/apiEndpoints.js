// apiEndpoints.js

export const AUTH_REGISTER = "/holidaze/auth/register";
export const AUTH_LOGIN = "/holidaze/auth/login";

export const PROFILES = "/holidaze/profiles";
export const PROFILE_BY_NAME = (name) => `/holidaze/profiles/${name}`;
export const PROFILE_MEDIA = (name) => `/holidaze/profiles/${name}/media`;
export const PROFILE_VENUES = (name) => `/holidaze/profiles/${name}/venues`;
export const PROFILE_BOOKINGS = (name) => `/holidaze/profiles/${name}/bookings`;

export const VENUES = "/holidaze/venues";
export const VENUE_BY_ID = (id) => `/holidaze/venues/${id}`;

export const BOOKINGS = "/holidaze/bookings";
export const BOOKING_BY_ID = (id) => `/holidaze/bookings/${id}`;
