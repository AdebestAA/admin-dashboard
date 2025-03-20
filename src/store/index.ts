import { configureStore } from "@reduxjs/toolkit";
import slideBarReducer from "./slices/SlideBarSlice";


const store = configureStore({
    reducer: {
        slideBar:slideBarReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch