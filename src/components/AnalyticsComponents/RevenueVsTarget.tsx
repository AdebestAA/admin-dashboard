"use client"
import { Line } from "react-chartjs-2"
import {
    Chart as Chartjs,
     LineElement,
     LinearScale,
     CategoryScale,
     PointElement,
     Title,
     Legend,
     Tooltip,
     Filler
} from "chart.js"
import { revenueVsTargetDataType } from "@/utils/types"
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/store"
Chartjs.register(
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement,
    Title,
    Legend,
    Tooltip,
    Filler
)

const revenueVsTargetData : revenueVsTargetDataType  = {
    thisWeek:{
        label:["Mon","Tue","Wed","Thr","Fri","Sat"],
        target:[100,180,210,250,290,310],
        revenue:[120,150,190,240,250,330]
    },
    thisMonth:{
        label:["First Week","Second Week","Third Week","Fourth Week"],
        target:[600,930,1120,1200,],
        revenue:[610,890,1950,1210]
    },
    lastMonth:{
        label:["First Week","Second Week","Third Week","Fourth Week"],
        target:[600,930,1120,1200,],
        revenue:[620,850,900,1110]
    },
    lastSixMonths:{
        label:["Jan","Feb","Mar","Apr","May","Jun"],
        target:[8000,8300,9000,9220,9700,10100],
        revenue:[8200,8250,8700,9400,9650,10200]
    },

}


const RevenueVsTarget = () => {
    // const [dashbaordCategory,setDashBoardCategory] = useState<revenueVsTargetDataType>(revenueVsTargetData)

    const [selectCategory,setSelectCategory] = useState<keyof typeof revenueVsTargetData>("thisWeek")
    
    const darkModeState = useSelector((state:RootState)=>{
        return state.DarkModeCheck
        })
    
    const data = {
        labels:revenueVsTargetData[selectCategory].label,
        datasets:[
            {
                label:"Revenue",
                data:revenueVsTargetData[selectCategory].revenue,
                tension:0.5,
                pointRadius:5,
                borderWidth:1,
                borderDash:[0,0],
                borderColor:"rgb(0, 255, 8)",
                backgroundColor:"rgba(0, 255, 8, 0.13)",
                pointHoverRadius:10,
                pointBorderWidth:2,
                fill:true
            },
            {
                label:"target",
                data:revenueVsTargetData[selectCategory].target,
                tension:0.5,
                pointRadius:5,
                borderWidth:1,
                borderDash:[0,0],
                borderColor:"rgb(21, 0, 255)",
                backgroundColor:"rgba(21, 0, 255, 0.13)",
                pointHoverRadius:10,
                pointBorderWidth:2,
                fill:true
            },
        ]
    }

    const option = {
        maintainAspectRatio:false,
        responsive:true,
        scales:{
y: {
grid:{
    display:true,
    orderDash:[10,1],
    color:"gray",
},
},
x: {
grid:{
    display:true,
    orderDash:[10,1],
    color:darkModeState ?  "rgb(198, 198, 198)" : "rgb(85, 85, 85)",
},
},
        }
    }
  return (
    <div className='mdsm:max-h-[400px]  bg-white dark:bg-Dwhite  w-full   border-[1px] rounded-lg border-border p-2 my-4 w-full lg:w-[45%] md:w-[48%] '>
        <header className="flex items-center justify-between px-2">
            <h1 className="font-semibold text-[0.85rem]">Revenue Vs Target</h1>
<select className="dark:bg-Dborder bg-Dgray text-Dtext rounded-lg pr-2 py-[2px] outline-none " name="" id="" onChange={(e)=>{
    setSelectCategory(e.target.value as keyof typeof revenueVsTargetData)
   
    console.log("display");
    
    
}}>
    <option value="thisWeek">this week</option>
    <option value="thisMonth">this month</option>
    <option value="lastMonth">last month</option>
    <option value="lastSixMonths">last Six Months</option>
</select>
        </header>
<div className="min-h-[300px]">
<Line data={data as any} options={option} />
</div>
    </div>
  )
}

export default RevenueVsTarget