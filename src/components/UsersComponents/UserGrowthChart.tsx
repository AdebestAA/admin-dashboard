"use client"
import React from 'react'
import { Line } from 'react-chartjs-2'

import { 
    Chart as ChartJs,
    PointElement,
    CategoryScale,
    LinearScale,
    LineElement,
    Tooltip,
    Filler,
    Legend

 } from 'chart.js'


 ChartJs.register(
    PointElement,
    CategoryScale,
    LinearScale,
    LineElement,
    Tooltip,
    Filler,
    Legend
 )
const UsersGrowthChart = () => {
const data = {
labels:["Jan","Feb","Mar","Apr","May","June"],
datasets:[
    {
            label:"User grwoth",
            data:[2300,2320,2529,2840,3120,3230],
            borderColor:"#FF6384",
            pointBackgroundColor:"#FF6384",
            backgroundColor:"#f86e8c54",
            tension:0.5,
            fill:true

    }
]
}

const options ={
    responsive:true,
    maintainAspectRatio:false,
    // scales
    scales:{
        x:{
text:"growth",
grid:{
    display:false
}

        },
        y:{
            min:2000,
            max:3500,
            font:{

            },
            grid:{
            display:false
            },
            title:{
text:"side",
// display:true
            }
        
        }
    },
    // Plugins
    plugins:{
        legend:{
            display:false
        },
        title:{
            text:"Users Growth",
            position:"top",
            display:true,
            font:{
size:15,
},
color:"#36A2EB"
        }
    }
}
  return (
    <div className='mdsm:max-h-[400px] h-[300px] bg-white dark:bg-Dwhite w-full   border-[1px] rounded-lg border-border p-2 my-4 w-full lg:w-[45%] md:w-[48%] '>
        <Line data={data as any} options={options as any}/>
    </div>
  )
}

export default UsersGrowthChart