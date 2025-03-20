"use client"
import { appDispatch, RootState } from '@/store';
import { closeSlide, openSlide } from '@/store/slices/SlideBarSlice';
import React, { useEffect } from 'react'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
const Header = () => {
    const dispatch = useDispatch<appDispatch>()
const slideState = useSelector((state:RootState)=>{
    return state.slideBar
})
useEffect(()=>{
console.log(slideState);

},[slideState])


  return (
    <div className='bg-white border-[1px] border-border  w-full flex justify-between py-2 items-center px-4'>
      <h1>Overview</h1>
<button className='mdsm:hidden' onClick={()=>{
if (slideState) {
    dispatch(closeSlide())
}
else{
    dispatch(openSlide())
}

}}>{slideState ?  <IoClose/> : <FaBars/>}</button>
    </div>
  )
}

export default Header