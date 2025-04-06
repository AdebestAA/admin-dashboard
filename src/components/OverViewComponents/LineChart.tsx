import React, { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js"
import gsap from 'gsap';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    Title,
   
)

const colorCombo = [
    "#FF6384", // Red
    "#36A2EB", // Blue
    "#FF9F40", // Orange
    "#4BC0C0", // Teal
    "#9966FF", // Purple
    "#FFCE56", // Yellow
    "#C9CBCF", // Gray
];


 const  LineChart = ()=>{
    const [key,setKey] = useState(0)
    const lineChartRef = useRef<HTMLDivElement | null>(null)


    useEffect(()=>{
setKey(prev => prev + 1)
    },[])
    // data
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        datasets: [
          {
            label: "Sales",
            data: [1200,2300, 1800,3100,1200,2200,3200,2850, 4000, 2900, 4200, 4850],
            borderColor: "rgb(255, 0, 0)",
            backgroundColor: "rgba(249, 82, 82, 0.2)",
            tension: 0.7, 
            borderWidth: 1,
            borderDash: [10,1],
            pointBorderColor: "#FF9F40",
            pointBackgroundColor: "#36A2EB",
            pointBorderWidth: 1,
            pointRadius: 4,
            pointHoverRadius: 8,
            fill: true,
          },
        ],
      };

      const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 1000, 
            easing: "easeOutExpo",
          },
        plugins: {
            // LENGEND PLUGIN
          legend: {   
            display: false,
            position: "bottom", 
            labels: {
              color: "green",
              font: {
                size: 20
              },
            }, 
        },
        title: {
            display: true,
            text: "Sales Data",
            font: { size: 18 },
            color:"gray"
        },
        // TOOLTOP PLUGIN
          tooltip: {   
            enabled: true,
            backgroundColor: "rgba(0,0,0,0.7)", 
            titleColor:  "#4BC0C0",
            bodyColor: "white",
            mode: "index", 
           
         },
        },
        scales: {
          x: { 
           
            grid: { 
                display: true,
                borderDash: [5, 5],
                color:"gray"
             } 
        },
          y: {
            min:0,
            max:6000,
            grid:{
              color:"gray",

            },
             beginAtZero: false,
             drawBorder: true, 
             drawTicks: true,
            },
       
        },
        
      };
 useEffect(()=>{
    if (lineChartRef.current) {
        gsap.fromTo(lineChartRef.current,
        { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 2, stagger: 0.2, ease: "power3.out" } 
        )
      }

 },[])
     
      
      return <section className='mdsm:max-h-[400px] h-[300px] bg-white dark:bg-Dwhite  w-full   border-[1px] rounded-lg border-border p-2 my-4 w-full lg:w-[45%] md:w-[48%] opacity-0' ref={lineChartRef}>
        <Line  data={data} options={options as any} />
      </section>

}

export default LineChart