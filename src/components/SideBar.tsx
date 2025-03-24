"use client"
import { appDispatch, RootState } from '@/store';
import { SideBarMenu } from '@/utils/SideBarItems';
import gsap from 'gsap';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaBars } from "react-icons/fa";
import { closeSlide, openSlide } from '@/store/slices/SlideBarSlice';

export const SideBar = () => {
const navRef = useRef<HTMLDivElement>(null)
const deskNavRef = useRef<HTMLDivElement>(null)
const [contentLoaded,setContentLoaded] = useState<boolean>(false)
const [classGen,setClassGen] = useState("hidden")
const dispatch = useDispatch<appDispatch>()
const [showNavText,setShowNavText] = useState<boolean>(false)
const slideState = useSelector((state:RootState)=>{
    return state.slideBar
})

// for mobile
useEffect(()=>{
    
    setContentLoaded(true)
    
    if (!navRef.current) {
        return
    }
    if (slideState) {   
        setClassGen("block")
        gsap.to(navRef.current,{
            x:"00"
        })
    }
    else{
        gsap.to(navRef.current,{
            x:"-200"
        })

    }
    
},[slideState])
// for desktop

useEffect(()=>{
    if (!deskNavRef.current) {
        return
    }

    let intervalId = null
if (slideState) {
    
    gsap.to(deskNavRef.current,{
        width:"250px",
        duration: 1,
        ease: "power2.out"
    })
    intervalId = setTimeout(()=>{
        setShowNavText(true)
    },500)
}
else{
    gsap.to(deskNavRef.current,{
        width:"60px",
        duration: 1,
        ease: "power2.out"
    })
    setShowNavText(false)
}

// return ()=> clearInterval(intervalId)
},[slideState])
 



  return (
    <>
  <div className={`bg-white border-[1px] border-border text-text w-[200px] px-2 min-h-screen ${classGen} mdsm:hidden`} ref={navRef}>
<div>

{SideBarMenu.map((item,index)=>{
    
    return (
        <Link href={item.link} key={item.id} className='hover:bg-hover hover:font-semibold transition flex items-center w-4/5 rounded-lg pl-2 py-2'>
            <item.icon />
            <span className='pl-4'>{item.name}</span>
        </Link>
    )
})}
</div>
  </div>
{/* desktop */}

  <div className={`  border-[1px] border-border text-text w-[60px] mdsm:px-[2px] px-2 min-h-screen hidden mdsm:block`} ref={deskNavRef}>
<div>
<button
onClick={()=>{
    if (slideState) {
        dispatch(closeSlide())
    }else{
        
        dispatch(openSlide())
    }
}}
className='pl-2  mt-4 cursor-pointer'><FaBars size={15}/></button>
{SideBarMenu.map((item,index)=>{
    
    return (
        <Link href={item.link} key={item.id} className='hover:bg-hover hover:font-semibold transition flex items-center w-4/5 rounded-lg sm px-2 h-[50px]  '>
            <item.icon className={`text-lg font-bold`}/>
            <span className={`transition duration-[0.5s] ml-4  ${showNavText ? "inline opacity-100": "hidden opacity-0"} `}>{item.name}</span> 
        </Link>
    )
})}
</div>
  </div>
    </>
  )
}
