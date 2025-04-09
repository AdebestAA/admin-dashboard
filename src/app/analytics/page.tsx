import AnalyticsStatsComponent from '@/components/AnalyticsComponents/AnalyticsStats'
import Performance from '@/components/AnalyticsComponents/Performance'
import RevenueVsTarget from '@/components/AnalyticsComponents/RevenueVsTarget'
import React from 'react'

const page = () => {
  return (
    <div className='mx-auto'>
        <AnalyticsStatsComponent />
        <div className='w-[95%] mx-auto flex flex-wrap mdsm:justify-between'>
        <RevenueVsTarget/>
        <Performance/>
        </div>
    </div>
  )
}

export default page