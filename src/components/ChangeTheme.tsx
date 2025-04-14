"use client"
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { appDispatch, RootState } from '@/store';
import { returnFalse, returnTrue } from '@/store/slices/DarkMode';

const ChangeTheme = () => {
   
    const dispatch = useDispatch<appDispatch>()
    const darkModeState = useSelector((state:RootState)=>{

        return state.DarkModeCheck
    })
    const [theme,setTheme] = useState<string>(()=>{
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || "light";
          }
          return "light";
    })
    useEffect(()=>{
        if (typeof window !== "undefined") {
        
            
            if (theme === "dark") {
                document.documentElement.classList.add("dark")
                
            }
            else{
                
                document.documentElement.classList.remove("dark")
              
        }

        localStorage.setItem("theme",theme)
        
        console.log(darkModeState);
        
        
    }
    },[theme])


        useEffect(()=>{
    if (typeof window !== "undefined") {
        
        if (document.documentElement.classList.contains("dark")) {
            dispatch(returnTrue())
        }
        else{
            dispatch(returnFalse())
        }
    }
        },[theme])


if (typeof window == "undefined") {
    return
}

    
if (!theme) {
    return null
}
  return (
<>
{/* Mobile */}
<button className='text-Dtext hidden mdsm:inline cursor-pointer' onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>
    {theme === "light" ? <MdOutlineDarkMode className='text-Dtext text-text' size={22} /> : <CiLight size={22} className='text-Dtext text-white' />}
</button>
{/* Mobile */}
<button className='text-Dtext mdsm:hidden inline rounded-lg fixed left-[85%] top-[93%] bg-white dark:bg-Dwhite z-50 p-2 border-[gray] dar:border-Dborder border-[1px] cursor-pointer' onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>
    {theme === "light" ? <MdOutlineDarkMode className='text-Dtext text-text' size={22} /> : <CiLight size={22} className='text-Dtext text-text' />}
</button>
</>
  )
}

export default ChangeTheme