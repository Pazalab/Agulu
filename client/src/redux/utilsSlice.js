import { createSlice } from "@reduxjs/toolkit";

const initialState = {
       notification: { status: false, message: "", type: ""},
}

const utilsSlice = createSlice({
      name: "utils",
      initialState,
      reducers: {
             setNotification: (state, action) => {
                    state.notification.status = action.payload.status;
                    state.notification.message = action.payload.message;
                    state.notification.type = action.payload.type
             },
             clearNotification: (state) => {
                   state.notification.status = false;
                   state.notification.message = "";
                   state.notification.type = ""
             }
      }
})

export const {
       setNotification,
       clearNotification,
} = utilsSlice.actions;

export default utilsSlice.reducer;