import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./apiSlice"
import { setupListeners } from "@reduxjs/toolkit/query"
import authReducer from "./authSlice"

const store = configureStore({
        reducer: {
               auth: authReducer,
               [apiSlice.reducerPath]: apiSlice.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
        devTools: true
})

setupListeners(store.dispatch);
export default store