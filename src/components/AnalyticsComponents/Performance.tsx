"use client"
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { 
    Chart as ChartJs,
    ArcElement,
    Tooltip,
    Legend
 } from 'chart.js'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

 ChartJs.register(
    ArcElement,
    Tooltip,
    Legend
 )
const Performance = () => {
  const darkModeState = useSelector((state:RootState)=>{
    return state.DarkModeCheck
    })
    const data = {
        labels: ['Search', 'Advertisement',"Referral","Email","Physical Contact"],
        datasets: [
          {
            label: 'Money Spent',
            data: ["30", "50","80","16","14"], 
            backgroundColor: ["#FF6384","#36A2EB","#FF9F40", "#4BC0C0", "#9966FF", "#FFCE56", ],
            borderWidth: 1,
          },
        ],
      };
    

      const options = {
        maintainAspectRatio:false,
        respnsive:true,
        plugins:{
          legend:{
          position:"bottom",
          display:true,
          labels:{
          font:{
          family:"poppins",
          size:10,
          },
          color:darkModeState ?  "rgb(198, 198, 198)" : "rgb(85, 85, 85)",
          boxWidth:20,
          },
          },
          title:{
            display:true,
            position:"top",
            text:"Money Spent",
            color:darkModeState ?  "rgb(198, 198, 198)" : "rgb(85, 85, 85)"
          }
        }
      }
  return (
    <div className='mdsm:max-h-[400px]   bg-white dark:bg-Dwhite  w-full   border-[1px] rounded-lg border-border p-2 my-4 w-full lg:w-[45%] md:w-[48%] flex items-center justify-center'>
    <Doughnut data={data} options={options as any} />
    </div>
  )
}

export default Performance