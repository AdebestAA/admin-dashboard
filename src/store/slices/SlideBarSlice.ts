import { createSlice } from "@reduxjs/toolkit";

const slideBarSlice = createSlice  ({
    name:"slideBar",
initialState:false,
reducers:{
openSlide:(state:boolean)=>{

    return true
},
closeSlide:()=>{
    return false
}
}

})


export const {openSlide,closeSlide} = slideBarSlice.actions
const  slideBarReducer = slideBarSlice.reducer
export default slideBarReducer