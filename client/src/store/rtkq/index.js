import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const commonApi = createApi({
  reducerPath: "commonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5010/api/",
  }),
  endpoints: (build) => ({
    getItems: build.query({
      query: ({ type }) => {
        return type;
      },
    }),
  }),
});

export const { useGetItemsQuery } = commonApi;

export default commonApi;
