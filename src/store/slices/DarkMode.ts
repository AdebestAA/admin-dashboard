import { createSlice } from "@reduxjs/toolkit";



const DarkModeSlice = createSlice({
    name:"darkModeSlice",
    initialState:false,
    reducers:{
        returnTrue:()=>{

        return true
        },
        returnFalse:()=>{
        return false
        }
    }

})

export const {returnFalse,returnTrue} = DarkModeSlice.actions
 const DarkModeReducer = DarkModeSlice.reducer
export default DarkModeReducer