import { connectedSocialsSliceType } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: connectedSocialsSliceType[] = [
    {
        id:1,
        name:"Facebook",
        connected:false,
      
    },
    {
        id:2,
        name:"X (twitter)",
        connected:false,
     
    },
    {
        id:1,
        name:"Google",
        connected:false,
       
    },
]

        const ConnectedSocialSlice = createSlice({
        name:"ConnectedSocials",
        initialState,
        reducers:{
        connect:(state:connectedSocialsSliceType[],actions:PayloadAction<string>)=>{
        let mySocials:connectedSocialsSliceType[] = JSON.parse(JSON.stringify(state))

        const getIndex:number = mySocials.findIndex(item =>item.name.toLocaleLowerCase().trim() == actions.payload.toLocaleLowerCase().trim())

        mySocials[getIndex].connected = true

        return mySocials
        },
        disconnect:(state:connectedSocialsSliceType[],actions:PayloadAction<string>)=>{
        let mySocials:connectedSocialsSliceType[] = JSON.parse(JSON.stringify(state))

        const getIndex:number = mySocials.findIndex(item =>item.name.toLocaleLowerCase().trim() == actions.payload.toLocaleLowerCase().trim())

        mySocials[getIndex].connected = false

        return mySocials
        }
        }
        })

        export const {connect,disconnect} = ConnectedSocialSlice.actions

        const connectedSocialsReducer = ConnectedSocialSlice.reducer

        export default connectedSocialsReducer