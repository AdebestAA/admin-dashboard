import React, { useEffect, useState } from 'react';
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

 const  LineChart = ()=>{
    const [key,setKey] = useState(0)


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
            borderColor: "rgb(23, 0, 70)",
            backgroundColor: "rgba(96, 118, 240, 0.2)",
            tension: 0.7, 
            borderWidth: 1,
            borderDash: [10,1],
            pointBorderColor: "rgb(255, 0, 0)",
            pointBackgroundColor: "rgb(23, 0, 70)",
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
            color:"rgb(23, 0, 70)"
        },
        // TOOLTOP PLUGIN
          tooltip: {   
            enabled: true,
            backgroundColor: "rgba(0,0,0,0.7)", 
            titleColor: "rgb(23, 0, 70)",
            bodyColor: "white",
            mode: "index", 
           
         },
        },
        scales: {
          x: { 
           
            grid: { 
                display: true,
                borderDash: [5, 5]
             } 
        },
          y: {
            min:0,
            max:6000,
             beginAtZero: false,
             drawBorder: true, 
             drawTicks: true,
            },
       
        },
        
      };


     
      
      return <section className='mdsm:max-h-[400px] h-[300px]  w-full   border-[1px] rounded-lg border-border p-2 my-4 w-full lg:w-[45%] md:w-[48%] '>
        <Line  data={data} options={options as any} />
      </section>

}

export default LineChart