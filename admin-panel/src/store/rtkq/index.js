import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { closeModalAction } from "../slices/common";

const commonApi = createApi({
  reducerPath: "commonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5010/api/",
  }),
  endpoints: (build) => ({
    getItems: build.query({
      query: ({ type }) => {
        const config = {
          url: type,
        };

        return config;
      },
    }),
    post: build.mutation({
      query: ({ type, data }) => {
        const config = {
          url: type,
          method: "POST",
          body: data,
        };
        return config;
      },
      async onQueryStarted({ runSideEffects }, { dispatch }) {
        try {
          if (runSideEffects) runSideEffects();
          dispatch(closeModalAction());
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useGetItemsQuery, usePostMutation } = commonApi;

export default commonApi;
