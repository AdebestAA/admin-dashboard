"use client"
import { AnalyticsStats } from '@/utils/AnalyticsStats'
import { colorCombo } from '@/utils/Color'
import { MdArrowOutward } from "react-icons/md";

import gsap from 'gsap'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const AnalyticsStatsComponent = () => {
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
      if (!cardRef || !cardRef.current || cardRef.current.length == 0) {
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
            {AnalyticsStats.map((item,index)=>{
              return (
                <div key={index} className=" flex  justify-between border-border dark:border-Dborder border-[1px] rouned--lg bg-white dark:bg-Dwhite rounded-lg md:max-w-[20%] mdsm:min-w-[200px] w-full p-4 hover:shadow-border dark:hover:shadow-Dborder hover:shadow-2xl dark:hover:shadow-md dark:hover:shadow-lg cursor-pointer transition-all "
                ref={(el) => {
                  cardRef.current[index] = el
                }}
                onMouseEnter={()=> handleMouseEnter(index)}
                onMouseLeave={()=> handleMouseLeave(index)}
    
                >
                  <aside   className={`flex flex-col items-start items-center gap-x-[4px] ${item.name.toLocaleLowerCase().trim().replace(" ","") === "totalusers" ? "text-[#36A2EB]" : item.name.toLocaleLowerCase().trim().replace(" ","") === "newusers" ? "text-[#9966FF]" : item.name.toLocaleLowerCase().trim().replace(" ","") === "activeusers" ? "text-[#FF9F40]" : "text-[#FF6384]" } `}>
                    <span className="text-text font-semibold ">{item.name}</span>
                    <span className="text-Dwhite dark:text-white font-semibold ">{item.value}</span>
                    <h5 className="text-[0.9rem] flex"><span className={`flex items-center  ${item.increased ? "text-green" : "text-red"} text-[0.8rem]`}><MdArrowOutward/> {item.percentageGrowth}%</span> <span className='text-text ml-2 '>vs last period</span> </h5>

                 
                  </aside>
                  <aside className=' flex items-center'>
                    <span className={`${item.increased ? "bg-[#24f7242b]" : "bg-[#f724242b]"} bg-[#24f7242b] p-2 rounded-lg`}><item.icon size={30} className={item.increased ? "text-green" : "text-red"} /></span>
                  </aside>
                </div>
              )
            })}
          </section>
  )
}

export default AnalyticsStatsComponent