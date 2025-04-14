import AnalyticsStatsComponent from '@/components/AnalyticsComponents/AnalyticsStats'
import ContinentsCategorization from '@/components/AnalyticsComponents/ContinentsCategorization'
// import ContitnetCategorization from '@/components/AnalyticsComponents/ContinentsCategorization'
import Performance from '@/components/AnalyticsComponents/Performance'
import RevenueVsTarget from '@/components/AnalyticsComponents/RevenueVsTarget'
import TimeSpent from '@/components/AnalyticsComponents/TimeSpent'
import React from 'react'

const page = () => {
  return (
    <div className='mx-auto'>
        <AnalyticsStatsComponent />
        <div className='w-[95%] mx-auto flex flex-wrap mdsm:justify-between'>
        <RevenueVsTarget/>
         <Performance/>
        </div>
        <div className='w-[95%] mx-auto flex flex-wrap mdsm:justify-between'>
         <ContinentsCategorization/>
         <TimeSpent/>
        </div>
    </div>
  )
}

export default page