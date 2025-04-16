import { configureStore } from "@reduxjs/toolkit";
import slideBarReducer from "./slices/SlideBarSlice";
import DarkModeReducer from "./slices/DarkMode";
import notificationReducer from "./slices/NotificationSlice";
import SecurityReducer from "./slices/SecuritySlice";
import connectedSocialsReducer from "./slices/ConnectedSocialSlice";


const store = configureStore({
    reducer: {
        slideBar:slideBarReducer,
        DarkModeCheck:DarkModeReducer,
        notification:notificationReducer,
        security:SecurityReducer,
        connectedSocials:connectedSocialsReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch