import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
        query: (user) => {
            return {
                url : 'signup_submit',
                method : 'POST',
                body : user,
                headers : {
                    'Content-type' : 'application/json',
                }
            }
        }
    })

    // getPokemonByName: builder.query<Pokemon, string>({
    //   query: (name) => `pokemon/${name}`,
    // }),
  }),
})

export const { useRegisterUserMutation } = userAuthApi