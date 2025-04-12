import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./apiSlice"
import { setupListeners } from "@reduxjs/toolkit/query"
import authReducer from "./authSlice";
import utilsReducer from "./utilsSlice"

const store = configureStore({
        reducer: {
               auth: authReducer,
               utils: utilsReducer,
               [apiSlice.reducerPath]: apiSlice.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
        devTools: true
})

setupListeners(store.dispatch);
export default store