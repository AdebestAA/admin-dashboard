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
            data:[2100,4340,5210,6400,6900,7500],

    }
]
}

const options ={
    responsive:true,
    maintainAspectRatio:false,
    // scales
    scales:{
        x:{
text:"grwoth",
        },
        y:{
            min:2000,
            max:8000,
            font:{

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
        }
    }
}
  return (
    <div className='py-4'>
        <Line data={data as any} options={options as any}/>
    </div>
  )
}

export default UsersGrowthChart