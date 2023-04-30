import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' 


export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://core-sport-api.zarebin.ir/api/football' }),
  endpoints: (builder) => ({
    getFixtures: builder.query<unknown, string>({
      query: (date) =>({
        url: '/fixtures/',
        params: { date },
      })  ,
      transformResponse: (response: unknown) => response ,
    }),
  }),
})

 
export const { useGetFixturesQuery } = api