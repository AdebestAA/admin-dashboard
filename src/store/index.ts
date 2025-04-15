import { configureStore } from "@reduxjs/toolkit";
import slideBarReducer from "./slices/SlideBarSlice";
import DarkModeReducer from "./slices/DarkMode";
import notificationReducer from "./slices/NotificationSlice";


const store = configureStore({
    reducer: {
        slideBar:slideBarReducer,
        DarkModeCheck:DarkModeReducer,
        notification:notificationReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch