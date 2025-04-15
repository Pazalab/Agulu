import { createSlice } from "@reduxjs/toolkit";

const initialState = {
       member: localStorage.getItem("Member") ? JSON.parse(localStorage.getItem("Member")) : null
}

const profileActionSlice = createSlice({
        name: "profile",
        initialState,
        reducers: {
               setMemberProfile: (state, action) => {
                       state.member = action.payload;
                       localStorage.setItem("Member", JSON.stringify(action.payload))
               },
               clearMemberProfile: (state) => {
                      state.member = null;
                      localStorage.removeItem("Member")
               }
        }
})

export const {
      setMemberProfile,
      clearMemberProfile
} = profileActionSlice.actions

export default profileActionSlice.reducer;