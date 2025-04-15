"use client"
import React from 'react'
import {User} from "lucide-react"
import Image from 'next/image'
const Profile = () => {
  return (
    <div className='w-[95%] mx-auto flex flex-col my-4 bg-white dark:bg-Dwhite border-border dark:border-Dborder border-[1px] rounded-lg py-4 px-2'>
        <div className='flex items-center'>
        <User size={20}/>
<h1 className='text-[1.2rem] font-semibold ml-2'>Profile</h1>
        </div>

<div className='flex justify-between w-full mt-2'>
    <aside className='flex gap-x-2 items-center'>
    <figure className='mdsm:w-[50px] mdsm:h-[50px] h-[40px] w-[40px] relative'>
        <Image src={"/ade.jpg"} className='rounded-full object-fit absolute ' fill alt='profil pix' />
    </figure>
    <div>
        <h1 className='text-text dark:text-Dtext'>Ade Adebest</h1>
        <p className='text-Dgray'>aadebesta@gmail.com</p>
    </div>
    </aside>
<button className='bg-blue rounded-lg px-2 hover:opacity-70 cursor-pointer text-white'>Edit Profile</button>
</div>
        </div>
  )
}

export default Profile