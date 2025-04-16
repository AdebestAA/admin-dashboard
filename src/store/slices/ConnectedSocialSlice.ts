import { connectedSocialsSliceType } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
const initialState: connectedSocialsSliceType[] = [
    {
        id:1,
        name:"Facebook",
        connected:false,
        icon:FaFacebookF
    },
    {
        id:2,
        name:"X (twitter)",
        connected:false,
        icon:FaXTwitter
    },
    {
        id:1,
        name:"Google",
        connected:false,
        icon:FaGoogle
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