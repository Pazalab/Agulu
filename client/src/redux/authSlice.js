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
               }
        }
})

export const {
        setCredentials,
} = authSlice.actions;

export default authSlice.reducer;