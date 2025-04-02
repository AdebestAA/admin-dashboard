"use client"
import { colorCombo } from '@/utils/Color'

import { usersStats } from '@/utils/UsersStats'
import gsap from 'gsap'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const UsersStatsComponent = () => {
     const [valueCount,setValueCount] = useState<number>(0)
  const cardRef = useRef<(HTMLDivElement | null)[]>([])


  useLayoutEffect(()=>{
const intervalId = setInterval(()=>{
setValueCount(prev => prev + 120)
},1)

return ()=> clearInterval(intervalId)
  },[valueCount])

  const handleMouseEnter = (index:number)=>{
    if (!cardRef.current[index]) {
        return
    }
    gsap.to(cardRef.current[index],{
        y:-7,
        duration:0.2
    })
    }

    const handleMouseLeave = (index:number)=>{
        if (!cardRef.current[index]) {
            return
        }
        gsap.to(cardRef.current[index],{
            y:0,
            duration:0.2
        })

    }


    // Animate on Mount

    useEffect(()=>{ 
      if (!cardRef.current || cardRef.current.length == 0) {
        return
      }
gsap.fromTo(cardRef.current,
    {
      opacity:0,
      y:10
    },
    {
      opacity:1,
      y:0
    }
)
    },[])

  return (
          <section className="mdsm:text-[1rem]  text-[0.8rem] my-4 mx-auto w-[95%] flex flex-wrap justify-between gap-y-6 py-4 gap-x-2">
            {usersStats.map((item,index)=>{
              return (
                <div key={index} className="border-border dark:border-Dborder border-[1px] rouned--lg bg-white dark:bg-Dwhite rounded-lg md:max-w-[20%] mdsm:min-w-[200px] w-full p-4 hover:shadow-border hover:shadow-2xl cursor-pointer transition-all"
                ref={(el) => {
                  cardRef.current[index] = el
                }}
                onMouseEnter={()=> handleMouseEnter(index)}
                onMouseLeave={()=> handleMouseLeave(index)}
    
                >
                  <aside   className={`flex items-center gap-x-[4px] ${item.name.toLocaleLowerCase().trim().replace(" ","") === "totalusers" ? "text-[#36A2EB]" : item.name.toLocaleLowerCase().trim().replace(" ","") === "newusers" ? "text-[#9966FF]" : item.name.toLocaleLowerCase().trim().replace(" ","") === "activeusers" ? "text-[#FF9F40]" : "text-[#FF6384]" } `}><item.icon  /><span className="text-text font-semibold ">{item.name}</span></aside>
                  <h1 className="font-bold text-lg py-[2px] m-[2px] px-[2px]"><span>{item.name.toLocaleLowerCase().trim().replace(" ","") === "totalrevenue" ? "$" : ""}</span><span>{item.value > 50 && valueCount < item.value ? valueCount : item.value}</span></h1>
                </div>
              )
            })}
          </section>
  )
}

export default UsersStatsComponent