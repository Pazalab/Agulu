import { apiSlice } from "./apiSlice";

export const profileApiSlice = apiSlice.injectEndpoints({
       endpoints: (builder) => ({
              getMemberProfile: builder.query({
                    query: () => ({
                           url: "member/get-profile",
                           method: "GET",
                    })
              })
       })
})

export const {
      useGetMemberProfileQuery
} = profileApiSlice;