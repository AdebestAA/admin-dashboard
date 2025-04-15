"use client"
import Notification from '@/components/SettingsComponents/Notification'
import dynamic from 'next/dynamic'
import React from 'react'
const Profile = dynamic(()=> import('@/components/SettingsComponents/Profile'))

const page = () => {
  return (
    <div className='mx-auto md:mx-16 lg:mx-32' >
      <Profile/>
      <Notification/>
      </div>
  )
}

export default page