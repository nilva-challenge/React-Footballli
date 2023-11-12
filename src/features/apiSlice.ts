import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

/**
 * All webservices helpers to fetch that from the server are implemented at here.
 */
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_BASE_API_URL,
  }),
  endpoints: (builder) => ({}),
});

export const {} = apiSlice;
