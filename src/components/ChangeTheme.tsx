"use client"
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const ChangeTheme = () => {
    "use client"
    const [theme,setTheme] = useState<string>(()=>{
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || "light";
          }
          return "light";
    })
    useEffect(()=>{
        
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        }
        else{
            
            document.documentElement.classList.remove("dark")
        }

        localStorage.setItem("theme",theme)

        console.log(theme);
        
    },[theme])


if (typeof window == "undefined") {
    return
}

    
if (!theme) {
    return null
}
  return (
<>
<button className='text-Dtext hidden mdsm:inline cursor-pointer' onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>
    {theme === "light" ? <MdOutlineDarkMode className='text-Dtext text-text' size={22} /> : <CiLight size={22} className='text-Dtext text-text' />}
</button>
<button className='text-Dtext mdsm:hidden inline rounded-lg fixed left-[90%] top-[90%] bg-white dark:bg-Dwhite z-10 p-2 border-[gray] dar:border-Dborder border-[1px] cursor-pointer' onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>
    {theme === "light" ? <MdOutlineDarkMode className='text-Dtext text-text' size={22} /> : <CiLight size={22} className='text-Dtext text-text' />}
</button>
</>
  )
}

export default ChangeTheme