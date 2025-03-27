import React, { useEffect, useRef } from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    BarElement,
    LinearScale,
    Legend,
    Title,
    Tooltip,
 

} from "chart.js"
import gsap from 'gsap'

ChartJS.register(
    CategoryScale,
    BarElement,
    LinearScale,
    Legend,
    Title,
    Tooltip
)
const BarChart = () => {

const barChartRef = useRef<HTMLDivElement | null >(null)

    const data = {
        labels:["Jan","Feb","March","April","May"],
        datasets:[
            {
              label: "Sales",
              data: [9000, 11000, 9500, 13000, 15000],
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FF9F40",
                "#4BC0C0",
                "#9966FF",
              ],
              borderWidth: 1,
            },
          ],
    }

    const options = {
        responsive:true,
        maintainAspectRatio:false,
        scales:{
            y:{
                min:5000,
                max:20000,
         beginAtZero:true           
            }
        },
        plugins:{
            title:{
                display:true,
                text:"Monthly Sales",
                font:{size:15},
                color:"gray"
            },
            legend:{
                display:false,
                onclick:null

            }
        }
    }

    useEffect(()=>{
        if (barChartRef.current) {
            gsap.fromTo(barChartRef.current,
            { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 2, stagger: 0.2, ease: "power3.out" } 
            )
          }
    
     },[])
     
  return <section className='flex bg-white justify-center mdsm:max-h-[400px] h-[300px] w-[95%] border-[1px] rounded-lg border-border py-2 my-4 mx-auto ' ref={barChartRef}>
    <Bar data={data} options={options as any} />
  </section>
}

export default BarChart