import { createSlice } from "@reduxjs/toolkit";

const initialState = {
       notification: { status: false, message: "", type: ""},
       sidebarStatus: false
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
             },
             setSidebarStatus: (state) => {
                     state.sidebarStatus = !state.sidebarStatus
             }
      }
})

export const {
       setNotification,
       clearNotification,
       setSidebarStatus,
       closeSidebarStatus
} = utilsSlice.actions;

export default utilsSlice.reducer;