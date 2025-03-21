"use client"
import { appDispatch, RootState } from '@/store';
import { closeSlide, openSlide } from '@/store/slices/SlideBarSlice';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
const Header = () => {
    const dispatch = useDispatch<appDispatch>()
    const pathName = usePathname()
const slideState = useSelector((state:RootState)=>{
    return state.slideBar
})
useEffect(()=>{
// console.log(slideState);
console.log(pathName);

},[slideState])


  return (
    <div className='bg-white border-[1px] border-border  w-full flex justify-between py-2 items-center mdsm:px-2 px-4'>
      <h1 className='capitalize'>{pathName === "/" ? "Overview" : pathName.slice(1,pathName.length)}</h1>
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