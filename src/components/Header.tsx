"use client"
import { appDispatch, RootState } from '@/store';
import { closeSlide, openSlide } from '@/store/slices/SlideBarSlice';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
// import ChangeTheme from './ChangeTheme';
// import dynamic from 'next/dynamic';
import ChangeTheme from './ChangeTheme';

// const ChangeTheme = dynamic(() => import('./ChangeTheme'), { ssr: false });

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
    <div className='transition-all duration-300 bg-white dark:bg-Dwhite border-[1px] border-border dark:border-Dborder h-[40px]  w-full flex justify-between py-2 items-center mdsm:px-4 lg:px-8 px-4'>
      <h1 className='capitalize font-bold text-[1.1rem]'>{pathName === "/" ? "Overview" : pathName.slice(1,pathName.length)}</h1>
      <ChangeTheme/>
      {/* mobile bar */}
<button className='mdsm:hidden' onClick={()=>{
if (slideState) {
    dispatch(closeSlide())
}
else{
    dispatch(openSlide())
}

}}>{slideState ?  <IoClose size={20} /> : <FaBars size={20}/>}</button>
    </div>
  )
}

export default Header