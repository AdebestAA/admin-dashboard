"use client"
import { colorCombo } from "@/utils/Color";
import { 
    Chart as ChartJS,
     ArcElement,
      Tooltip,
       Legend
     } from "chart.js";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Pie } from "react-chartjs-2";
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)


const pieChartLable = ["Electronics","Wears" ,"Stationaries","Laundary","Foods"]



const PieChart = () => {

    const pieChartRef = useRef<HTMLDivElement | null >(null)
    const data = {
        labels:pieChartLable,
        datasets:[
            {
                label:"Sales Distribution",
                data:[10,20,30,33,17],
                backgroundColor:colorCombo.map((color,index) => {if (index < 5 ) {
                    return color
                }} ),
                hoverBackgroundColor:"gray"
            }
        ]
    }


    const options= {
        resonsive:true,
        animation:{
        duration:1000,
        easing: "easeOutExpo",
        },
        plugins:{
        legend:{
        display:true,
        labels:{
            font:{
                size:8
            }
        }
        },
        title:{
            display:true,
         text:"Sales Distribution",
         
        }
        }
    }


    useEffect(()=>{
        if (!pieChartRef || !pieChartRef.current) {
            return
          }
        if (pieChartRef.current) {
            gsap.fromTo(pieChartRef.current,
            { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 2, stagger: 0.2, ease: "power3.out" } 
            )
          }
    
     },[])
     
     

  return <section className='flex bg-white dark:bg-Dwhite justify-center mdsm:max-h-[400px] h-[300px] w-full border-[1px] rounded-lg border-border py-2 my-4 w-full lg:w-[48%] md:w-[48%]  opacity-0' ref={pieChartRef}>
     <Pie data={data} options={options as any} />
  </section>
}

export default PieChart