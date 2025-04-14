"use client"
import React, { useEffect, useState } from 'react'
import { PolarArea } from 'react-chartjs-2'
import {
    Chart as ChartJs,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
    Title
}    from "chart.js"
import { colorCombo } from '@/utils/Color'
import { useDispatch, useSelector } from 'react-redux'
import { appDispatch, RootState } from '@/store'

ChartJs.register(
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
    Title
)

const TimeSpent = () => {

    const [datatForHoursSpent,setDataHoursSpent] = useState<number[]>([40,70,50,81,43,71])
    const dispatch = useDispatch<appDispatch>()
    const [checkDarkMode,setCheckDarkMode] = useState<boolean>(document.documentElement.classList.contains("dark"))
        const darkModeState = useSelector((state:RootState)=>{
        return state.DarkModeCheck
        })


        
    // useEffect(()=>{

    //     console.log(darkModeState);
        
       
    // },[darkModeState])

    const colorsToUse = (dataPassed: any[])=>{

        const colors: string[] = colorCombo.filter((color,index)=>{

            if (index  <= dataPassed.length) {
                return color
            }
        })

        return colors
    }
    const data = {
        labels:['Africa', 'Europe', 'Asia', 'N.America', 'S.America', 'Oceania'] ,
        datasets:[
            {
                label:"Hours Spent",
                data:datatForHoursSpent,
                backgroundColor: colorsToUse(datatForHoursSpent),
                borderColr:"rgb(109, 109, 109)",
                borderWidth:2
            }
        ]
    }
    const options = {
        responsive: true,
        maintainAspectRatio:false,
        plugins: {
            title:{
            position:"top",
            display:true,
            text:"Hours Spent In Each Continent",
            color:darkModeState ?  "rgb(198, 198, 198)" : "rgb(85, 85, 85)"
            },
          legend: {
            position:"bottom",
            labels: {
              color: darkModeState ?  "rgb(198, 198, 198)" : "rgb(85, 85, 85)",
              font: { family: 'Poppins', size: 12 }
            }
          },
          tooltip: {
            enabled: true
          }
        },
        scales: {
          r: {
            ticks: {
              color: '#6b7280',
              backdropColor: 'transparent'
            },
            grid: {
              color: darkModeState ?  "rgb(198, 198, 198)" : "rgb(85, 85, 85)"
              
            },
        
                suggestedMin: 40,
                suggestedMax: 100,
                pointLabels: {
                color:"red"
                }
            
           
          }
        }
    }
  return (
    <div className='mdsm:max-h-[400px] h-[300px]  bg-white dark:bg-Dwhite  w-full   border-[1px] rounded-lg border-border p-2 my-4 w-full lg:w-[45%] md:w-[48%] flex items-center justify-center'>
<PolarArea data={data as any} options={options as any}/>
    </div> 
  )
}

export default TimeSpent