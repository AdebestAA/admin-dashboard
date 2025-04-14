"use client"
import React from 'react'
import {
    Chart as Chartjs,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    Title
} from "chart.js"
import { Radar } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

Chartjs.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    Title
)

const ContinentsCategorization= () => {


  const darkModeState = useSelector((state:RootState)=>{
    return state.DarkModeCheck
    })

  const data = {
    labels: ['Africa', 'Europe', 'Asia', 'N.America', 'S.America', 'Oceania'],
    datasets: [
      {
        label: 'Last Month Revenue',
        data: [6500, 5900, 9000, 8100, 5600, 8500],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: '#FF6384',
        borderWidth: 2
      },
      {
        label: 'This Month Revenue ',
        data: [7000, 7800, 4000, 1900, 9600, 6200],
        backgroundColor: 'rgba(0, 94, 255, 0.18)',
        borderColor: "rgb(0, 94, 255)",
        borderWidth: 2
      }
    ]
  };

const options = {
  maintainAspectRatio:false,
  responsive:true,
scales: {
  r: {
    angleLines: { display: true },
    suggestedMin: 4000,
    suggestedMax: 10000,
    pointLabels: {
      font: {
        size: 10,
      
        family: 'Poppins'
      },
      color: darkModeState ?  "rgb(198, 198, 198)" : "rgb(85, 85, 85)"
    },
    grid: {
      color: darkModeState ?  "rgba(132, 132, 132, 0.46)" : "rgb(188, 188, 188)"
      
    },
  },

},
plugins:{
  legend: {
    position: 'bottom',
    display:true,
    labels: {
      font: {
        size: 11,
        family: 'Poppins',
      },
      color: darkModeState ?  "rgb(198, 198, 198)" : "rgb(85, 85, 85)", 
      boxWidth: 20
    },
  },
  tooltip: {
    enabled: true
  },
  title:{
    display:true,
    text:"Users by Continent",
    position:"top",

    color: darkModeState ?  "rgb(198, 198, 198)" : "rgb(85, 85, 85)", 
  },
}
}

  return (
    <div className='mdsm:max-h-[400px] h-[300px]  bg-white dark:bg-Dwhite  w-full   border-[1px] rounded-lg border-border p-2 my-4 w-full lg:w-[45%] md:w-[48%] flex items-center justify-center'>
      <Radar data={data} options={options as any} />
    </div>
  )
}

export default ContinentsCategorization