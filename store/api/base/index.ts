import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export const baseApi = createApi({
  keepUnusedDataFor: 60,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://stg-kontentadapter.beinsports.com',
    prepareHeaders: (headers) => {

      headers.set('X-KP-API-Key', "qwerty");

      return headers;
    }
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }

    return undefined;
  },
  endpoints: () => ({})
});

export const {
  util: { getRunningQueriesThunk }
} = baseApi;
