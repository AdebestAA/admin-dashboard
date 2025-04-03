
// "use client"
import AverageTimeSpent from '@/components/UsersComponents/AverageTimeSpent'
import UsersGrowthChart from '@/components/UsersComponents/UserGrowthChart'
import UsersHeatMap from '@/components/UsersComponents/UsersHeatMap'
import UsersListComponent from '@/components/UsersComponents/UsersList'
import UsersStatsComponent from '@/components/UsersComponents/UsersStats'
import dynamic from 'next/dynamic'
import React from 'react'

// const ChangeTheme = dynamic(() => import('@/components/ChangeTheme'), { ssr: false });
const page = () => {
  return (
    <div className='mx-auto'>
<UsersStatsComponent/>
<UsersListComponent/>
<div className='mx-auto w-[95%] flex flex-wrap mdsm:justify-between'>
  <UsersGrowthChart/>
  <UsersHeatMap/>
</div>
<AverageTimeSpent/>

{/*  */}
{/* <ChangeTheme/> */}
    </div>
  )
}

export default page