import { apiSlice } from "./apiSlice";

export const userSlice = apiSlice.injectEndpoints({
        endpoints: (builder) => ({
                registerUser: builder.mutation({
                        query: (payload) => ({
                               url: "user/register",
                               method: "POST",
                               body: payload
                        })
                }),
                activateUser: builder.mutation({
                       query: (payload) => ({
                              url: "/user/account-activation",
                              method: "POST",
                              body: payload
                       })
                })
        })
})

export const {
     useRegisterUserMutation,
     useActivateUserMutation,
     
} = userSlice;