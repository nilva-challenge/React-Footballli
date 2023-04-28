import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' 


export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getFixtures: builder.query<unknown, string>({
      query: (date) =>({
        url: 'fixtures',
        params: { date },
      })  ,
    }),
  }),
})

 
export const { useGetFixturesQuery } = api