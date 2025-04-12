import { createSlice } from "@reduxjs/toolkit";

const initialState = {
       userInfo: localStorage.getItem("UserInfo") ? JSON.parse(localStorage.getItem("UserInfo")) : null,
       tempUser: localStorage.getItem("TempUser") ? JSON.parse(localStorage.getItem("TempUser")) : null,
}

const authSlice = createSlice({
        name: 'auth',
        initialState,
        reducers: {
               setCredentials: (state, action) => {
                      state.userInfo = action.payload;
                      localStorage.setItem("UserInfo", JSON.stringify(action.payload))
               },
               setTempUserDetails: (state, action) => {
                      state.tempUser = action.payload;
                      localStorage.setItem("TempUser", JSON.stringify(action.payload))
               },
               clearTempUserDetails: (state) => {
                       state.tempUser = null;
                       localStorage.removeItem("TempUser")
               }
        }
})

export const {
        setCredentials,
        setTempUserDetails,
        clearTempUserDetails
} = authSlice.actions;

export default authSlice.reducer;