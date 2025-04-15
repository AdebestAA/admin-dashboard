import { notificationSliceType } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:notificationSliceType[] = [
    {
    id:1,
    name:"Push Notification",
    status:false,
    },
    {
    id:2,
    name:"Email Notification",
    status:false,
    },
    {
    id:1,
    name:"SMS Notification",
    status:false,
    },
]

const notificationSlice = createSlice({
    name:"Notification Slice",
    initialState:initialState,
    reducers:{
        turnOn:(state:notificationSliceType[],actions:PayloadAction<string>)=>{
            console.log(actions.payload);

        },
        turnOff:(state:notificationSliceType[],actions:PayloadAction<string>)=>{
console.log(actions.payload);

        }
    }
}) 

export const {turnOff,turnOn} = notificationSlice.actions
const notificationReducer = notificationSlice.reducer
export default notificationReducer