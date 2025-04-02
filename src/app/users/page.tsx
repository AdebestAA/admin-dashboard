
import UsersGrowthChart from '@/components/UsersComponents/UserGrowthChart'
import UsersListComponent from '@/components/UsersComponents/UsersList'
import UsersStatsComponent from '@/components/UsersComponents/UsersStats'
import React from 'react'

const page = () => {
  return (
    <div className='mx-auto'>
<UsersStatsComponent/>
<UsersListComponent/>
<div>
  <UsersGrowthChart/>
</div>
    </div>
  )
}

export default page