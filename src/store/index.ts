import { configureStore } from "@reduxjs/toolkit";
import slideBarReducer from "./slices/SlideBarSlice";
import DarkModeReducer from "./slices/DarkMode";


const store = configureStore({
    reducer: {
        slideBar:slideBarReducer,
        DarkModeCheck:DarkModeReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch