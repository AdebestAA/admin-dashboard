"use client"
import BarChat from "@/components/BarChat";

import { SideBar } from "@/components/SideBar";
import { SimpleChart } from "@/components/SimpleChart";
import { OverViewStats } from "@/utils/OverviewStats";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import LineChart from "@/components/OverViewComponents/LineChart";
import PieChart from "@/components/OverViewComponents/PieChart";
import BarChart from "@/components/OverViewComponents/BarChart";
import { colorCombo } from "@/utils/Color";


export default function Home() {
  const [valueCount,setValueCount] = useState<number>(0)
  const cardRef = useRef<(HTMLDivElement | null)[]>([])



  const handleMouseEnter = (index:number)=>{

    gsap.to(cardRef.current[index],{
      y:-9,
      duration:0.2,
      ease:"power2.out"
    })
  }


  const handleMouseLeave = (index:number)=>{

    gsap.to(cardRef.current[index],{
      y:0,
      duration:0.2,
      ease:"power2.out"
    })

  }
  // Animate on mount 
  useEffect(()=>{
    if (cardRef.current.length > 0) {
      gsap.fromTo(cardRef.current,
      { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 2, stagger: 0.2, ease: "power3.out" } 
      )
    
    }
      },[])

  useLayoutEffect(()=>{
const intervalId = setInterval(()=>{
setValueCount(prev => prev + 120)
},1)

return ()=> clearInterval(intervalId)
  },[valueCount])

// const pathName = usePathname()
  return (
    <div className="mx-auto">
      <section className="mdsm:text-[1rem]  text-[0.8rem] my-4 mx-auto w-[95%] flex flex-wrap justify-between gap-y-6 py-4 gap-x-2">
        {OverViewStats.map((item,index)=>{
          return (
            <div key={index} className="border-border border-[1px] rouned--lg bg-white rounded-lg md:max-w-[20%] mdsm:min-w-[200px] w-full p-4 hover:shadow-border hover:shadow-2xl cursor-pointer transition-all"
            ref={(el) => {
              cardRef.current[index] = el
            }}
            onMouseEnter={()=> handleMouseEnter(index)}
            onMouseLeave={()=> handleMouseLeave(index)}

            >
              <aside   className="flex items-center gap-x-2"><item.icon style={{color:`${colorCombo[index]}`}} /> <span className="text-text font-semibold">{item.name}</span></aside>
              <h1 className="font-bold text-lg py-[2px] m-[2px] px-[2px]">{item.value > 50 && valueCount < item.value ? valueCount : item.value}</h1>
            </div>
          )
        })}
      </section>
    {/* <SideBar/> */}
 {/* Charts */}

 <div className=" w-[95%] mx-auto flex flex-wrap mdsm:justify-between">
  <LineChart/>
  <PieChart/>
 </div>
 <BarChart/>

    </div>
  );
}
