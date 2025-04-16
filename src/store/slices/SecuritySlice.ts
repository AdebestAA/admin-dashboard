import { securitySliceType } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:securitySliceType[] = [
    {       id:1,
            name:"Two-Factor Authentication",
            status:false, }
]
const SecuritySlice = createSlice({
    name:"securitySlice",
    initialState,
    reducers:{
        activate:(state:securitySliceType[],actions:PayloadAction<string>)=>{
            let mySecurity:securitySliceType[] = JSON.parse(JSON.stringify(state))

            const getIndex:number = mySecurity.findIndex(item =>item.name.toLocaleLowerCase().trim() == actions.payload.toLocaleLowerCase().trim())
    
            mySecurity[getIndex].status = true
            // console.log(mySecurity);
            return mySecurity
        },
        deactivate:(state:securitySliceType[],actions:PayloadAction<string>)=>{
        let mySecurity:securitySliceType[] = JSON.parse(JSON.stringify(state))

        const getIndex:number = mySecurity.findIndex(item =>item.name.toLocaleLowerCase().trim() == actions.payload.toLocaleLowerCase().trim())

        mySecurity[getIndex].status = false
        // console.log(mySecurity);
        return mySecurity
        }
    }
})

export const {deactivate,activate} = SecuritySlice.actions;

const SecurityReducer = SecuritySlice.reducer;
export default SecurityReducer