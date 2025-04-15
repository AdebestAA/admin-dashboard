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
        turnOn:(state:notificationSliceType[],actions:PayloadAction<string>):notificationSliceType[]=>{

let myNotification:notificationSliceType[] = JSON.parse(JSON.stringify(state))

const getIndex:number = myNotification.findIndex(item =>item.name.toLocaleLowerCase().trim() == actions.payload.toLocaleLowerCase().trim())

myNotification[getIndex].status = true
console.log(myNotification);
return myNotification
           
           
        },
        turnOff:(state:notificationSliceType[],actions:PayloadAction<string>)=>{
            
            let myNotification:notificationSliceType[] = JSON.parse(JSON.stringify(state))

            const getIndex:number = myNotification.findIndex(item =>item.name.toLocaleLowerCase().trim() == actions.payload.toLocaleLowerCase().trim())
            
            myNotification[getIndex].status = false
            console.log(myNotification);
            return myNotification
return 
        }
    }
}) 

export const {turnOff,turnOn} = notificationSlice.actions
const notificationReducer = notificationSlice.reducer
export default notificationReducer