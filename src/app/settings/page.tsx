"use client"
import ConnectedSocials from '@/components/SettingsComponents/ConnectedSocials'
import DangerZone from '@/components/SettingsComponents/DangerZone'
import Notification from '@/components/SettingsComponents/Notification'
import Security from '@/components/SettingsComponents/Security'
import dynamic from 'next/dynamic'
import React from 'react'
const Profile = dynamic(()=> import('@/components/SettingsComponents/Profile'))

const page = () => {
  return (
    <div className='mx-auto md:mx-16 lg:mx-32' >
      <Profile/>
      <Notification/>
      <Security/>
      <ConnectedSocials/>
      <DangerZone/>
      </div>
  )
}

export default page