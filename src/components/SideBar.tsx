"use client"
import { RootState } from '@/store';
import { SideBarMenu } from '@/utils/SideBarItems';
import gsap from 'gsap';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';

export const SideBar = () => {
const navRef = useRef<HTMLDivElement>(null)
const [contentLoaded,setContentLoaded] = useState<boolean>(false)
const [classGen,setClassGen] = useState("hidden")
const slideState = useSelector((state:RootState)=>{
    return state.slideBar
})
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


  return (
    <>
  <div className={`bg-white border-[1px] border-border text-text w-[200px] px-2 min-h-screen ${classGen} mdsm:hidden`} ref={navRef}>
<div>

{SideBarMenu.map((item,index)=>{
    
    return (
        <Link href={"#"} key={item.id} className='hover:bg-hover hover:font-semibold transition flex items-center w-4/5 rounded-lg pl-2 py-2'>
            <item.icon />
            <span className='pl-4'>{item.name}</span>
        </Link>
    )
})}
</div>
  </div>
  <div className={`bg-black  border-[1px] border-border text-text w-[200px] px-2 min-h-screen hidden mdsm:block`}>
<div>

{SideBarMenu.map((item,index)=>{
    
    return (
        <Link href={"#"} key={item.id} className='hover:bg-hover hover:font-semibold transition flex items-center w-4/5 rounded-lg pl-2 py-2'>
            <item.icon />
            <span className='pl-4'>{item.name}</span>
        </Link>
    )
})}
</div>
  </div>
    </>
  )
}
