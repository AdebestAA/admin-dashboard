"use client"
import BarChat from "@/components/BarChat";
import PieChart from "@/components/PieChart";
import { SideBar } from "@/components/SideBar";
import { SimpleChart } from "@/components/SimpleChart";
import { OverViewStats } from "@/utils/OverviewStats";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import LineChart from "@/components/OverViewComponents/LineChart";



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
  useLayoutEffect(()=>{
const intervalId = setInterval(()=>{
setValueCount(prev => prev + 120)
},1)

return ()=> clearInterval(intervalId)
  },[valueCount])
const pathName = usePathname()
  return (
    <div className="mx-auto">
      <section className="my-4 mx-auto w-[95%] flex flex-wrap justify-between gap-y-6 py-4 gap-x-2">
        {OverViewStats.map((item,index)=>{
          return (
            <div key={index} className="bg-white rounded-lg md:max-w-[20%] mdsm:min-w-[200px] w-full p-4 hover:shadow-border hover:shadow-2xl cursor-pointer transition-all"
            ref={(el) => {
              cardRef.current[index] = el
            }}
            onMouseEnter={()=> handleMouseEnter(index)}
            onMouseLeave={()=> handleMouseLeave(index)}

            >
              <aside className="flex items-center gap-x-2"><item.icon className={index == 1 ? "text-[yellow]" :index == 2 ? "text-[green]" : index == 3 ? "text-[red]" : "text-[red]" }/> <span className="text-text font-semibold">{item.name}</span></aside>
              <h1 className="font-bold text-lg py-[2px] m-[2px] px-[2px]">{item.value > 50 && valueCount < item.value ? valueCount : item.value}</h1>
            </div>
          )
        })}
      </section>
    {/* <SideBar/> */}
 {/* Charts */}

 <div className=" w-[95%] mx-auto">
  <LineChart/>
 </div>

    </div>
  );
}
