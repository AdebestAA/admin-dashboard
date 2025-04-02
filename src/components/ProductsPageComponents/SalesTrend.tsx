"use client"
import React, { useRef } from 'react'
import { Line } from 'react-chartjs-2'
import { 
    Chart as ChartJs,
    CategoryScale,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Filler,
    Tooltip,
    Legend,
  
} from 'chart.js'

ChartJs.register(
    CategoryScale,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Filler,
    Tooltip,
    Legend
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

const SalesTrend = () => {



    const data = {
type:"line",
labels:["Jan","Feb","March","April","May","June"],
datasets:[
        {
        label:"Sales Trend",
        data:[5000,5400, 6500,7000,7200,7800],
        tension:0.1,
        pointRadius:5,
        borderWidth:1,
        borderDash:[10,9],
        borderColor:"#FF6384",
        backgroundColor:"#4BC0C0",
        pointHoverRadius:10,
        pointBorderWidth:2
        },
]
}

const options = {
    responsive:true,
    maintainAspectRatio:false,
    animation:{
    duration:1000,
    ease:"easeOutExpo"
    },
    // Scales
scales:{
x:{
grid:{
    display:true,
    borderDash:[10,1],
    color:"gray",

},
ticks:{
    color:"#FF6384",
    font:{
        size:13
    }
},
title:{
    display:true,
    text:"Months",
    color:"#36A2EB",
    font:{
        size:15,
        weight:"bold"
    }
}
},
    y:{
    grid:{
    display:true,
    borderDash:[10,3],
    color:"gray",
    },
    title:{
        text:"Sales",
        display:true,
        color:"#36A2EB",
        font:{
            size:13,
            weight:"bold"
        }
    },
    ticks:{
        color:"#FF6384",
        size:13
    }

}
},

    // Plugins
    plugins:{
        legend:{
            display:false,
            position:"left"
        },
        tooltip:{
        enabled:true,
        backgroundColor:"#36A2EB",
        // bodyColor:"#FF6384",
        titleColor:"#FF6384",
        mode:"index"
        },
        title:{
            display:true,
            text:"Sales Trend",
            position:"top",
          font:{
            size:15
          },
          color:"#36A2EB"
        }
    }
}
  return (
    <div className='mdsm:max-h-[400px] h-[300px] bg-white dark:bg-Dwhite w-full   border-[1px] rounded-lg border-border p-2 my-4 w-full lg:w-[45%] md:w-[48%] '>
        <Line data={data as any} options={options as any}  />
    </div>
  )
}

export default SalesTrend